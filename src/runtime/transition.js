/**
 * @file s-transition
 * @author cxtom(cxtom2008@gmail.com)
 */

import {cached, remove, extend, once, isObject} from '../shared/util';
import {addClass, removeClass} from './class-util';

const autoCssTransition = cached(name => {
    return {
        enterClass: `${name}-enter`,
        enterToClass: `${name}-enter-to`,
        enterActiveClass: `${name}-enter-active`,
        leaveClass: `${name}-leave`,
        leaveToClass: `${name}-leave-to`,
        leaveActiveClass: `${name}-leave-active`,
    };
});

function resolveTransition(def) {
    if (!def) {
        return;
    }
    /* istanbul ignore else */
    if (typeof def === 'object') {
        const res = {};
        if (def.css !== false) {
            extend(res, autoCssTransition(def.name || 'v'));
        }
        extend(res, def);
        return res;
    }
    else if (typeof def === 'string') {
        return autoCssTransition(def);
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';

// Transition property/event sniffing
let transitionProp = 'transition';
let transitionEndEvent = 'transitionend';
let animationProp = 'animation';
let animationEndEvent = 'animationend';
/* istanbul ignore if */
if (
    window.ontransitionend === undefined
    && window.onwebkittransitionend !== undefined
) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
}
if (
    window.onanimationend === undefined
    && window.onwebkitanimationend !== undefined
) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
}

const raf = window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout;

function nextFrame(fn) {
    raf(() => {
        raf(fn);
    });
}

const transformRE = /\b(transform|all)(,|$)/;

export function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    const transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    const animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    const animationTimeout = getTimeout(animationDelays, animationDurations);

    let type;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0
            ? transitionTimeout > animationTimeout
                ? TRANSITION
                : ANIMATION
            : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION
        && transformRE.test(styles[transitionProp + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform,
    };
}

function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map((d, i) => {
        return toMs(d) + toMs(delays[i]);
    }));
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

export function addTransitionClass(el, cls) {
    const transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
    }
}

export function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
        remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
}

function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
}

export function whenTransitionEnds(el, expectedType, cb) {
    const {
        type,
        timeout,
        propCount,
    } = getTransitionInfo(el, expectedType);
    if (!type) {
        return cb();
    }
    const event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    let ended = 0;
    const onEnd = e => {
        if (e.target === el) {
            if (++ended >= propCount) {
                // eslint-disable-next-line no-use-before-define
                end();
            }
        }
    };
    const end = () => {
        el.removeEventListener(event, onEnd);
        cb();
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
}

export default function (options) {

    const {
        css,
        type,
        enterClass,
        enterToClass,
        enterActiveClass,
        appearClass,
        appearToClass,
        appearActiveClass,
        beforeEnter,
        enter,
        afterEnter,
        enterCancelled,
        beforeAppear,
        appear,
        afterAppear,
        appearCancelled,
        leaveClass,
        leaveToClass,
        leaveActiveClass,
        beforeLeave,
        leave,
        afterLeave,
        leaveCancelled,
        delayLeave,
        duration,
    } = resolveTransition(options);

    const context = this;
    const expectsCSS = css !== false;

    return {
        enter: enterHandler,
        leave: leaveHandler,
    };

    function getHook(fn) {
        if (!fn) {
            return false;
        }
        if (typeof fn === 'function') {
            return fn;
        }
        const invokerFn = context.owner[fn];
        if (invokerFn && typeof invokerFn === 'function') {
            return invokerFn;
        }
        return false;
    }

    function enterHandler(el, done) {
        const isAppear = !context.lifeCycle.attached;

        // call leave callback now
        if (el._leaveCb) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
        }

        /* istanbul ignore if */
        if (el._enterCb || el.nodeType !== 1) {
            return;
        }

        if (isAppear && !appear) {
            return;
        }

        const startClass = isAppear && appearClass
            ? appearClass
            : enterClass;
        const activeClass = isAppear && appearActiveClass
            ? appearActiveClass
            : enterActiveClass;
        const toClass = isAppear && appearToClass
            ? appearToClass
            : enterToClass;

        const beforeEnterHook = isAppear
            ? (getHook(beforeAppear) || getHook(beforeEnter))
            : getHook(beforeEnter);
        const enterHook = isAppear
            ? (getHook(appear) || getHook(enter))
            : getHook(enter);
        const afterEnterHook = isAppear
            ? (getHook(afterAppear) || getHook(afterEnter))
            : getHook(afterEnter);
        const enterCancelledHook = isAppear
            ? (getHook(appearCancelled) || getHook(enterCancelled))
            : getHook(enterCancelled);

        const explicitEnterDuration = +(isObject(duration) ? duration.enter : duration);
        const userWantsControl = enterHook && enterHook.length > 1;

        const cb = el._enterCb = once(() => {
            if (expectsCSS) {
                removeTransitionClass(el, toClass);
                removeTransitionClass(el, activeClass);
            }
            if (cb.cancelled) {
                if (expectsCSS) {
                    removeTransitionClass(el, startClass);
                }
                enterCancelledHook && enterCancelledHook(el);
            }
            else {
                afterEnterHook && afterEnterHook(el);
            }
            el._enterCb = null;
        });

        // start enter transition
        enterHook && enterHook(el, cb);
        beforeEnterHook && beforeEnterHook(el);
        if (expectsCSS) {
            addTransitionClass(el, startClass);
            addTransitionClass(el, activeClass);
            nextFrame(() => {
                removeTransitionClass(el, startClass);
                if (!cb.cancelled) {
                    addTransitionClass(el, toClass);
                    if (!userWantsControl) {
                        if (isValidDuration(explicitEnterDuration)) {
                            setTimeout(cb, explicitEnterDuration);
                        }
                        else {
                            whenTransitionEnds(el, type, cb);
                        }
                    }
                }
            });
        }

        if (!expectsCSS && !userWantsControl) {
            cb();
        }

        done();
    }

    function leaveHandler(el, done) {

        // call enter callback now
        if (el._enterCb) {
            el._enterCb.cancelled = true;
            el._enterCb();
        }

        /* istanbul ignore if */
        if (el._leaveCb) {
            return;
        }

        const leaveHook = getHook(leave);
        const delayLeaveHook = getHook(delayLeave);
        const beforeLeaveHook = getHook(beforeLeave);
        const afterLeaveHook = getHook(afterLeave);

        const explicitLeaveDuration = +(isObject(duration) ? duration.leave : duration);
        const userWantsControl = leaveHook && leaveHook.length > 1;

        const cb = el._leaveCb = once(() => {
            if (expectsCSS) {
                removeTransitionClass(el, leaveToClass);
                removeTransitionClass(el, leaveActiveClass);
            }
            if (cb.cancelled) {
                if (expectsCSS) {
                    removeTransitionClass(el, leaveClass);
                }
                leaveCancelled && leaveCancelled(el);
            }
            else {
                done();
                afterLeaveHook && afterLeaveHook(el);
            }
            el._leaveCb = null;
        });

        if (delayLeaveHook) {
            delayLeaveHook(performLeave);
        }
        else {
            performLeave();
        }

        function performLeave() {
            // the delayed leave may have already been cancelled
            if (cb.cancelled) {
                return;
            }
            beforeLeaveHook && beforeLeaveHook(el);
            if (expectsCSS) {
                addTransitionClass(el, leaveClass);
                addTransitionClass(el, leaveActiveClass);
                nextFrame(() => {
                    removeTransitionClass(el, leaveClass);
                    if (!cb.cancelled) {
                        addTransitionClass(el, leaveToClass);
                        if (!userWantsControl) {
                            if (isValidDuration(explicitLeaveDuration)) {
                                setTimeout(cb, explicitLeaveDuration);
                            }
                            else {
                                whenTransitionEnds(el, type, cb);
                            }
                        }
                    }
                });
            }
            leaveHook && leaveHook(el, cb);
            if (!expectsCSS && !userWantsControl) {
                cb();
            }
        }
    }
}

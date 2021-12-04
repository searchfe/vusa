<template>
    <div id="demo">
        <button @click="onClick">
            动画
        </button>
        <div>
            <!-- <transition
                name="inline"
                enterClass="hello"
                enterToClass="hello-to"
                enterActiveClass="hello-active"
                leaveClass="bye"
                leaveToClass="bye-to"
                leaveActiveClass="byebye active"
                @enter="onEnter"
                @leave="onLeave"
            >
                <div v-if="ok" class="test">
                    foo
                </div>
            </transition> -->
            <!-- <div>
                <transition
                    name="test"
                    @before-enter="onBeforeEnter"
                    @enter="onEnter"
                    @after-enter="onAfterEnter"
                    @before-leave="onBeforeLeave"
                    @leave="onLeave"
                    @after-leave="onAfterLeave">
                    <div v-show="ok" class="test">
                        foo
                    </div>
                </transition>
            </div> -->
            <div>
                <transition
                    name="test"
                    appear
                    appear-class="test-appear"
                    appear-to-class="test-appear-to"
                    appear-active-class="test-appear-active">
                    <div v-if="ok" class="test">
                        foo
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            ok: true
        };
    },
    methods: {
        onClick() {
            this.ok = !this.ok;
        },
        onEnter() {
            console.log('enter');
        },
        onLeave() {
            console.log('leave');
        },
        onBeforeEnter() {
            console.log('onBeforeEnter');
        },
        onAfterEnter() {
            console.log('onAfterEnter');
        },
        onAfterLeave() {
            console.log('onAfterLeave');
        },
        onBeforeLeave() {
            console.log('onBeforeLeave');
        }
    }
};
</script>

<style lang="stylus">
.test {
    -webkit-transition: opacity 5000ms ease;
    transition: opacity 5000ms ease;
}

.group-move {
    -webkit-transition: -webkit-transform 5000ms ease;
    transition: transform 5000ms ease;
}

.a-appear, .v-enter, .v-leave-active,
.test-appear, .test-enter, .test-leave-active,
.hello, .bye.active,
.changed-enter {
    opacity: 0;
}
.test-anim-enter-active {
    animation: test-enter 5000ms;
    -webkit-animation: test-enter 5000ms;
}
.test-anim-leave-active {
    animation: test-leave 5000ms;
    -webkit-animation: test-leave 5000ms;
}
.test-anim-long-enter-active {
    animation: test-enter 10000ms;
    -webkit-animation: test-enter 10000ms;
}
.test-anim-long-leave-active {
    animation: test-leave 10000ms;
    -webkit-animation: test-leave 10000ms;
}
@keyframes test-enter {
    from { opacity: 0 }
    to { opacity: 1 }
}
@-webkit-keyframes test-enter {
    from { opacity: 0 }
    to { opacity: 1 }
}
@keyframes test-leave {
    from { opacity: 1 }
    to { opacity: 0 }
}
@-webkit-keyframes test-leave {
    from { opacity: 1 }
    to { opacity: 0 }
}
</style>
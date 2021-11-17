window.triggerEvent = function triggerEvent(target, eventName, process) {
    const event = document.createEvent('HTMLEvents');

    event.initEvent(eventName, true, true);

    if (process) {
        process(event);
    }

    target.dispatchEvent(event);
};

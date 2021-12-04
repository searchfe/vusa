function insertCSS(text) {
    var cssEl = document.createElement('style');
    cssEl.textContent = text.trim();
    document.body.appendChild(cssEl);
}

const duration = 1000;
const buffer = 200;
let injected = false;

export default function injectStyles() {
    if (injected) {
        return {
            duration,
            buffer,
        };
    }
    injected = true;
    insertCSS(`
        .test {
            transition-property: opacity;
            transition-duration: 1s;
            transition-timing-function: ease;
            transition-delay: 0;
        }
        .group-move {
            transition-property: transform;
            transition-duration: 1s;
            transition-timing-function: ease;
            transition-delay: 0;
        }
        .a-appear, .v-enter, .v-leave-active,
        .test-appear, .test-enter, .test-leave-active,
        .hello, .bye.active,
        .changed-enter {
            opacity: 0;
        }
        .test-anim-enter-active {
            animation-name: test-enter;
            animation-duration: 1s;
        }
        .test-anim-leave-active {
            animation-name: test-leave;
            animation-duration: 1s;
        }
        .test-anim-long-enter-active {
            animation-name: test-enter;
            animation-duration: 2s;
        }
        .test-anim-long-leave-active {
            animation-name: test-leave;
            animation-duration: 2s;
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
    `);
    return {
        duration,
        buffer,
    };
}

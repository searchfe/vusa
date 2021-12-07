
const raf = window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout;

// const raf = setTimeout;

export default function nextFrame(fn) {
    raf(() => {
        raf(fn);
    });
}

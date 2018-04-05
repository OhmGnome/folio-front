export const onWindowResize =
`function onWindowResize(callbacks) {
    window.addEventListener("resize", resizeThrottler, false);

    let resizeTimeout;
    function resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();
            }, 166);
        }
    }

    function actualResizeHandler() {
        callbacks.forEach(fn => fn())
    }
}`
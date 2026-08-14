
function Loading() {

    const loading = document.getElementById("loading");
    const percentage = document.getElementById("loading-percentage");
    const progressFill = document.getElementById("loading-progress-fill");

    if (!loading || !percentage || !progressFill) return;

    const duration = 5000;
    const startTime = performance.now();

    function updateLoading(currentTime) {
        document.body.style.display = "block";
        const elapsed = currentTime - startTime;

        let progress = (elapsed / duration) * 100;

        progress = Math.min(progress, 100);

        percentage.textContent = Math.floor(progress) + "%";

        progressFill.style.width = progress + "%";

        if (progress < 100) {

            requestAnimationFrame(updateLoading);

        } else {

            /*
             * Wait a tiny moment at 100%
             * before hiding the loader.
             */
            setTimeout(() => {

                loading.classList.add("loaded");
                //aos
                initAOS();

                document.body.classList.remove("is-loading");
            }, 200);

        }
    }
    requestAnimationFrame(updateLoading);


};
function animateCounter(element, target, duration = 500) {

    if (!element) return;

    let startTime = null;

    function update(timestamp) {

        if (!startTime) {
            startTime = timestamp;
        }

        const progress = Math.min(
            (timestamp - startTime) / duration,
            1
        );

        // Fast ease-out
        const eased =
            1 - Math.pow(1 - progress, 2);

        const value = Math.floor(
            eased * target
        );

        element.textContent = `${value}+`;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = `${target}+`;
        }
    }

    requestAnimationFrame(update);
}


/* =========================================================
   ABOUT COUNTERS
========================================================= */

function initAboutCounters() {

    const experienceCounter =
        document.getElementById("counter");

    const projectCounter =
        document.getElementById("projectCount");

    if (!experienceCounter && !projectCounter) {
        return;
    }


    /* =====================================================
       EXPERIENCE
    ===================================================== */

    const startYear = 2023;
    const currentYear = new Date().getFullYear();

    const yearsOfExperience =
        Math.max(0, currentYear - startYear);


    /* =====================================================
       SCROLL OBSERVER
    ===================================================== */

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                const element = entry.target;


                /* =========================================
                   ENTER VIEW
                ========================================= */

                if (entry.isIntersecting) {

                    // Reset before starting
                    element.textContent = "0+";


                    // Experience
                    if (element.id === "counter") {

                        animateCounter(
                            element,
                            yearsOfExperience,
                            500
                        );
                    }


                    // Projects
                    if (element.id === "projectCount") {

                        animateCounter(
                            element,
                            10,
                            600
                        );
                    }

                }


                /* =========================================
                   LEAVE VIEW
                ========================================= */

                else {

                    // Reset so it can animate again
                    element.textContent = "0+";

                }

            });

        },
        {
            threshold: 0.25
        }
    );


    /* =====================================================
       OBSERVE
    ===================================================== */

    if (experienceCounter) {
        observer.observe(experienceCounter);
    }

    if (projectCounter) {
        observer.observe(projectCounter);
    }
}


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initAboutCounters
    );

} else {

    initAboutCounters();

}
function initCurrentWork() {

    const containers = document.querySelectorAll(".current-work-main");

    containers.forEach((container) => {

        const img = container.querySelector(".current-work");
        const button = container.querySelector(".current-work-btn");
        const workName = container.querySelector(".current-work-name");
        const link = container.dataset.link;


        // Make sure required elements exist
        if (!img || !button || !workName || !link) {
            console.warn("Current work element is missing:", container);
            return;
        }


        // =========================================
        // MOUSE ENTER
        // =========================================

        img.addEventListener("mouseenter", () => {

            button.classList.add("show");

            workName.style.display = "block";

        });


        // =========================================
        // MOUSE MOVE
        // =========================================

        img.addEventListener("mousemove", (e) => {

            const rect = container.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.left = `${x}px`;
            button.style.top = `${y}px`;

        });


        // =========================================
        // MOUSE LEAVE
        // =========================================

        img.addEventListener("mouseleave", () => {

            button.classList.remove("show");

        });


        // =========================================
        // OPEN PROJECT
        // =========================================

        container.addEventListener("click", (e) => {

            // Don't trigger if clicking an actual button/link
            if (e.target.closest("button, a")) {
                return;
            }

            window.open(
                link,
                "_blank",
                "noopener,noreferrer"
            );

        });


        // =========================================
        // VIEW BUTTON
        // =========================================

        button.addEventListener("click", (e) => {

            e.preventDefault();
            e.stopPropagation();

            window.open(
                link,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });

}


/* =========================================================
   PROJECT FILTER
========================================================= */

function initProjectFilter() {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".current-work-main");


    /* -----------------------------------------------------
       SAFETY CHECK
    ----------------------------------------------------- */

    if (!filterButtons.length || !projects.length) {
        return;
    }


    /* -----------------------------------------------------
       FILTER PROJECTS
    ----------------------------------------------------- */

    function filterProjects(filter) {

        projects.forEach(project => {

            const category = project.dataset.category;

            const shouldShow =
                filter === "all" ||
                category === filter;


            if (shouldShow) {

                project.style.display = "";

            } else {

                project.style.display = "none";

            }

        });

    }


    /* -----------------------------------------------------
       SET ACTIVE BUTTON
    ----------------------------------------------------- */

    function setActiveButton(activeButton) {

        filterButtons.forEach(button => {

            button.classList.remove("active");

        });

        activeButton.classList.add("active");

    }


    /* -----------------------------------------------------
       BUTTON EVENTS
    ----------------------------------------------------- */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;


            // Update active button
            setActiveButton(button);


            // Filter projects
            filterProjects(filter);

        });

    });


    /* -----------------------------------------------------
       DEFAULT FILTER
    ----------------------------------------------------- */

    filterProjects("all");

}




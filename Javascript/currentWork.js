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

            workName.style.display = "none";

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

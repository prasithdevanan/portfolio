function initCurrentWork() {

    const containers =
        document.querySelectorAll(".current-work-main");


    containers.forEach((container) => {

        const img =
            container.querySelector(".current-work");

        const button =
            container.querySelector(".current-work-btn");

        const link =
            container.dataset.link;

        const workName =
            container.querySelector(".current-work-name");


        // Mouse enter
        img.addEventListener("mouseenter", () => {

            button.classList.add("show");
            workName.style.display = "block";

        });


        // Mouse move
        img.addEventListener("mousemove", (e) => {

            const rect =
                container.getBoundingClientRect();

            button.style.left =
                `${e.clientX - rect.left}px`;

            button.style.top =
                `${e.clientY - rect.top}px`;

        });


        // Mouse leave
        img.addEventListener("mouseleave", () => {

            button.classList.remove("show");
            workName.style.display = "none";

        });


        // Open project
        img.addEventListener("click", () => {

            window.open(
                link,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });

}
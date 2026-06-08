const container = document.querySelectorAll(".current-work-main");

container.forEach((containers) => {
    const img = containers.querySelector(".current-work");
    const button_container = containers.querySelector(".current-work-btn");
    const link = containers.dataset.link;
    const workName = containers.querySelector(".current-work-name");

    img.addEventListener("mousemove", (e) => {
        button_container.style.display = "block";
        const react = containers.getBoundingClientRect();
        button_container.style.left = `${e.clientX - react.left}px`;
        button_container.style.top = `${e.clientY - react.top}px`;
    });

    img.addEventListener("mouseleave", () => {
        button_container.style.display = "none";
        workName.style.display = "none";
    });

    img.addEventListener("mousedown", () => {
        window.open(link, "_blank");
    });

    img.addEventListener("mouseenter", () => {
        workName.style.display = "block";
    });
});
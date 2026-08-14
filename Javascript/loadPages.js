async function loadSection(id, file) {
    const container = document.getElementById(id);
    console.log(id);
    console.log(container);
    if (!container) return;

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        container.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
    }
}


async function loadPage() {

    await Promise.all([
        loadSection("Loading", "./Html/Loading.html"),
        loadSection("LatestWork", "./Html/latestWork.html"),
        loadSection("experience", "./Html/experiences.html"),
        loadSection("services", "./Html/services.html"),
        loadSection("skills", "./Html/skills.html"),
        loadSection("about", "./Html/about.html"),
        loadSection("heroContent", "./Html/hero.html"),
        loadSection("get-in-touch", "./Html/getInTouch.html")
    ]);

    //loading init
    Loading();

    // HTML now exists, so initialize it
    initCurrentWork();

    // Experience Section
    initAboutCounters()

    // logo animation
    initImageLoading();

    //logo animation
    initHeroTools();

    // captcha
    initCaptcha();

    // Start cursor
    // initCustomCursor();


    //services slider
    initServicesSlider();

}


//smooth scroll
function initSmoothScroll() {
    console.log("smooth scroll", window.scrollY);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



loadPage();
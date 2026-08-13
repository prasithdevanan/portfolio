
//------------------------------------------Re-Load Screen scroll into Top-------------------//



// window.addEventListener("load", () => {
//     window.scrollTo(0,0)
// })




/*-----------------Menu icon --------------*/

const navMobile = document.getElementById("nav-mobile");
const menuIcon = document.querySelector(".menuIcon");
const navMobileBackdrop = document.getElementById("nav-mobile-backdrop");
const mobileClose = document.querySelector(".mobile-close");
const mobileLinks = document.querySelectorAll("#nav-mobile a");


/* =========================================
   OPEN / CLOSE MOBILE MENU
========================================= */

function openMobileMenu() {

    navMobile.classList.add("show");
    navMobileBackdrop.classList.add("backdrop");

    document.body.classList.add("freeze-scroll");

    menuIcon.setAttribute("aria-expanded", "true");
    menuIcon.setAttribute("aria-label", "Close navigation");
}


function closeMobileMenu() {

    navMobile.classList.remove("show");
    navMobileBackdrop.classList.remove("backdrop");

    document.body.classList.remove("freeze-scroll");

    menuIcon.setAttribute("aria-expanded", "false");
    menuIcon.setAttribute("aria-label", "Open navigation");
}


/* =========================================
   MENU BUTTON
========================================= */

menuIcon.addEventListener("click", () => {

    if (window.innerWidth <= 820) {

        if (navMobile.classList.contains("show")) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }

    }

});


/* =========================================
   CLOSE BUTTON
========================================= */

mobileClose.addEventListener("click", () => {
    closeMobileMenu();
});


/* =========================================
   BACKDROP CLICK
========================================= */

navMobileBackdrop.addEventListener("click", (event) => {

    // Only close when clicking the backdrop itself
    if (event.target === navMobileBackdrop) {
        closeMobileMenu();
    }

});


/* =========================================
   MOBILE NAVIGATION LINKS
========================================= */

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {
        closeMobileMenu();
    });

});


/* =========================================
   WINDOW RESIZE
========================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 820) {
        closeMobileMenu();
    }

});

// ------------------------Background Animation ----------------------//


function initHeroTools() {
    const container = document.getElementById("hero-tools");
    if (!container) return;

    const logos = Array.from(container.querySelectorAll(".tool"));

    // Wait for all images to load
    Promise.all(
        logos.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => img.onload = resolve);
        })
    ).then(() => startAnimation(container, logos));
}

function startAnimation(container, logos) {
    const directions = [];
    const rotations = [];
    const rotationSpeeds = [];
    const positions = [];

    function isOverlapping(pos1, w1, h1, pos2, w2, h2) {
        return !(
            pos1.x + w1 < pos2.x ||
            pos1.x > pos2.x + w2 ||
            pos1.y + h1 < pos2.y ||
            pos1.y > pos2.y + h2
        );
    }

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    logos.forEach((logo, i) => {
        const logoWidth = logo.offsetWidth;
        const logoHeight = logo.offsetHeight;

        let position;
        let attempts = 0;

        do {
            position = {
                x: Math.random() * (containerWidth - logoWidth),
                y: Math.random() * (containerHeight - logoHeight)
            };

            let overlap = false;

            for (let j = 0; j < i; j++) {
                if (isOverlapping(
                    position, logoWidth, logoHeight,
                    positions[j],
                    logos[j].offsetWidth,
                    logos[j].offsetHeight
                )) {
                    overlap = true;
                    break;
                }
            }

            if (!overlap) break;
            attempts++;
        } while (attempts < 100);

        positions[i] = position;

        directions[i] = {
            x: (Math.random() - 0.5) * 1.5,
            y: (Math.random() - 0.5) * 1.5
        };

        rotations[i] = Math.random() * 360;
        rotationSpeeds[i] = (Math.random() - 0.5) * 0.8;

        logo.style.transform =
            `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotations[i]}deg)`;
    });

    function animate() {
        logos.forEach((logo, i) => {
            const w = logo.offsetWidth;
            const h = logo.offsetHeight;

            const maxX = Math.max(0, containerWidth - w);
            const maxY = Math.max(0, containerHeight - h);

            // Move
            positions[i].x += directions[i].x;
            positions[i].y += directions[i].y;

            // Keep inside LEFT / RIGHT
            if (positions[i].x <= 0) {
                positions[i].x = 0;
                directions[i].x = Math.abs(directions[i].x);
            } else if (positions[i].x >= maxX) {
                positions[i].x = maxX;
                directions[i].x = -Math.abs(directions[i].x);
            }

            // Keep inside TOP / BOTTOM
            if (positions[i].y <= 0) {
                positions[i].y = 0;
                directions[i].y = Math.abs(directions[i].y);
            } else if (positions[i].y >= maxY) {
                positions[i].y = maxY;
                directions[i].y = -Math.abs(directions[i].y);
            }

            // Rotation
            rotations[i] += rotationSpeeds[i];

            logo.style.transform =
                `translate3d(${positions[i].x}px, ${positions[i].y}px, 0) rotate(${rotations[i]}deg)`;
        });

        requestAnimationFrame(() => {
            requestAnimationFrame(animate);
        });
    }

    animate();
}






// const emailInput = document.getElementById("email-input");

// emailInput.addEventListener("input", function () {
//     emailInput.value = emailInput.value.toLowerCase();
// });


// const areaText = document.getElementById("autoExpand");


// areaText.addEventListener("input", function () {
//     this.style.height = "auto";
//     this.style.height = (this.scrollHeight) + "px";
//     this.style.resize = "none";
// })



// -----------------------------------------footer-------------------------------------//

const footer = document.getElementById("footer-message");

window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;

    const newFontSize = Math.max(windowWidth * 0.08, 20);

    footer.style.fontSize = `${newFontSize}px`
})

const windowWidth = window.innerWidth;
const newFontSize = Math.max(windowWidth * 0.08, 20);
footer.style.fontSize = `${newFontSize}px`


const fixed = document.getElementById("fixedElement");


// ---------------------------------------top Symbol-------------------------------------------//
// window.addEventListener("scroll", () => {
//     const scrollTop = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const docHeight = document.documentElement.scrollHeight;

//     if (scrollTop + windowHeight >= 1200) {
//         fixed.style.display = "none";
//     }
//     else {
//         fixed.style.display = "flex";
//     }

// })


// ---------------------------cursor change--------------//
const cursor = document.querySelector(".cursor-circle");

if (cursor) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });


    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.transform =
            `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);

    }


    animateCursor();

}


///---------------------image loading ---------------------//
function initImageLoading() {
    const container = document.getElementById("hero-tools");
    console.log(container);
    const images = container.querySelectorAll("img");
    let loadedCound = 0;

    images.forEach(img => {
        if (img.complete) {
            loadedCound++;
        } else {
            img.addEventListener("load", () => {
                loadedCound++;
                if (loadedCound === images.length) {
                    container.classList.remove("hidden");
                    container.classList.add("show");
                }
            })
        }
    });

    if (loadedCound === images.length) {
        container.classList.remove("hidden");
        container.classList.add("show");
    }
};

function initCustomCursor() {

    // Don't run on mobile/touch devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
        return;
    }

    // Create cursor
    const cursor = document.createElement("div");

    cursor.className = "custom-cursor";

    cursor.innerHTML = `
        <i class="bi bi-cursor"></i>
    `;

    document.body.appendChild(cursor);


    // Move cursor
    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        cursor.classList.remove("hidden");

    });


    // Hide when leaving window
    document.addEventListener("mouseleave", () => {
        cursor.classList.add("hidden");
    });


    document.addEventListener("mouseenter", () => {
        cursor.classList.remove("hidden");
    });


    // Hover elements
    const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select"
    );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });

    });

}



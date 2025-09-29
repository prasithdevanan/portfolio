
//------------------------------------------Re-Load Screen scroll into Top-------------------//


/* window.addEventListener("load", ()=> {
    window.scrollTo({top:0, behavior:"smooth"});
}) */




/*-----------------Menu icon --------------*/

const navMobile = document.getElementById("nav-mobile");
const menuIcon = document.querySelector(".menuIcon");
const navMobileBackdrop = document.getElementById("nav-mobile-backdrop");

navMobile.classList.remove("show")

menuIcon.addEventListener("click", function () {
    if (window.innerWidth <= 819) {
        navMobile.classList.toggle("show");
        document.body.classList.toggle("freeze-scroll");
        navMobileBackdrop.classList.toggle("backdrop");
    }

    else {
        navMobile.classList.remove("show");
        document.body.classList.remove("freeze-scroll");
        navMobileBackdrop.classList.remove("backdrop");
    }
})

window.addEventListener("resize", function () {
    if (this.window.innerWidth > 820) {
        navMobile.classList.remove("show");
        document.body.classList.remove("freeze-scroll");
        navMobileBackdrop.classList.remove("backdrop");
    }
})

window.addEventListener("click", function (event) {
    if (!navMobile.contains(event.target) && !menuIcon.contains(event.target) && navMobile.classList.contains("show") &&
        document.body.classList.contains("freeze-scroll") && navMobileBackdrop.classList.contains("backdrop")) {
        navMobile.classList.remove("show");
        document.body.classList.remove("freeze-scroll");
        navMobileBackdrop.classList.remove("backdrop");
    }
})


function Myfunction() {
    navMobile.classList.remove("show");
    document.body.classList.remove("freeze-scroll");
    navMobileBackdrop.classList.remove("backdrop");
}

/*-----------------Carosal  --------------*/
var servicesMobile = document.getElementById("services-mobile").style.display = "none !important";


window.addEventListener("resize", function (event) {

})

$('.services-mobile').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    initialSlide: 1,
    prevArrow: '<button type="button" class="btn btn-primary slick-prev"><i class="bi bi-caret-left-fill"></i></button>',
    nextArrow: '<button type="button" class="btn btn-primary slick-next"><i class="bi bi-caret-right-fill"></i></button>',
    responsive: [
        {
            breakpoint: 1080,  // Tablet & below
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 800,  // Mobile & below
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 2
            }
        },

        {
            breakpoint: 700,  // Mobile & below
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '18px',
                slidesToShow: 1
            }

        }
    ]
});

// ------------------------photoshopLogo Animation----------------------//


window.addEventListener("load", () => {
    const container = document.getElementById("logo-container");
    const logos = Array.from(container.querySelectorAll(".back-logo"));

    const directions = [];
    const rotations = [];
    const rotationSpeeds = [];
    const positions = [];

    // Function to check overlap between two boxes
    function isOverlapping(pos1, w1, h1, pos2, w2, h2) {
        return !(
            pos1.x + w1 < pos2.x ||
            pos1.x > pos2.x + w2 ||
            pos1.y + h1 < pos2.y ||
            pos1.y > pos2.y + h2
        );
    }

    // Initialize logo positions and properties
    logos.forEach((logo, i) => {
        const logoWidth = logo.offsetWidth;
        const logoHeight = logo.offsetHeight;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        let position;
        let attempts = 0;

        // Avoid overlapping other logos on load
        do {
            position = {
                x: Math.random() * (containerWidth - logoWidth),
                y: Math.random() * (containerHeight - logoHeight)
            };

            let hasOverlap = false;
            for (let j = 0; j < i; j++) {
                if (isOverlapping(position, logoWidth, logoHeight, positions[j], logos[j].offsetWidth, logos[j].offsetHeight)) {
                    hasOverlap = true;
                    break;
                }
            }

            if (!hasOverlap) break;
            attempts++;
        } while (attempts < 100); // fail-safe to prevent infinite loop

        positions[i] = position;

        directions[i] = {
            x: (Math.random() - 0.6) * 1.4, // range: -1 to 1
            y: (Math.random() - 0.6) * 1.4
        };

        rotations[i] = Math.random() * 360;
        rotationSpeeds[i] = (Math.random() - 0.5) * 1;

        // Initial position
        logo.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotations[i]}deg)`;
    });

    // Animation loop
    function animate() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        logos.forEach((logo, i) => {
            const logoWidth = logo.offsetWidth;
            const logoHeight = logo.offsetHeight;

            // Update position
            positions[i].x += directions[i].x;
            positions[i].y += directions[i].y;

            // Bounce off walls
            if (positions[i].x < 0 || positions[i].x > containerWidth - logoWidth) {
                directions[i].x *= -1;
                positions[i].x = Math.max(0, Math.min(containerWidth - logoWidth, positions[i].x));
            }

            if (positions[i].y < 0 || positions[i].y > containerHeight - logoHeight) {
                directions[i].y *= -1;
                positions[i].y = Math.max(0, Math.min(containerHeight - logoHeight, positions[i].y));
            }

            // Update rotation
            rotations[i] += rotationSpeeds[i];

            // Apply styles
            logo.style.transform = `translate3d(${positions[i].x}px, ${positions[i].y}px, 0) rotate(${rotations[i]}deg)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
});

AOS.init();



const emailInput = document.getElementById("email-input");

emailInput.addEventListener("input", function () {
    emailInput.value = emailInput.value.toLowerCase();
});


const areaText = document.getElementById("autoExpand");


areaText.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
})



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
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= 1200) {
        fixed.style.display = "none";
    }
    else {
        fixed.style.display = "flex";
    }

})


// ---------------------------cursor change--------------//

const cursor = document.querySelector(".cursor-circle");

document.addEventListener('mousemove', (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});


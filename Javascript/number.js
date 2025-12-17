// Function to animate a number

let lastScrollY = window.scrollY;

// <-------------------------------------------Experiences animation--------------------------------------------

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.innerHTML = "0" + value + "+";

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}


function animateWhenVisible(element, start, end, duration) {
    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            const currentScrollY = window.scrollY;
            if (entry.isIntersecting && currentScrollY <800) {
                setTimeout(() => {
                    animateValue(element, start, end, duration);
                }, 600);
            }
        })
    }, {
        threshold: 0.6

    })
    observer.observe(element);
}

// Usage
const counter = document.getElementById('counter');
animateWhenVisible(counter, 0, 3, 500); // Animate from 0 to 100 over 2 seconds


// <---------------------------------project animation-----------------------------

function animateValue1(project, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        if (value > 9) {
            project.innerHTML = value + "+";
        }
        else {
            project.innerHTML = "0" + value + "+";
        }


        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}


function animateWhenVisible1(element, start, end, duration) {
    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            const currentScrollY = window.scrollY;
            if (entry.isIntersecting && currentScrollY <800) {
                setTimeout(() => {
                    animateValue1(element, start, end, duration);
                }, 600);

            }
        })
    }, {
        threshold: 0.6

    })
    observer.observe(element);
}


const project = document.getElementById('projectCount');
animateWhenVisible1(project, 0, 10, 800);

// Select all folders
const folders = document.querySelectorAll(".folder");

folders.forEach(folder => {
    // Scope the image elements inside this specific folder
    const insideImage = folder.querySelector(".inside-image");
    const insideImage1 = folder.querySelector(".inside-image1");
    const insideImage2 = folder.querySelector(".inside-image2");
    const frontFolder = folder.querySelector(".front-rect");

    let widthX = 170;
    let widthY = 156;

    let widthX1 = 186;
    let widthY1 = 170;

    let widthX2 = 150;
    let widthY2 = 5;



    function calcualte() {
        if (window.innerWidth > 1000) {
            widthX = 170;
            widthX1 = 186;
            widthX2 = 150;
            widthY = 156;
            widthY1 = 170;
            widthY2 = 5;
        }
        else if (window.innerWidth > 770) {
            widthX = 118;
            widthX1 = 130;
            widthX2 = 100;
            widthY = 130;
            widthY1 = 140;
            widthY2 = 5;
        }

        else if (window.innerWidth > 500) {
            widthX = 116;
            widthX1 = 126;
            widthX2 = 100;
            widthY = 114;
            widthY1 = 128;
            widthY2 = 5;
        }

        else {
            widthX = 116;
            widthX1 = 126;
            widthX2 = 100;
            widthY = 114;
            widthY1 = 128;
            widthY2 = 5;
        }
    }
    window.addEventListener("resize", calcualte)
    calcualte();

    // Mouse enter animation
    folder.addEventListener("mouseenter", () => {
        insideImage.style.transform = `translateY(-${widthX}px) rotate(-19deg) translateX(-${widthY}px)`;
        insideImage1.style.transform = `translateY(-${widthX1}px) rotate(24deg) translateX(${widthY1}px)`;
        insideImage2.style.transform = `translateY(-${widthX2}px) rotate(0deg) translateX(${widthY2}px)`;
        frontFolder.style.transform = "perspective(2000px) rotateX(-50deg)";
        frontFolder.style.transformOrigin = "bottom";
        insideImage.style.boxShadow = "0px 0px 10px #0000004f";
        insideImage1.style.boxShadow = "0px 0px 10px #0000004f";
        insideImage2.style.boxShadow = "0px 0px 10px #0000004f";
    });

    // Mouse leave reset
    folder.addEventListener("mouseleave", () => {
        insideImage.style.transform = "translateY(0px) rotate(0deg) translateX(0px)";
        insideImage1.style.transform = "translateY(0px) rotate(0deg) translateX(0px)";
        insideImage2.style.transform = "translateY(0px) rotate(0deg) translateX(0px)";
        frontFolder.style.transform = "rotateX(0deg)";
        insideImage.style.boxShadow = "0px 0px 10px transparent";
        insideImage1.style.boxShadow = "0px 0px 10px transparent";
        insideImage2.style.boxShadow = "0px 0px 10px transparent";
    });
});


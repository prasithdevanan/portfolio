
window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const reloadBtn = document.querySelector(".reloadBtn");
    const inputBox = document.querySelector(".inputBox");
    const submitBtn = document.getElementById("form-submit");
    const form = document.getElementById("form-fill");
    let text = "";
    const captchaBox = document.querySelector(".captchaBox");

    console.log(captchaBox.children[2])

    const Error = () => {
        captchaBox.children[1].classList.add("error");
        captchaBox.children[2].style.color = "red";
        captchaBox.children[2].textContent = "Invaild Captcha";
    }

    const ErrorMgs = () => {
        captchaBox.children[1].classList.add("error");
        captchaBox.children[2].style.color = "red";
        captchaBox.children[2].textContent = "Enter Captcha";
    }

    inputBox.addEventListener("input", () => {
        captchaBox.children[1].classList.remove("error");
        captchaBox.children[2].style.color = "transparent";
    })

    // Error();




    // random number helper
    const randomNumber = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);

    // generate random captcha string
    const textGenerator = () => {
        let generatedText = "";
        for (let i = 0; i < 3; i++) {
            generatedText += String.fromCharCode(randomNumber(65, 90));  // A–Z
            generatedText += String.fromCharCode(randomNumber(97, 122)); // a–z
            generatedText += String.fromCharCode(randomNumber(48, 57));  // 0–9
        }
        return generatedText;
    };



    // draw captcha on canvas
    function drawStringOnCanvas(string) {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = "20px Roboto Mono";

        const textColors = ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"];
        ctx.fillStyle = textColors[randomNumber(0, 1)];

        const xInitialSpace = 20;
        const letterSpace = 150 / string.length;

        for (let i = 0; i < string.length; i++) {
            ctx.fillText(string[i], xInitialSpace + i * letterSpace, randomNumber(25, 40), 100);
        }
    }

    // reset and generate new captcha
    function triggerFunction() {
        inputBox.value = "";
        text = textGenerator();
        drawStringOnCanvas(text);
    }

    // reload button
    reloadBtn.addEventListener("click", triggerFunction);

    // generate captcha on page load
    triggerFunction();

    // submit button
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        if (inputBox.value == "") {
            ErrorMgs();
            return;
        }

        if (inputBox.value.trim() === text) {
            emailSend();
            // alert("sucessfully send")
            form.reset();
            triggerFunction();
        } else {
            // alert("❌ Invalid captcha. Please try again.");
            Error();
            // triggerFunction();
        }
    });
});


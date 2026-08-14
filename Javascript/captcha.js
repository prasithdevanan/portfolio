
function initCaptcha() {

    const canvas = document.getElementById("canvas");
    const reloadBtn = document.querySelector(".captcha-reload");
    const inputBox = document.getElementById("captcha-input");
    const submitBtn = document.getElementById("form-submit");
    const form = document.getElementById("form-fill");

    let text = "";

    if (!canvas || !reloadBtn || !inputBox || !submitBtn || !form) {
        return;
    }


    /* =====================================================
       CAPTCHA INPUT
    ===================================================== */

    inputBox.addEventListener("input", () => {

        inputBox.classList.remove("invalid");

    });


    /* =====================================================
       RANDOM NUMBER
    ===================================================== */

    const randomNumber = (min, max) =>
        Math.floor(
            Math.random() * (max - min + 1) + min
        );


    /* =====================================================
       GENERATE CAPTCHA
    ===================================================== */

    const textGenerator = () => {

        let generatedText = "";

        for (let i = 0; i < 3; i++) {

            generatedText += String.fromCharCode(
                randomNumber(65, 90)
            );

            generatedText += String.fromCharCode(
                randomNumber(97, 122)
            );

            generatedText += String.fromCharCode(
                randomNumber(48, 57)
            );
        }

        return generatedText;
    };


    /* =====================================================
       DRAW CAPTCHA
    ===================================================== */

    function drawStringOnCanvas(string) {

        const ctx = canvas.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.font = "20px 'Roboto Mono', monospace";

        ctx.fillStyle = "#fff";

        const xInitialSpace = 20;
        const letterSpace = 150 / string.length;

        for (let i = 0; i < string.length; i++) {

            ctx.fillText(
                string[i],
                xInitialSpace + i * letterSpace,
                randomNumber(25, 40),
                100
            );

        }
    }


    /* =====================================================
       RESET CAPTCHA
    ===================================================== */

    function triggerFunction() {

        inputBox.value = "";

        inputBox.classList.remove("invalid");

        text = textGenerator();

        drawStringOnCanvas(text);
    }


    /* =====================================================
       RELOAD CAPTCHA
    ===================================================== */

    reloadBtn.addEventListener(
        "click",
        triggerFunction
    );


    /* =====================================================
       INITIAL CAPTCHA
    ===================================================== */

    triggerFunction();


    /* =====================================================
       SUBMIT
    ===================================================== */

    submitBtn.addEventListener("click", function (event) {

        event.preventDefault();


        /* ---------------------------------------------
           HTML VALIDATION
        --------------------------------------------- */

        if (!form.checkValidity()) {

            form.reportValidity();

            return;
        }


        /* ---------------------------------------------
           EMPTY CAPTCHA
        --------------------------------------------- */

        if (inputBox.value.trim() === "") {

            inputBox.classList.add("invalid");

            showNotification(
                "error",
                "Please enter the CAPTCHA."
            );

            inputBox.focus();

            return;
        }


        /* ---------------------------------------------
           INVALID CAPTCHA
        --------------------------------------------- */

        if (inputBox.value.trim() !== text) {

            inputBox.classList.add("invalid");

            showNotification(
                "error",
                "Invalid CAPTCHA. Please try again."
            );

            inputBox.focus();

            return;
        }


        /* ---------------------------------------------
           CAPTCHA CORRECT
        --------------------------------------------- */

        inputBox.classList.remove("invalid");

        emailSend();

    });

}


/* =========================================================
   NOTIFICATION
========================================================= */

function showNotification(type, message) {

    const notification = document.getElementById("emailNotification");

    if (!notification) return;

    const icon = notification.querySelector("i");
    const text = notification.querySelector("span");


    /* Remove previous state */
    notification.classList.remove(
        "success",
        "error",
        "show"
    );


    /* Set message */
    text.textContent = message;


    /* Set type + icon */
    if (type === "success") {

        notification.classList.add("success");

        icon.className = "bi bi-check";

    } else {

        notification.classList.add("error");

        icon.className = "bi bi-x";

    }


    /* Show */
    requestAnimationFrame(() => {
        notification.classList.add("show");
    });


    /* Hide automatically */
    clearTimeout(notification.notificationTimer);

    notification.notificationTimer = setTimeout(() => {

        notification.classList.remove("show");

    }, 4000);
}


function Error() {

    inputBox.classList.add("invalid");

    showNotification(
        "error",
        "Invalid CAPTCHA. Please try again."
    );
}


function ErrorMgs() {

    inputBox.classList.add("invalid");

    showNotification(
        "error",
        "Please enter the CAPTCHA."
    );
}
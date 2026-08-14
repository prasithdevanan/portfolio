function emailSend() {

   const form = document.getElementById("form-fill");

   const content = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email-input").value.trim(),
      number: document.getElementById("number-input").value.trim(),
      message: document.getElementById("autoExpand").value.trim(),
      subject: document.getElementById("name").value.trim()
   };


   // Start loading
   setSubmitLoading(true);


   emailjs.send(
      "service_c7al9n3",
      "template_m7nashq",
      content
   )

      .then(() => {

         // Stop loading
         setSubmitLoading(false);

         // Success notification
         showEmailNotification(
            "success",
            "Message sent successfully!"
         );

         // Clear form only after success
         form.reset();

         // Generate new CAPTCHA
         if (typeof triggerFunction === "function") {
            triggerFunction();
         }

      })

      .catch((error) => {

         console.error("EmailJS error:", error);

         // Stop loading
         setSubmitLoading(false);

         // Error notification
         showEmailNotification(
            "error",
            "Failed to send message. Please try again."
         );

      });
}

/* =========================================================
   EMAIL NOTIFICATION
========================================================= */

function showEmailNotification(type, message) {

   const notification = document.getElementById("emailNotification");

   if (!notification) {
      console.error("Notification element not found");
      return;
   }

   const icon = notification.querySelector("i");
   const messageElement = notification.querySelector("span");

   if (!icon || !messageElement) {
      console.error("Notification icon or message not found");
      return;
   }


   /* =========================================
      REMOVE OLD STATE
   ========================================= */

   notification.classList.remove(
      "success",
      "error",
      "show"
   );


   /* =========================================
      SET TYPE
   ========================================= */

   notification.classList.add(type);


   /* =========================================
      SET ICON
   ========================================= */

   if (type === "success") {

      icon.className = "bi bi-check-lg";

   } else if (type === "error") {

      icon.className = "bi bi-x-lg";

   }


   /* =========================================
      SET MESSAGE
   ========================================= */

   messageElement.textContent = message;


   /* =========================================
      SHOW
   ========================================= */

   requestAnimationFrame(() => {

      notification.classList.add("show");

   });


   /* =========================================
      HIDE AFTER 5 SECONDS
   ========================================= */

   clearTimeout(notification.notificationTimer);

   notification.notificationTimer = setTimeout(() => {

      notification.classList.remove("show");

   }, 5000);

}

function setSubmitLoading(loading) {

   const submitBtn = document.getElementById("form-submit");

   if (!submitBtn) return;

   if (loading) {
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
   } else {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
   }
}
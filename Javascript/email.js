

function emailSend() {
   let content = {
      name: document.getElementById("name").value,
      email: document.getElementById("email-input").value,
      number: document.getElementById("number-input").value,
      message: document.getElementById("autoExpand").value,
      subject: document.getElementById("name").value

   }

   emailjs.send("service_c7al9n3", "template_m7nashq", content).then(popup())

      .catch(() => {
         console.log("Error sending email", error);
         alert("Failed to send email. Please try again.")
      });

}

function popup() {
   const sucessPopup = document.querySelector(".sucess-popup");
   
   sucessPopup.classList.add('show');

   setTimeout(() => {
      sucessPopup.classList.remove('show');
   }, 5000);
}

// setTimeout(() => {
//    popup();
// }, 2000);
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("response-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      username: form.username.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value
    };

    // Replace this URL with your actual Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbxpaE2uLUbcVv8Qfy6yD8akUc2qYlMpWHkxpKmTdXo/dev"; 

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.result === "success") {
          responseMsg.style.color = "green";
          responseMsg.innerText = data.message;
          form.reset();
        } else {
          responseMsg.style.color = "red";
          responseMsg.innerText = "Error: " + data.message;
        }
      })
      .catch(error => {
        responseMsg.style.color = "red";
        responseMsg.innerText = "Submission failed. Please try again.";
        console.error("Error:", error);
      });
  });
});

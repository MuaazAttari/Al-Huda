const form = document.getElementById("freeTrialForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default submit

    // Collect form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    // Send via FormSubmit's AJAX endpoint
    fetch("https://formsubmit.co/ajax/mraheelk47@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Email sent!", data);
      successMessage.style.display = "block";
      successMessage.style.color = "green";
      form.reset();

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    })
    .catch(error => {
      console.error("Error sending form", error);
      successMessage.innerText = "❌ Something went wrong. Please try again.";
      successMessage.style.color = "red";
      successMessage.style.display = "block";
    });
  });

      const submitButton = form.querySelector("button");

submitButton.disabled = true;
submitButton.textContent = "Sending...";



// After success or failure
submitButton.disabled = false;
submitButton.textContent = "Submit";

  
 function showSuccess() {
    const message = document.getElementById("successMessage");
    message.style.display = "block";
  }

  function hideSuccess() {
    const message = document.getElementById("successMessage");
    message.style.display = "none";
  }

  // Call this inside your form submit success logic
  // Example:
  document.getElementById("freeTrialForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form behavior

    // Simulate submission
    setTimeout(() => {
      showSuccess();
      // Reset form if needed
      this.reset();
    }, 500);
  });

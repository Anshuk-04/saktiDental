// ================= FAQ =================

function showAnswer(number) {

    let answer = document.getElementById("answer" + number);

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}


// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Check required fields
    if (name === "" || email === "" || phone === "") {
        alert("Please fill all required fields.");
        return;
    }

    // Check email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you! Your message has been submitted.");

    this.reset();

});
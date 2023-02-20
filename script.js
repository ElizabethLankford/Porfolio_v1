const toggleBtn = document.querySelector(".toggle-btn")
const navbarLinks = document.querySelector(".navbar-links")
const emailBtn = document.getElementById("emailbtn")
const navLinks = document.querySelectorAll(".navlink");

emailBtn.addEventListener("click", () => {
    console.log("yes!")
  navigator.clipboard.writeText("elizabethlankford1@gmail.com");
  alert("Copied the text: elizabethlankford1@gmail.com");
})

toggleBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
      console.log("linked")
    });
  });




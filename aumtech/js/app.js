window.addEventListener('load', () => {
  document.querySelector('.hero-content p').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.hero-content h1').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.hero-content .b1').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.hero-content .b2').classList.add('show');
});


document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("request").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });





    const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const logo = document.getElementById('logo');

// Set initial theme so that theme persists even after refreshing page 
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  icon.classList.replace('fa-sun', 'fa-moon');
  logo.src = 'images/aumtech-light.jpg';
} else {
  logo.src = 'images/aumtech-dark.jpg';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');

  icon.classList.replace(isLight ? 'fa-sun' : 'fa-moon', isLight ? 'fa-moon' : 'fa-sun');
  logo.src = isLight ? 'images/aumtech-light.jpg' : 'images/aumtech-dark.jpg';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});




//for sending clients mail to aumtech official mail

function sendEmail(e) {
    e.preventDefault(); // prevent actual form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("New message from " + name); //make email subject
    const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`); //make email body

    window.location.href = `mailto:aumtechsolutionofficial@gmail.com?subject=${subject}&body=${body}`; //fills values in gmail by default so that the user only have to click send in gmail app
     //This tells the browser:
//"Open the user's email app (like Gmail or Outlook) to send an email to yourname@gmail.com, and fill in the subject and body."
  }
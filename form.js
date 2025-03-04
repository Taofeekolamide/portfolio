(function () { emailjs.init({ publicKey: "30dqvUycTT0PEK7PJ", }); })();

function sendEmail(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const services = document.getElementById("services").value;
    const message = document.getElementById("message").value;

    var templateParams = {
        name: name,
        email: email,
        phone: phone,
        services: services,
        message: message,
    };

    // Send email via EmailJS
    emailjs.send('service_lnf5yli', 'template_o8xq6to', templateParams).then(
        (response) => {
            alert('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();

        },
        (error) => {
            alert('FAILED...', error);
        },
    );
}

//menu
function showmenu() {
    document.getElementById("menu").style.right = "0%";
}
function hidemenu() {
    document.getElementById("menu").style.right = "-70%";
}

//scrol to top
let button = document.getElementsByClassName("scroll")[0]

window.onscroll = function () {
    if (window.scrollY > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    window.scroll({
        top: 0
    })
}
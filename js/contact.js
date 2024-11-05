function Contact() {

    const name = document.getElementById("name").value;
    var check = true;
    if (name.length < 1) {
        document.getElementById("namecontact").innerHTML = "Please fill out your name.";
    } else {
        document.getElementById("namecontact").innerHTML = "";
        check = false;

    }
    if (name.length >= 100) {
        document.getElementById("namecontact").innerHTML = "Your name should not exceed 100 characters.";
    }
    const email = document.getElementById("email").value;
    if (email.length < 1) {
        document.getElementById("emails").innerHTML = "Please fill out your email";
        check = false;
    } else {
        document.getElementById("emails").innerHTML = "";
    }
    if (email.length >= 100) {
        document.getElementById("emails").innerHTML = "Your mail should not exceed 100 characters";
        check = false;
    }
    const sbt = document.getElementById("sbt").value;
    if (sbt.lenght < 1) {
        document.getElementById("subject").innerHTML = "Please fill out the subject.";
        check = false;
    } else {
        document.getElementById("subject").innerHTML = "";
    }
    if (sbt.length < 50) {
        document.getElementById("subject").innerHTML = "Subject should not shorter than 50 characters.";

    } else {
        document.getElementById("subject").innerHTML = "";
    }
    if (sbt.length >= 250) {
        document.getElementById("subject").innerHTML = "Subject should not exceed 250 characters.";
    }
    const message = document.getElementById("message").value;
    if (message.length < 1) {
        document.getElementById("msg").innerHTML = "Please fill out the message.";
    } else {
        document.getElementById("msg").innerHTML = "";
    }
    if (message.length >= 500) {
        document.getElementById("msg").innerHTML = "Message should not exceed 500 characters.";
    }

    if (check == true) {
        document.getElementById("forms").submit();
    }
    return check
}
window.onclick = function(event) {
    var iconMenu = document.getElementById("dropbtn");
    if (event.target != iconMenu) {
        document.getElementById("navbar-ex1").classList.remove("in");
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
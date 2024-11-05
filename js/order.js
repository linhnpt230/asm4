function Order() {
    const cakeName = document.getElementById("cakeName").value;
    var check = true;
    if (cakeName != "select") {
        document.getElementById("error").innerHTML = "";
    } else {
        document.getElementById("error").innerHTML = "Please select our product.";
        check = false;
    }

    const name = document.getElementById("name").value;

    if (name.length > 0) {
        document.getElementById("Nameerror").innerHTML = "";
    } else {
        document.getElementById("Nameerror").innerHTML = "Please fill out your name.";
        check = false;

    }
    if (name.length >= 100) {
        document.getElementById("Nameerror").innerHTML = "Your name should not exceed 100 characters.";


    }
    const msg = document.getElementById("msg").value;

    if (msg.length >= 30) {
        document.getElementById("msgerror").innerHTML = "Message should not exceed 30 characters.";
        check = false;
    } else {
        document.getElementById("msgerror").innerHTML = "";
    }


    const delivers = document.getElementById("delivers").value;
    if (delivers.length > 0) {
        document.getElementById("delivererror").innerHTML = "";
    } else {
        document.getElementById("delivererror").innerHTML = "Please fill out the address.";
        check = false;
    }
    if (delivers.length >= 500) {
        document.getElementById("deliveerror").innerHTML = "Address should not exceed 500 characters.";
    }
    const date = document.getElementById("date").value;
    if (date.length < 1) {
        document.getElementById("dateerror").innerHTML = "Please fill out the deliver date";
    } else {
        const current = new Date();
        current.setHours(0, 0, 0, 0);
        const deliverDate = new Date(date).getTime();
        if (current.getTime() - deliverDate > 0) {
            document.getElementById("dateerror").innerHTML = "Date must be in the future.";
        } else {
            document.getElementById("dateerror").innerHTML = "";
        }
        if (check == true) {
            document.getElementById("myform").submit();
        }
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
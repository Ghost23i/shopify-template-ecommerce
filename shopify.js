/* NAVIAGTION BAR */
function openMenu(){
    document.body.classList += " menu--open"
}
  
function closeMenu(){
    document.body.classList.remove('menu--open')
}


/* EMAIL VALIDATION */

function emailValidation(){
    var forml = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
       form.classList.add("Valid")
       form.classList.remove("Invalid")
       text.innerHTML = "Your E-mail address is valid"
       text.style.color = "#00ff00"
    }
    else
    {
        form.classList.remove("Valid")
        form.classList.add("Invalid")
        text.innerHTML = "Please enter a valid e-mail"
        text.style.color = "#ff0000"
    }
    if (email == "")
    {
        form.classList.remove("Valid");
        form.classList.remove("Invalid");
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }
}


/* SERVER */

const PORT = process.env.PORT || 5000

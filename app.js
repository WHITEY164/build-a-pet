window.onload = function() {
    var name = document.getElementById('name');
    var pet = document.getElementById('type');
    var leg = document.getElementById("leg");
    var abilities = document.getElementById("abilities");
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    var description = document.getElementById("description")
    var form = document.getElementById("myForm");
    form.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(name.value);
        console.log(type.value);
        console.log(leg.value);
        console.log(abilities.value);
        console.log(email.value);
        console.log(password.value);
        console.log(description.value);
    })
    }
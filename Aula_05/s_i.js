"use strict"
/////////////////////////////////////////////////////////////////
//
// JS DO INDEX
//
/////////////////////////////////////////////////////////////////

const onButtonClickIndex = () => {
    obj = {
        email:     document.getElementById("emailInput").value,
        password:  document.getElementById("senhaInput").value,
    };

    location.href = "./form.html"
}


document.getElementById("botaoProxima").addEventListener("click", () => onButtonClickIndex());



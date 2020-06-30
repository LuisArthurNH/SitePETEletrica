"use strict"
/////////////////////////////////////////////////////////////////
//
// JS DO INDEX
//
/////////////////////////////////////////////////////////////////

const onButtonClickIndex = () => {
    const obj = {
        email:     document.getElementById("emailInput").value,
        password:  document.getElementById("senhaInput").value,
    };

    location.href = "./main.html"
}


document.getElementById("botaoProxima").addEventListener("click", () => onButtonClickIndex());



"use strict"
/////////////////////////////////////////////////////////////////
//
// JS DO INDEX
//
/////////////////////////////////////////////////////////////////

var el_i = document.getElementById("botaoProxima");

if(el_i){
    const onButtonClickIndex = () => {
    location.href = "./form.html"
    }


    document.getElementById("botaoProxima").addEventListener("click", () => onButtonClickIndex());

}

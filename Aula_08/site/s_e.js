"use strict"
/////////////////////////////////////////////////////////////////
//
// JS DA PAG ESTUDANTE
//
/////////////////////////////////////////////////////////////////

// const searchParams = location.search();
// const url = url.split("?")[1]; // tira o primeiro "?"
// const pedacos = url.split("&"); // separa em parametros que vc criou

// const todosPedacos = pedacos.map(pedaco => pedaco.split("=")); // map: p/ cada elemento do array ele faz o que ta na funcao que é dividir no igual
// console.log(todosPedacos);

const urlParams = new URLSearchParams(location.search);

const nome = urlParams.get("nome");
const dataNascimento = urlParams.get("dataNascimento");
const telefone = urlParams.get("telefone");

console.log(nome, dataNascimento, telefone);

        
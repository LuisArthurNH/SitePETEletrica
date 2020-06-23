const obj = {
    a: 5,
    b: true,
    c: {
        d:"ok",
    },
    minhaFuncao: function(){
        console.log("dentro do objeto");
        return "ok";
    },
    square: (x) => x * x,
    square1: x  => x * x,
};

// const q = obj.minhaFuncao();
// console.log(q);

// const a = obj.square1(3);
// console.log(a);

// // ...x -> pega qnts parametros tiverem e imprime sem ser um array
// const console1 = {
//     log: (...x) => {
//         console.log(...x)
//     }
// };

// console1.log(1,"a",true);

// // dois iguais transforma tudo em string e compara.
// // tres iguais leva o tipo em consideração
// console.log("1" === 1);

// nessas funções, se passa um callback e um tempo: 
// setInterval(() => {}, 1000);

// criar um callback: que executa algo (a callback) enquanto a função do timeout é executada
function minhaFuncaoComCallback(nome, callback){
    setTimeout(() => {
        callback();
        console.log("ola de dentro do timeout");
    }, 5000);

    console.log(nome);
    const nomes = nome.split(" ");
    console.log(nomes[0]);
}

minhaFuncaoComCallback("Gustavo lopes", function (){
console.log("dentro do callback");
});
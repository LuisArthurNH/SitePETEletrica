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
// function minhaFuncaoComCallback(nome, callback){
//     setTimeout(() => {
//         callback();
//         console.log("ola de dentro do timeout dps de 5s");
//     }, 5000);

//     console.log(nome);
//     const nomes = nome.split(" ");
//     console.log(nomes[0]);
// }

// minhaFuncaoComCallback("Luis Arthur Novais", function (){
// console.log("dentro do callback");
// });



///////////////////////////////////////////////////////
// Aula 05 
//////////////////////////////////////////////////////

// const arr =[1,2,3,4,5];

// console.log(arr);

// for (let i=0; i<arr.length;i++){
//     const elem = arr[i];
//     console.log(elem);
// }

// console.log("");

// for (const elem of arr){
//     console.log(elem);
// }

// console.log("");

// arr.forEach((elem,index) =>{
//     console.log(elem);
// })

// // map/reduce

// const newArr = arr.map(elem =>elem*2);
// console.log(newArr);

// const filtered = arr.filter(elem => elem % 2 ===0);
// console.log(filtered);

// definition of class

class Cachorro{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    late(){
        console.log("au au");
    }

    andar(passos){
        console.log(`andou ${passos} passos`)
    }

}

const meuCachorro = new Cachorro("luluzinho", 24);
meuCachorro.late();
meuCachorro.andar(12);

console.log(meuCachorro);

// const meuCachorro2 = new Cachorro("mariazinha", 21);
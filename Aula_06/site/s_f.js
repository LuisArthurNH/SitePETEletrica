"use strict"

/////////////////////////////////////////////////////////////////
//
// JS DO FORM
//
//////////////////////////////////////////////////////////////////

document.getElementById("form").addEventListener('submit',function(event) {
    event.preventDefault();

    let full = true;

    const obj = {
        nomeInput:         document.getElementById("nomeInput").value,
        dataInput:         document.getElementById("dataNascimentoInput").value,
        telefoneInput:     document.getElementById("telefoneInput").value,
        cursoInput:        document.getElementById("cursoInput").value,
        habilitacaoInput:  document.getElementById("habilitacaoInput").value,
        ruaInput:          document.getElementById("ruaInput").value,
        numeroInput:       document.getElementById("numeroInput").value,
        aptInput:          document.getElementById("aptInput").value,
        cidadeInput:       document.getElementById("cidadeInput").value,
    };

    if (obj.nomeInput === ""){
        document.getElementById("nomeLabel").innerHTML = "Nome" + " <span id='ver'>* </span>";
        // document.getElementById("fieldsWhiteBox").style.borderColor = "red";
        // document.getElementById("nomeLabel").style.color = "red";
        full = false;

    }
    if (obj.dataInput === ""){
        document.getElementById("dataLabel").innerHTML = "Data de Nascimento" + " <span id='ver'>* </span>";
    }
    if (obj.telefoneInput === ""){
        document.getElementById("telefoneLabel").innerHTML = "Telefone" + " <span id='ver'>* </span>";
    }
    if (obj.cursoInput === ""){
        document.getElementById("cursoLabel").innerHTML = "Curso" + " <span id='ver'>* </span>";
    }
    if (obj.habilitacaoInput === ""){
        document.getElementById("habilitacaoLabel").innerHTML = "Habilitação" + " <span id='ver'>* </span>";
    }
    if (obj.ruaInput === ""){
        document.getElementById("ruaLabel").innerHTML = "Rua" + " <span id='ver'>* </span>";
    }
    if (obj.numeroInput === ""){
        document.getElementById("numeroLabel").innerHTML = "Número" + " <span id='ver'>* </span>";
    }
    if (obj.apartamentoInput === ""){
        document.getElementById("aptLabel").innerHTML = "Apartamento" + " <span id='ver'>* </span>";
    }
    if (obj.cidadeInput === ""){
        document.getElementById("cidadeLabel").innerHTML = "Cidade" + " <span id='ver'>* </span>";
    }   

    const urlParams = new URLSearchParams();
    urlParams.append('nome', obj.nomeInput);
    urlParams.append('dataNascimento', obj.dataInput);
    urlParams.append("telefone", obj.telefoneInput);
    urlParams.append("curso", obj.cursoInput);
    urlParams.append("habilitacao", obj.habilitacaoInput);    
    urlParams.append('rua',  obj.ruaInput);
    urlParams.append("numero", obj.numeroInput);
    urlParams.append("apt", obj.aptInput);
    urlParams.append("cidade", obj.cidadeInput);

    // saves in
    // console.log(urlParams.toString());

    if(full){
        location.href = "./estudante.html"+ "?" + urlParams.toString();    
    }
});

// const printaOla = () => {
//     console.log("olá");
// }

// document.getElementById("conteudo").innerHTML = "<h2>Oláaaa</h2>"
// setInterval( () => {printaOla()}, 1000);


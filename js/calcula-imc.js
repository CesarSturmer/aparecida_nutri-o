var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);


    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEvalido = validaPeso(peso); // true or false
    var alturaEvalida = validaAltura(altura);

    if (!pesoEvalido) {
        console.log("peso inválido");
        pesoEvalido = false;
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEvalida) {
        console.log("altura inválida");
        alturaEvalida = false;
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")

        //paciente.style.backgroundColor = "red"; // PARA DEFINIR UMA PROPRIEDADE QUE EXISTE DUAS PALAVRAS SE DEVE ESCREVER NO STILO CAMELCASE
    }


    if (alturaEvalida && pesoEvalido) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc;
    }

}

function validaPeso(peso) {

    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); // FORMATA UM NUMERO. REDUZINDO A QUANTIDADE DE CASA DECIMAIS QUE DEVEM SER MOSTRADA
}


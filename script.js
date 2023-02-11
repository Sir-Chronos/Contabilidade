//VARIAVEIS

var salariobruto = Number(document.getElementById("salario").value)
var dependencia = Number(document.getElementById("dependente").value)
const conta = document.getElementById("conta")
var inss
var irrf
var baseIR
var vt
var salarioliquido
var enviar

//CALCULO DE VT

function vt() {
    vt = salariobruto*0.06
}

// CALCULO DE INSS

if(salariobruto<=1212.00){
    inss = salariobruto*0.075
}
else if(2427.35<=salariobruto>=1212.01){
    inss = salariobruto*0.09
}
else if(3641.03<=salariobruto>=2427.36){
    inss = salariobruto*0.12
}
else{
    inss = salariobruto*0.14
}

//CALCULO DE IRRF

var baseIR = salariobruto - inss - 189.59*dependencia

if(2826.65<=salariobruto>=1903.99){
    irrf = baseIR*0.075-142,80
}
else if(3751.05<=salariobruto>=2826.66){
    irrf = baseIR*0.15-142,80
}
else if(4664.68<=salariobruto>=3751.06){
    irrf = baseIR*0.225-142,80
}
else{
    irrf = baseIR*0.275-142,80
}

//CALCULO DE SALARIO LIQUIDO

salarioliquido = salariobruto - inss - irrf - vt

//FUNÇÃO ENVIAR

function enviar(){
    conta.innerHTML = `
        <text>RESULTADO</text>
        <table>
            <tr> <td>Salário bruto</td> <td>${salariobruto}</td> </tr>
            <tr> <td>INSS</td> <td>${inss}</td> </tr>
            <tr> <td>IRRF</td> <td>${irrf}</td> </tr>
            <tr> <td>Vale Transporte</td> <td>${vt}</td> </tr>
            <tr> <td>Salário Líquido</td> <td>${salarioliquido}</td> </tr>
        </table>
        <button>Resetar</button>
        `
}
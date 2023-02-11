var salariobruto = Number(document.getElementById("salario").value)
var dependente = Number(document.getElementById("dependente").value)
var inss
var irrf
var baseIR
var vt
var desconto
var salarioliquido

//CALCULO DE VT

vt = salariobruto*0.06

// CALCULO DE INSS

if(salariobruto<=1212.00){
    inss = salariobruto*0.075
}
else if(2427.35<=salariobruto>=1212.01){
    inss = salariobruto*0.09
}
else if(3641.03<=salariobruto>=2427.35){
    inss = salariobruto*0.12
}
else{
    inss = salariobruto*0.14
}

//CALCULO DE IRRF

var baseIR = salariobruto - inss - 189.59*dependente

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


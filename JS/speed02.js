function somar() {
    let num1= parseFloat(document.querySelector("#num1").value);
    let num2= parseFloat(document.querySelector("#num2").value);
    let somar= (num1 + num2);
    let resp= document.querySelector("p1")
    resp.innerHTML= ` A soma é ${somar}`

}

function subtrair() {
    let num1= parseFloat(document.querySelector("#num1").value);
    let num2= parseFloat(document.querySelector("#num2").value);
    let subtrair= (num1 - num2);
    let resp= document.querySelector("p1")
    resp.innerHTML= ` A subtração é ${subtrair}`

}

function multiplicar() {
    let num1= parseFloat(document.querySelector("#num1").value);
    let num2= parseFloat(document.querySelector("#num2").value);
    let multiplicar = (num1 * num2);
    let resp= document.querySelector("p1")
    resp.innerHTML= ` A multiplicação é ${multiplicar}`

}

function dividir() {
    let num1= parseFloat(document.querySelector("#num1").value);
    let num2= parseFloat(document.querySelector("#num2").value);
    let dividir= (num1 / num2);
    let resp= document.querySelector("p1")
    resp.innerHTML= ` A divisão é ${dividir}`

}

function resto() {
    let num1= parseFloat(document.querySelector("#num1").value);
    let num2= parseFloat(document.querySelector("#num2").value);
    let resto= (num1 % num2);
    let resp= document.querySelector("p1")
    resp.innerHTML= ` O resto é ${resto}`

}


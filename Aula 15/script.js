function Calcular(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultado = document.getElementById("result");


    let result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else {
        if (num2 === 0) {
            resultado.textContent = "Não é possível dividir por zero.";
            return;
        }
        result = num1 / num2;
    }

    resultado.textContent = result;


}
const btnCalcular = document.getElementById("calculate2");
btnCalcular.addEventListener("click", Calcular);
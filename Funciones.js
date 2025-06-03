function realizarOperacion(operacion, num1, num2) {
    if  (operacion === 'suma') {
        return num1 + num2; 
    }  else if (operacion === 'resta') {
        return num1 - num2; 
    } else if (operacion === 'multiplicacion') {
        return num1 * num2; 
    } else if (operacion === 'division') {
        if (num2 !== 0) {
            return num1 / num2; 
        } else {
         return 'Error: División por cero no permitida'; 
        }        

    }else {
        return 'Error: Operación no válida'; 
    }
}

document.writeln(realizarOperacion('suma', 10, 5)+'<br>'); // Devuelve 15
document.writeln(realizarOperacion('resta', 10, 5)); // Devuelve 5
document.writeln('<br>'); // Añade un salto de línea
document.writeln(realizarOperacion('multiplicacion', 10, 5)); // Devuelve 50    
document.writeln('<br>'); // Añade un salto de línea
document.writeln(realizarOperacion('division', 10, 5)); // Devuelve 2document.writeln

document.writeln('<br>'); // Añade un salto de línea
let operacion="";
while (operacion !== 'salir') {
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");
    if (operacion === 'salir') {
        alert("Gracias por Salir de nuestro Programa, Operación finalizada.");
                break;
    }
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = realizarOperacion(operacion, num1, num2);
   
    alert("El resultado de la " + operacion + " entre " + num1 + " y " + num2 + " es: " + resultado);
}
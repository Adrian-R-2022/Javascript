/*pedir el numero de la tabla de multiplicar mediante prompt y 
que solamente permita numeros e imprima por consola la tabla*/
let numero;
let multiplicacion;

do {
  numero = parseInt(prompt("Ingrese el numero de la tabla de multiplicar", ""));
  if (numero === null || !numero) {
    alert("No ingreso el numero de la tabla de multiplicar");
  }
} while (isNaN(numero));

console.log(`La tabla de multiplicar de ${numero}`);
for (let i = 1; i <= 10; i++) {
  multiplicacion = numero * i;
  console.log(`${numero} x ${i} = ${multiplicacion}`);
}

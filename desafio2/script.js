//promedio del numero de notas que desea calcular del alumno
let nnotas;
let notas;
let promedio = 0;
let suma = 0;
let nombreAlumno;

function calcularPromedio() {
  do {
    nombreAlumno = prompt("Ingrese el nombre del alumno", "");
    if (nombreAlumno == null || nombreAlumno.trim() == "") {
      alert("El dato que ingresó es incorrecto. Ingrese el nombre del alumno:");
      continue;
    }
    if (!isNaN(Number(nombreAlumno))) {
      alert("El dato que ingresó es incorrecto, Ingrese el nombre del alumno: ");
    }
  } while (!isNaN(Number(nombreAlumno)));
  do {
    nnotas = parseInt(prompt("Digite la cantidad de notas a promediar", ""));
    if (nnotas === null || !nnotas) {
      alert("No digito un numero, por favor digite la cantidad de notas a promediar");
    }
  } while (isNaN(nnotas));

  for (i = 1; i <= nnotas; i++) {
    notas = parseFloat(prompt("Digita la nota  " + i));
    while (notas >= 11) {
      notas = parseFloat(prompt("Digite numero del 1 al 10"));
    }
    suma += notas;
  }
  promedio = suma / nnotas;
  if (promedio <= 10) {
    console.log("El promedio del alumno " + nombreAlumno + " es " + promedio + " APROBADO");
  } else {
    console.log("El promedio del alumno " + nombreAlumno + " es " + promedio + " DESAPROBADO");
  }
}
let nuevanota = calcularPromedio();

let listaAlumnos = [];

class Alumno {
  constructor(nombreAlumno, apellidos, asignatura, notas) {
    this.nombreAlumno = nombreAlumno;
    this.apellidos = apellidos;
    this.asignatura = asignatura;
    this.notas = notas;
    this.promedio = 0;
  }

  //Va a pushear las notas que quiera al array this.notas
  agregarNotas() {
    let nnotas, notas;
    do {
      nnotas = parseInt(prompt("Digite la cantidad de notas a promediar", ""));
      if (nnotas === null || !nnotas) {
        alert("No digito un numero, por favor digite la cantidad de notas a promediar");
      } else {
      }
    } while (isNaN(nnotas));

    for (let i = 1; i <= nnotas; i++) {
      notas = parseFloat(prompt("Digita la nota  " + i));
      while (notas > 10 || isNaN(notas)) {
        notas = parseFloat(prompt("Digite numero del 1 al 10"));
      }
      this.notas.push(notas);
    }
  }

  //this.notas se vuelve un array
  calculoPromedio() {
    let cantidad = this.notas.length;

    if (cantidad != 0) {
      this.promedio = this.notas.reduce((acum, el) => acum + el, 0) / cantidad;
    }
  }
}

function registrarAlumno() {
  let nombreAlumno, apellidos, asignatura;
  do {
    nombreAlumno = prompt("Ingrese el nombre del alumno: ", "").toUpperCase();
    if (nombreAlumno == null || nombreAlumno.trim() == "") {
      alert("El dato que ingresó es incorrecto o el nombre es muy largo. Ingrese el nombre del alumno:");
      continue;
    } else if (nombreAlumno.length > 30) {
      alert("El nombre es muy largo");
    }
    if (!isNaN(nombreAlumno)) {
      alert("El dato que ingresó es incorrecto, Ingrese el nombre del alumno: ");
    }
  } while (nombreAlumno == null || nombreAlumno.trim() == "" || !isNaN(nombreAlumno) || nombreAlumno.length > 30);

  do {
    apellidos = prompt("Ingrese el apellido: ", "").toUpperCase();
    if (apellidos == null || apellidos.trim() == "") {
      alert("El dato que ingresó es incorrecto. Ingrese el apellido:");
      continue;
    } else if (apellidos.length > 20) {
      alert("El nombre es muy largo");
    }
    if (!isNaN(apellidos)) {
      alert("El dato que ingresó es incorrecto, Ingrese el apellido: ");
    }
  } while (apellidos == null || apellidos.trim() == "" || !isNaN(apellidos) || apellidos.length > 20);

  do {
    asignatura = prompt("Ingrese la asignatura: ", "").toUpperCase();
    if (asignatura == null || nombreAlumno.trim() == "") {
      alert("El dato que ingresó es incorrecto. Ingrese la asignatura: ");
      continue;
    } else if (asignatura.length > 25) {
      alert("El nombre es muy largo");
    }
    if (!isNaN(asignatura)) {
      alert("El dato que ingresó es incorrecto, Ingrese la asignatura: ");
    }
  } while (asignatura == null || nombreAlumno.trim() == "" || !isNaN(asignatura) || asignatura.length > 25);

  //[ ] porque this.nota se vuelve un array
  return new Alumno(nombreAlumno, apellidos, asignatura, []);
}
////////////////////////////////////////////////////////////////////////////////

let alumno1 = registrarAlumno();
alumno1.agregarNotas();
alumno1.calculoPromedio();

let alumno2 = registrarAlumno();
alumno2.agregarNotas();
alumno2.calculoPromedio();

let alumno3 = registrarAlumno();
alumno3.agregarNotas();
alumno3.calculoPromedio();

listaAlumnos.push(alumno1);
listaAlumnos.push(alumno2);
listaAlumnos.push(alumno3);

listaAlumnos.forEach((elem) => {
  console.log(elem);
});

console.log("\n");

buscar();

//filtrado
function buscar() {
  //si la lista alumnos esta vacío
  if (listaAlumnos.length == 0) {
    console.log("No existe alumno en la lista para buscar");
    return;
  }
  //Ingresa el valor que deseamos hacer
  let seleccion = parseInt(prompt("Seleccione que desea buscar \n 1. Aprobado \n 2. Desaprobados \n 3. Nombre \n 4. Asignatura"));
  let filtrado;
  switch (seleccion) {
    //Aprobados
    case 1:
      filtrado = listaAlumnos.filter((alumno) => alumno.promedio >= 7);
      console.log(`Lista de los Aprobados\n`);
      if (filtrado.length != 0) {
        for (const alumno of filtrado) {
          console.log(`${alumno.nombreAlumno} con un promedio de ${alumno.promedio}`);
        }
      }
      break;
    //Desaprobados
    case 2:
      filtrado = listaAlumnos.filter((alumno) => alumno.promedio <= 6);
      console.log(`Lista de los Desaprobados\n`);
      if (filtrado.length != 0) {
        for (const alumno of filtrado) {
          console.log(`${alumno.nombreAlumno} con un promedio de ${alumno.promedio}`);
        }
      }
      break;
    //Nombre
    case 3:
      let nombre = prompt("Ingrese el nombre que desea buscar").toUpperCase();
      while (nombre == null || nombre.trim() == "") {
        nombre = prompt("Ingrese la el nombre que desea buscar");
      }
      filtrado = listaAlumnos.filter((alumno) => alumno.nombreAlumno.toUpperCase() == nombre.toUpperCase());
      if (filtrado.length != 0) {
        console.log(`Lista de alumnos con el nombre ${nombre}`);
        for (const alumno of filtrado) {
          console.log(alumno.nombreAlumno);
        }
      } else {
        console.log("No se encontraron los alumnos con ese nombre");
      }
      break;
    //Asignatura
    case 4:
      let asignatura = prompt("Ingrese la asignatura que desea buscar").toUpperCase();
      while (asignatura == null || asignatura.trim() == "") {
        asignatura = prompt("Ingrese la asignatura que desea buscar");
      }
      filtrado = listaAlumnos.filter((alumno) => alumno.asignatura.toUpperCase() == asignatura.toUpperCase());
      if (filtrado.length != 0) {
        console.log(`Lista de alumno con la asignatura ${asignatura}`);
        for (const alumno of filtrado) {
          console.log(alumno.nombreAlumno);
        }
      } else {
        console.log("No se encontraron los alumnos con esa asignatura");
      }
      break;
    default:
      console.log("No es una opción válida");
      break;
  }
}

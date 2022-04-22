let hay_error = "N";
let botonnotas = document.getElementById("agregarNotas");
let promedio = 0;
let estatus = 0;
let listaAlumnos = [];

class Alumno {
  constructor(nombreAlumno, apellidos, asignatura, nota1, nota2, nota3, promedio) {
    this.nombreAlumno = nombreAlumno;
    this.apellidos = apellidos;
    this.asignatura = asignatura;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.promedio = promedio;
    this.estatus = estatus;
  }
}

botonnotas.addEventListener("click", (e) => {
  let nombreAlumno = document.getElementById("nombre").value.toUpperCase();
  let apellidos = document.getElementById("apellidos").value.toUpperCase();
  let asignatura = document.getElementById("asignatura").value.toUpperCase();
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;
  hay_error = "N";
  e.preventDefault();
  estatus = 0;
  //Validar el campo nombre
  validarCampoNombre(nombreAlumno);

  //Validar el campo apellidos
  validarCampoApellido(apellidos);

  //Validar el campo asignatura
  validarCampoAsignatura(asignatura);

  //validar tres notas a promediar
  validarNotas(nota1, nota2, nota3);

  //Calcula el promedio de las tres notas
  promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

  //Promedio menor o igual a 10 entonces aprobado, caso ocntrario aprobado
  if (promedio >= 7 && promedio <= 10) {
    estatus = value = "APROBADO";
  } else {
    estatus = value = "DESAPROBADO";
  }

  //Llena los datos a la tabla
  if (hay_error == "N") {
    const tabla = document.getElementById("agregarTabla");

    const fila = document.createElement("tr");

    fila.innerHTML = `<td> ${nombreAlumno} </td><td> ${apellidos} </td><td> ${asignatura} </td><td> ${nota1} 
        </td><td> ${nota2} </td><td> ${nota3} </td><td> ${promedio.toFixed(1)} </td><td> ${estatus} </td></td> `;

    nuevoAlumno = new Alumno(nombreAlumno, apellidos, asignatura, nota1, nota2, nota3, promedio.toFixed(1));

    listaAlumnos.push(nuevoAlumno);

    tabla.appendChild(fila);

    e.preventDefault();
  }

  limpiarCampos();
});

function validarCampoNombre(campo) {
  if (campo.trim().length == 0) {
    alert("El dato que ingresó es incorrecto, ingrese el nombre del alumno.");
    hay_error = "S";
    return false;
  }
  if (campo.length > 30) {
    alert("El nombre es muy largo");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    alert("El dato que ingresó es incorrecto, ingrese el nombre del alumno: ");
    hay_error = "S";
    return false;
  }
}

function validarCampoApellido(campo) {
  if (campo == null || campo.trim() == "") {
    alert("El dato que ingresó es incorrecto. Ingrese el apellido:");
    hay_error = "S";
    return false;
  }
  if (campo.length > 20) {
    alert("El nombre es muy largo");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    alert("El dato que ingresó es incorrecto, ingrese el apellido: ");
    hay_error = "S";
    return false;
  }
}

function validarCampoAsignatura(campo) {
  if (campo == null || campo.trim() == "") {
    alert("El dato que ingresó es incorrecto, ingrese la asignatura: ");
    hay_error = "S";
    return false;
  }
  if (campo.length > 25) {
    alert("El nombre es muy largo");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    alert("El dato que ingresó es incorrecto, ingrese la asignatura: ");
    hay_error = "S";
    return false;
  }
}

function validarNotas(nota1, nota2, nota3) {
  if (nota1 === "" || nota2 === "" || nota3 === "") {
    alert("No ingreso un numero, por favor ingrese la nota");
    hay_error = "S";
    return false;
  }
  if (!(nota1 > 0 && nota1 <= 10) || !(nota2 > 0 && nota2 <= 10) || !(nota3 > 0 && nota3 <= 10)) {
    alert("Digite numero del 1 al 10");
    hay_error = "S";
    return false;
  }
  if (isNaN(nota1) || isNaN(nota3) || isNaN(nota3)) {
    alert("Digite numero");
    hay_error = "S";
    return false;
  }
}

function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("asignatura").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
}

//Buscar por nombre completo al dar boton enter ya sea por nombre y apellidos
let buscar = document.getElementById("buscar-input");
let arrayfila;
let filaGuardada;

buscar.onkeydown = (e) => {
  if (e.keyCode == 13) {
    let arrayAlumnoFiltrado = [];
    //trae toda la fila
    arrayfila = document.querySelectorAll("tbody tr");
    //recorre la fila
    for (const alumno of listaAlumnos) {
      //busca columna 1, 2, 3
      let columna1 = alumno.nombreAlumno;
      let columna2 = alumno.apellidos;
      let columna3 = alumno.asignatura;
      let columna8 = alumno.estatus;
      //comparando
      if (
        columna1.toUpperCase() == buscar.value.toUpperCase() ||
        columna2.toUpperCase() == buscar.value.toUpperCase() ||
        columna3.toUpperCase() == buscar.value.toUpperCase() ||
        columna8.toUpperCase() == buscar.value.toUpperCase()
      ) {
        arrayAlumnoFiltrado.push(alumno);
      }
    }
    if (arrayAlumnoFiltrado.length != 0) {
      for (const fila of arrayfila) {
        fila.remove();
      }
      for (const alumno of arrayAlumnoFiltrado) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${alumno.nombreAlumno} </td><td> ${alumno.apellidos} </td><td> ${alumno.asignatura} </td><td> ${alumno.nota1} 
        </td><td> ${alumno.nota2} </td><td> ${alumno.nota3} </td><td> ${alumno.promedio} </td><td> ${alumno.estatus} </td></td>`;
        document.getElementById("agregarTabla").appendChild(fila);
      }
    } else {
      for (const fila of arrayfila) {
        fila.remove();
      }
      for (const alumno of listaAlumnos) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${alumno.nombreAlumno} </td><td> ${alumno.apellidos} </td><td> ${alumno.asignatura} </td><td> ${alumno.nota1} 
        </td><td> ${alumno.nota2} </td><td> ${alumno.nota3} </td><td> ${alumno.promedio} </td><td> ${alumno.estatus} </td></td>`;
        document.getElementById("agregarTabla").appendChild(fila);
      }
    }
  }
};

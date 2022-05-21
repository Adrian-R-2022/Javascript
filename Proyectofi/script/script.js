let hay_error = "N";
let promedio = 0;
let estatus = 0;
let botonnotas = document.getElementById("agregarNotas");
let listaAlumnos = [];
let listaNuevaAlumno = [];

class Alumno {
  constructor(id, nombreAlumno, apellidoP, apellidoM, asignatura, nota1, nota2, nota3, promedio) {
    this.id = id;
    this.nombreAlumno = nombreAlumno;
    this.apellidoP = apellidoP;
    this.apellidoM = apellidoM;
    this.asignatura = asignatura;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.promedio = promedio;
    this.estatus = estatus;
  }
}

botonnotas.addEventListener("click", (e) => {
  e.preventDefault();
  //Buscamos todos los datos de nuestro formulario
  let nombreAlumno = document.getElementById("nombre").value.toUpperCase();
  let apellidoP = document.getElementById("apellidoP").value.toUpperCase();
  let apellidoM = document.getElementById("apellidoM").value.toUpperCase();
  let asignatura = document.getElementById("asignatura").value.toUpperCase();
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;

  //indica si hay error en los campos q no ingrese datos a la tabla.
  hay_error = "N";

  //Declaro variable y creo un nuevo id.
  let id = crearId();

  //Validar el campo nombre
  validarCampoNombre(nombreAlumno);

  //Validar el campo apellido paterno
  if (hay_error == "N") {
    validarCampoApellidoP(apellidoP);
  }

  //Validar el campo apellido materno
  if (hay_error == "N") {
    validarCampoApellidoM(apellidoM);
  }

  //Validar el campo asignatura
  if (hay_error == "N") {
    validarCampoAsignatura(asignatura);
  }

  //validar tres notas a promediar
  if (hay_error == "N") {
    validarNotas(nota1, nota2, nota3);
  }

  if (hay_error == "N") {
    //Calcula el promedio de las tres notas
    promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    //Promedio menor o igual a 10 entonces aprobado, caso contrario aprobado
    promedio >= 7 && promedio <= 10 ? (estatus = value = "APROBADO") : (estatus = value = "DESAPROBADO");
  }

  if (hay_error == "N") {
    //Crear a los alumnos y llena los datos a la tabla
    const tabla = document.getElementById("agregarTabla"),
      fila = document.createElement("tr");

    fila.innerHTML = `<td> ${nombreAlumno} </td><td> ${apellidoP} </td> <td> ${apellidoM} </td> <td> ${asignatura} </td><td> ${nota1} 
        </td><td> ${nota2} </td><td> ${nota3} </td><td> ${promedio.toFixed(1)} </td><td> ${estatus} </td>
        <td><button onclick="eliminarAlumno(${id})"><input type="image" src="../img/tache.png" width="20" height="20"></button></td> `;

    tabla.appendChild(fila);

    //Creo un nuevo objeto nuevoAlumno
    const nuevoAlumno = new Alumno(id, nombreAlumno, apellidoP, apellidoM, asignatura, nota1, nota2, nota3, promedio.toFixed(1));
    console.log(nuevoAlumno);

    listaNuevaAlumno = JSON.parse(localStorage.getItem("Alumnos")) || [];
    listaNuevaAlumno.push(nuevoAlumno);
    localStorage.setItem("Alumnos", JSON.stringify(listaNuevaAlumno));

    e.preventDefault();
    limpiarCampos();
    mostrarAlertGuardado();
  }
});

function validarCampoNombre(campo) {
  if (campo.trim().length == 0) {
    Swal.fire("No ingrese ningún dato o el campo esta vacío, Ingrese el nombre del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (campo.length > 30) {
    Swal.fire("El nombre que ingresó es muy largo, Ingrese el nombre del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    Swal.fire("El dato que ingresó es incorrecto, Ingrese el nombre del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (campo.length != /[A-Za-z\s]*/g.exec(campo)[0].length) {
    Swal.fire("Su dato contiene número ó tilde, ingrese el nombre del alumno", "", "error");
    hay_error = "S";
    return false;
  }
}

function validarCampoApellidoP(campo) {
  if (campo == null || campo.trim() == "") {
    Swal.fire("No ingrese ningún dato o el campo esta vacío, Ingrese el apellido paterno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (campo.length > 20) {
    Swal.fire("El apellido paterno que ingresó es muy largo, Ingrese el apellido paterno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    Swal.fire("El dato que ingresó es incorrecto, Ingrese el apellido paterno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (campo.length != /[A-Za-z\s]*/g.exec(campo)[0].length) {
    Swal.fire("Su dato contiene número ó tilde, ingrese el apellido paterno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
}

function validarCampoApellidoM(campo) {
  if (campo == null || campo.trim() == "") {
    Swal.fire("No ingrese ningún dato o el campo esta vacío, ingrese el apellido materno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (campo.length > 20) {
    Swal.fire("El apellido paterno que ingresó es muy largo, Ingrese el apellido paterno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    Swal.fire("El dato que ingresó es incorrecto, Ingrese el apellido materno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (campo.length != /[A-Za-z\s]*/g.exec(campo)[0].length) {
    Swal.fire("Su dato contiene número ó tilde, ingrese el apellido materno del alumno", "", "error");
    hay_error = "S";
    return false;
  }
}

function validarCampoAsignatura(campo) {
  if (campo == null || campo.trim() == "") {
    Swal.fire("Elige la asignatura", "", "error");
    hay_error = "S";
    return false;
  }
}

function validarNotas(nota1, nota2, nota3) {
  if (nota1 === "" || nota2 === "" || nota3 === "") {
    Swal.fire("No ingreso un numero, por favor ingrese la nota del alumno", "", "error");
    hay_error = "S";
    return false;
  }
  if (!(nota1 >= 5 && nota1 <= 10) || !(nota2 >= 5 && nota2 <= 10) || !(nota3 >= 5 && nota3 <= 10)) {
    Swal.fire("Digite número del 5 al 10", "", "error");
    hay_error = "S";
    return false;
  }
  if (isNaN(nota1) || isNaN(nota3) || isNaN(nota3)) {
    Swal.fire("No ingreso un numero, por favor ingrese la nota del alumno", "", "error");
    hay_error = "S";
    return false;
  }
}

function mostrarAlertGuardado() {
  Swal.fire("Registro exitoso", "", "success");
}

function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellidoP").value = "";
  document.getElementById("apellidoM").value = "";
  document.getElementById("asignatura").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
}

//Buscar por nombre al dar boton enter ya sea por nombre y apellido paterno, materno, asignatura y el estatus.
let buscar = document.getElementById("buscar-input");
let arrayfila;
let filaGuardada;

buscar.onkeydown = (e) => {
  if (e.keyCode == 13) {
    let arrayAlumnoFiltrado = [];
    //Trae toda la fila
    arrayfila = document.querySelectorAll("tbody tr");
    //Recorre la fila
    for (const alumno of JSON.parse(localStorage.getItem("Alumnos"))) {
      //busca columna 1, 2, 3, 4 y 8
      let columna1 = alumno.nombreAlumno;
      let columna2 = alumno.apellidoP;
      let columna3 = alumno.apellidoM;
      let columna4 = alumno.asignatura;
      let columna8 = alumno.estatus;
      //comparando
      if (
        columna1.toUpperCase() == buscar.value.toUpperCase() ||
        columna2.toUpperCase() == buscar.value.toUpperCase() ||
        columna3.toUpperCase() == buscar.value.toUpperCase() ||
        columna4.toUpperCase() == buscar.value.toUpperCase() ||
        columna8.toUpperCase() == buscar.value.toUpperCase()
      ) {
        //Agrega el alumno del arreglo filtrado
        arrayAlumnoFiltrado.push(alumno);
      }
    }
    if (arrayAlumnoFiltrado.length != 0) {
      for (const fila of arrayfila) {
        fila.remove();
      }
      for (const alumno of arrayAlumnoFiltrado) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${alumno.nombreAlumno} </td><td> ${alumno.apellidoP} </td><td> ${alumno.apellidoM} </td><td> ${alumno.asignatura} 
        </td><td> ${alumno.nota1} </td><td> ${alumno.nota2} </td><td> ${alumno.nota3} </td><td> ${alumno.promedio} </td><td> ${alumno.estatus} </td>
        <td><button onclick="eliminarAlumno(${alumno.id})"><input type="image" src="../img/tache.png" width="20" height="20"></button></td> `;
        document.getElementById("agregarTabla").appendChild(fila);
      }
    } else {
      for (const fila of arrayfila) {
        fila.remove();
      }
      for (const alumno of JSON.parse(localStorage.getItem("Alumnos"))) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${alumno.nombreAlumno} </td><td> ${alumno.apellidoP} </td><td> ${alumno.apellidoM} </td><td> ${alumno.asignatura} 
        </td><td> ${alumno.nota1} </td><td> ${alumno.nota2} </td><td> ${alumno.nota3} </td><td> ${alumno.promedio} </td><td> ${alumno.estatus} </td>
        <td><button onclick="eliminarAlumno(${alumno.id})"><input type="image" src="../img/tache.png" width="20" height="20"></button></td> `;
        document.getElementById("agregarTabla").appendChild(fila);
      }
    }
  }
};

const crearId = () => {
  let contador = 1;
  let lista = verificarStorage();
  if (lista) {
    while (lista.find((obj) => obj.id == contador)) {
      contador++;
    }
  }
  return contador;
};

const verificarStorage = () => {
  let lista = [];
  if (localStorage.getItem("Alumnos") != null) {
    lista = JSON.parse(localStorage.getItem("Alumnos"));
    return lista;
  }
};

if (verificarStorage() != undefined) {
  const tabla1 = document.getElementById("agregarTabla");
  for (const alumno of JSON.parse(localStorage.getItem("Alumnos"))) {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td> ${alumno.nombreAlumno} </td><td> ${alumno.apellidoP} </td><td> ${alumno.apellidoM} </td><td> ${alumno.asignatura} 
    </td><td> ${alumno.nota1} </td><td> ${alumno.nota2} </td><td> ${alumno.nota3} </td><td> ${alumno.promedio} </td><td> ${alumno.estatus} </td>
    <td><button onclick="eliminarAlumno('${alumno.id}')"><input type="image" src="../img/tache.png" width="20" height="20"></button></td> `;
    tabla1.appendChild(fila);
  }
}

const guardarAlumno = () => {
  verificarStorage() != undefined ? localStorage.setItem("Alumnos", JSON.stringify(verificarStorage())) : localStorage.setItem("Alumnos", JSON.stringify(listaAlumnos));
};

const eliminarAlumno = (id) => {
  let listaVieja = JSON.parse(localStorage.getItem("Alumnos"));
  let listaFiltrada = listaVieja.filter((obj) => obj.id != id);
  localStorage.setItem("Alumnos", JSON.stringify(listaFiltrada));
  location.reload();
};

const obtenerDatos = async () => {
  try {
    let response = await fetch("../json/data.json");
    let result = await response.json();
    console.log(result);
    misAsignaturas(result);
  } catch (error) {
    console.log(error);
  }
};

obtenerDatos();

const misAsignaturas = (result) => {
  //agregamos el select
  const select = document.getElementById("asignatura");

  //recorremos el arreglo
  result.forEach((asignatura) => {
    let option = document.createElement("option");

    //llenamos los datos para poder verlos
    option.value = asignatura.asignatura;
    option.text = asignatura.asignatura;

    console.log(asignatura);
    select.appendChild(option);
  });
};

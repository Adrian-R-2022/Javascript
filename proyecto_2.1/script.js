let hay_error = "N";
let botonnotas = document.getElementById("agregarNotas");
let promedio = 0;
let estatus = 0;
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
  let nombreAlumno = document.getElementById("nombre").value.toUpperCase();
  let apellidoP = document.getElementById("apellidoP").value.toUpperCase();
  let apellidoM = document.getElementById("apellidoM").value.toUpperCase();
  let asignatura = document.getElementById("asignatura").value.toUpperCase();
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;

  hay_error = "N";

  //Declaro variable y creo un nuevo id.
  let id = crearId();

  //Validar el campo nombre
  validarCampoNombre(nombreAlumno);

  //Validar el campo apellido paterno
  validarCampoApellidoP(apellidoP);

  //Validar el campo apellido materno
  validarCampoApellidoM(apellidoM);

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

  //Crear a los alumnos y llena los datos a la tabla
  if (hay_error == "N") {
    const tabla = document.getElementById("agregarTabla");
    const fila = document.createElement("tr");

    fila.innerHTML = `<td> ${nombreAlumno} </td><td> ${apellidoP} </td> <td> ${apellidoM} </td> <td> ${asignatura} </td><td> ${nota1} 
        </td><td> ${nota2} </td><td> ${nota3} </td><td> ${promedio.toFixed(1)} </td><td> ${estatus} </td>
        <td><button onclick="eliminarAlumno(${id})"><input type="image" src="tache.png" width="20" height="20"></button></td> `;

    tabla.appendChild(fila);

    //Creo un nuevo objeto Alumno
    nuevoAlumno = new Alumno(id, nombreAlumno, apellidoP, apellidoM, asignatura, nota1, nota2, nota3, promedio.toFixed(1));
    console.log(nuevoAlumno);

    listaNuevaAlumno = [];
    if (localStorage.getItem("Alumnos") != null) {
      listaNuevaAlumno = JSON.parse(localStorage.getItem("Alumnos"));
      listaNuevaAlumno.push(nuevoAlumno);
      localStorage.setItem("Alumnos", JSON.stringify(listaNuevaAlumno));
      listaAlumnos.push(nuevoAlumno);
    } else {
      listaAlumnos.push(nuevoAlumno);
      localStorage.setItem("Alumnos", JSON.stringify(listaAlumnos));
    }
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

function validarCampoApellidoP(campo) {
  if (campo == null || campo.trim() == "") {
    alert("El dato que ingresó es incorrecto. Ingrese el apellido paterno:");
    hay_error = "S";
    return false;
  }
  if (campo.length > 20) {
    alert("El nombre es muy largo");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    alert("El dato que ingresó es incorrecto, ingrese el apellido paterno: ");
    hay_error = "S";
    return false;
  }
}

function validarCampoApellidoM(campo) {
  if (campo == null || campo.trim() == "") {
    alert("El dato que ingresó es incorrecto. Ingrese el apellido materno:");
    hay_error = "S";
    return false;
  }
  if (campo.length > 20) {
    alert("El nombre es muy largo");
    hay_error = "S";
    return false;
  }
  if (!isNaN(campo)) {
    alert("El dato que ingresó es incorrecto, ingrese el apellido materno: ");
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
  if (!(nota1 >= 5 && nota1 <= 10) || !(nota2 >= 5 && nota2 <= 10) || !(nota3 >= 5 && nota3 <= 10)) {
    alert("Digite numero del 5 al 10");
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
  document.getElementById("apellidoP").value = "";
  document.getElementById("apellidoM").value = "";
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
    for (const alumno of JSON.parse(localStorage.getItem("Alumnos"))) {
      //busca columna 1, 2, 3
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
        <td><button onclick="eliminarAlumno(${alumno.id})"><input type="image" src="tache.png" width="20" height="20"></button></td> `;
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
        <td><button onclick="eliminarAlumno(${alumno.id})"><input type="image" src="tache.png" width="20" height="20"></button></td> `;
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
    <td><button onclick="eliminarAlumno('${alumno.id}')"><input type="image" src="tache.png" width="20" height="20"></button></td> `;
    tabla1.appendChild(fila);
  }
}

const guardar = () => {
  if (verificarStorage() != undefined) {
    localStorage.setItem("Alumnos", JSON.stringify(verificarStorage()));
  } else {
    localStorage.setItem("Alumnos", JSON.stringify(listaAlumnos));
  }
};

const eliminarAlumno = (id) => {
  let listaVieja = JSON.parse(localStorage.getItem("Alumnos"));
  let listaFiltrada = listaVieja.filter((obj) => obj.id != id);
  localStorage.setItem("Alumnos", JSON.stringify(listaFiltrada));
  location.reload();
};

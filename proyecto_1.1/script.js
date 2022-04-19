let botonnotas = document.getElementById("agregarNotas");

botonnotas.onclick = (e) => {
  let nombreAlumno = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let asignatura = document.getElementById("asignatura").value;
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;

  e.preventDefault();

  //Validar el campo nombre
  if (nombreAlumno == null || nombreAlumno.trim() == "") {
    alert("El dato que ingresó es incorrecto, ingrese el nombre del alumno.");
    return false;
  }
  if (nombreAlumno.length > 30) {
    alert("El nombre es muy largo");
    return false;
  }
  if (!isNaN(nombreAlumno)) {
    alert("El dato que ingresó es incorrecto, ingrese el nombre del alumno: ");
    return false;
  }

  //Validar el campo apellidos
  if (apellidos == null || apellidos.trim() == "") {
    alert("El dato que ingresó es incorrecto. Ingrese el apellido:");
    return false;
  } else if (apellidos.length > 20) {
    alert("El nombre es muy largo");
    return false;
  }
  if (!isNaN(apellidos)) {
    alert("El dato que ingresó es incorrecto, ingrese el apellido: ");
    return false;
  }

  //Validar el campo asignatura
  if (asignatura == null || nombreAlumno.trim() == "") {
    alert("El dato que ingresó es incorrecto, ingrese la asignatura: ");
    return false;
  } else if (asignatura.length > 25) {
    alert("El nombre es muy largo");
  }
  if (!isNaN(asignatura)) {
    alert("El dato que ingresó es incorrecto, ingrese la asignatura: ");
    return false;
  }

  //validar tres notas a promediar
  if (nota1 === "" || nota2 === "" || nota3 === "") {
    alert("No ingreso un numero, por favor ingrese la nota");
    return false;
  }
  if (!(nota1 > 0 && nota1 <= 10) || !(nota2 > 0 && nota2 <= 10) || !(nota3 > 0 && nota3 <= 10)) {
    alert("Digite numero del 1 al 10");
    return false;
  }
  if (isNaN(nota1 || nota2 || nota3)) {
    alert("Digite numero");
    return false;
  }

  let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

  const tabla = document.getElementById("agregarTabla");

  const fila = document.createElement("tr");

  fila.innerHTML = `<td> ${nombreAlumno} </td><td> ${apellidos} </td><td> ${asignatura} </td><td> ${nota1} 
  </td><td> ${nota2} </td><td> ${nota3} </td><td> ${promedio.toFixed(1)} </td><td>`;

  //agrega todos los elementos de la fila
  tabla.appendChild(fila);

  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("asignatura").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
};

import "./style.css";

async function verTareas() {
  try {
    const respuesta = await fetch("http://localhost:4000/tasks");
    if (!respuesta.ok) {
      console.error("error en la respuesta del servidor");
      return;
    }
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("error al obtener tareas", error);
  }
}

async function mostrarTarea() {
  const tareas = await verTareas();
  console.log(tareas);
  const $ListaTarea = document.getElementById("listaTarea");
  $ListaTarea.innerHTML = "";
  tareas.forEach((tarea) => {
    const $contenedorTarea = document.createElement("div");

    const $tituloTarea = document.createElement("p");

    $tituloTarea.innerHTML = "<h3>Titulo</h3>" + tarea.title;

    $contenedorTarea.appendChild($tituloTarea);
    // $ListaTarea.appendChild($contenedorTarea);
    const $descripcionTarea = document.createElement("p");
    $descripcionTarea.innerHTML = "<h3>descripcion</h3>" + tarea.description;

    $contenedorTarea.appendChild($descripcionTarea);
    const $isCompleteTarea = document.createElement("p");
    if (isComplete = 0) {
        isComplete =""
    } else {
        
    }
    $isCompleteTarea.innerHTML = "<h3>estado de la tarea</h3>" + tarea.isComplete;
    $contenedorTarea.appendChild($isCompleteTarea);
    $ListaTarea.appendChild($contenedorTarea)

  });
}

mostrarTarea();

const personajes = [
  {
    id: 1,
    nombre: "Nova",
    descripcion: "Un explorador intergaláctico con visión láser.",
    imagen: "nova.jpg"
  },
  {
    id: 2,
    nombre: "Echo",
    descripcion: "Un robot con inteligencia emocional avanzada.",
    imagen: "echo.jpg"
  },
  {
    id: 3,
    nombre: "Vela",
    descripcion: "Navegante espacial que controla campos de energía.",
    imagen: "vela.jpg"
  }
];
const btnFiltrar = document.getElementById("filtrarBtn");
const btnAddCharater = document.getElementById("agregarBtn");
let modoEdicion = false;
let idEnEdicion = null;

btnAddCharater.addEventListener("click", () => {
  const nombre = document.getElementById("nuevoNombre").value;
  const descripcion = document.getElementById("nuevaDescripcion").value;
  const imagen = document.getElementById("nuevaImagen").value;

  if (nombre === "" || descripcion === "" || imagen === "") {
    alert("Complete all fields.");
    return;
  }

  if (modoEdicion) {
    const index = personajes.findIndex(p => p.id === idEnEdicion);
    if (index !== -1) {
      personajes[index].nombre = nombre;
      personajes[index].descripcion = descripcion;
      personajes[index].imagen = imagen;
    }

    modoEdicion = false;
    idEnEdicion = null;
  } else {
    const newCharacter = {
      id: personajes.length + 1,
      nombre,
      descripcion,
      imagen
    };
    personajes.push(newCharacter);
  }

  shoCharacter(personajes);
  document.getElementById("nuevoNombre").value = "";
  document.getElementById("nuevaDescripcion").value = "";
  document.getElementById("nuevaImagen").value = "";
});

btnFiltrar.addEventListener("click", () => {
  const letra = document.getElementById("letraInput").value.toLowerCase();

  const filtrados = personajes.filter((personaje) =>
    personaje.nombre.toLowerCase().startsWith(letra)
  );

  shoCharacter(filtrados);
});

function shoCharacter(array){
    const div = document.getElementById("cardContainer");
    div.innerHTML = ""

   // array.forEach(personaje => {
      for (let i = 0 ; i < array.length; i++) {
            
        const divCharacter = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const img = document.createElement("img");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");


        divCharacter.classList.add("card");
        p.classList.add("description");
        deleteBtn.classList.add("deleteBtn");
        editBtn.classList.add("editBtn");


        h3.textContent = array[i].nombre;
        p.textContent = array[i].descripcion;
        img.src = array[i].imagen;
        deleteBtn.innerText = "Delete";
        deleteBtn.id = i;
        editBtn.innerText = "Edit";
        
        divCharacter.appendChild(h3)
        divCharacter.appendChild(p);
        divCharacter.appendChild(img);
        divCharacter.appendChild(deleteBtn);
        divCharacter.appendChild(editBtn);
        div.appendChild(divCharacter);

        deleteBtn.addEventListener("click", function () {
          const idAEliminar = array[i].id;

           // Buscamos el índice en el array original (personajes)
          const index = personajes.findIndex(p => p.id === idAEliminar);
  
            if (index !== -1) {
            personajes.splice(index, 1);
             shoCharacter(personajes); // Volvemos a mostrar los restantes
            }
     


        });

            editBtn.addEventListener("click", () => {
               document.getElementById("nuevoNombre").value = array[i].nombre;
               document.getElementById("nuevaDescripcion").value = array[i].descripcion;
               document.getElementById("nuevaImagen").value = array[i].imagen;
               
               modoEdicion = true;
               idEnEdicion = array[i].id;
            });

        

        divCharacter.addEventListener("click", () => {
            divCharacter.classList.toggle("expanded");
        })
    };
}


shoCharacter(personajes);
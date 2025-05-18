const personajes = [
  {
    nombre: "Nova",
    descripcion: "Un explorador intergaláctico con visión láser.",
    imagen: "nova.jpg"
  },
  {
    nombre: "Echo",
    descripcion: "Un robot con inteligencia emocional avanzada.",
    imagen: "echo.jpg"
  },
  {
    nombre: "Vela",
    descripcion: "Navegante espacial que controla campos de energía.",
    imagen: "vela.jpg"
  }
];

const btnFiltrar = document.getElementById("filtrarBtn");
const btnAddCharater = document.getElementById("agregarBtn");

btnAddCharater.addEventListener("click", () => {
    const nombre = document.getElementById("nuevoNombre").value;
    const descripcion = document.getElementById("nuevaDescripcion").value;
    const imagen = document.getElementById("nuevaImagen").value;

    if (nombre === "" || descripcion === "" || imagen === "") {
      alert("Complete all fields.");
    return;
    }

    const newCharacter = {
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen
    };
    personajes.push(newCharacter);
    shoCharacter(personajes);


})

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

    array.forEach(personaje => {
            
        const divCharacter = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const img = document.createElement("img");

        divCharacter.classList.add("card");
        p.classList.add("description");

        h3.textContent = personaje.nombre;
        p.textContent = personaje.descripcion;
        img.src = personaje.imagen;
        
        divCharacter.appendChild(h3)
        divCharacter.appendChild(p);
        divCharacter.appendChild(img)
        div.appendChild(divCharacter);

        divCharacter.addEventListener("click", () => {
            divCharacter.classList.toggle("expanded");
        })
    });
}

shoCharacter(personajes);
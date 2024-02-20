const apiUsuarios = "https://jsonplaceholder.typicode.com/users";

const contenedorUsuarios = document.getElementById("contenedorUsuarios");

fetch(apiUsuarios)
    .then(respuesta => respuesta.json())
    .then((datos) =>{
        console.log(datos)
        mostrarUsuarios(datos)
    })
    .catch(error => console.log(error))
 
    function mostrarUsuarios(datos) {
        datos.forEach(x => {
            const li = document.createElement("li")
            li.innerHTML = `${x.id} - ${x.name}`;
            contenedorUsuarios.appendChild(li)
        });
    }


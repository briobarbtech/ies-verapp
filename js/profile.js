const nombrePerfil = document.getElementById("profile__name");
const url = "http://localhost:3000/user/";
function getUsuario (recurso) {
    return fetch(url+recurso).then( respuesta => {
      return respuesta.json() 
    })
}
const usuario = await getUsuario(id);
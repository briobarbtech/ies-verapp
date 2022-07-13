import { crearUsuario, verificarUsuario } from "../js/client.js";
import { UserLogin } from "../js/userLogin.js";

const buttonSubmit = document.querySelector("#submit-button");
const password = document.querySelector('#paswword-register');
const username = document.querySelector('#username-register');

async function registrarse(usuario) {
    console.log(usuario)
    let data = await verificarUsuario();
    let noExiste = true;
    data.forEach(user => {
        if(usuario.username == user.username) {
            noExiste = false
            alert("Este usuario ya existe, intenta con otro")
        }    
    });
    console.log(noExiste)
    if(noExiste) {
        console.log("Agregando")
        crearUsuario(username.value,password.value).then( respuesta => {
            console.log(respuesta);
            window.location.href = "./registro_completado.html"
        }).catch(error => {
            alert(error)
        })
    }
    
}

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    
    const credenciales = new UserLogin(username.value, password.value);

    registrarse(credenciales);
})
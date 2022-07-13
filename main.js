import { verificarUsuario } from "./js/client.js";
import { UserLogin } from "./js/userLogin.js";

const buttonSubmit = document.querySelector(".submit-button");
const password = document.querySelector('#password');
const username = document.querySelector('#username');

async function login(user) {
    const data = await verificarUsuario();
    var esValido = false;
    data.forEach(usuario => {
        var usuarioActual = new UserLogin(usuario.username, usuario.password);
        if(usuarioActual.username == user.username & usuarioActual.password == user.password){
            console.log("es igual al rey");
            esValido = true;
        }
    });
    console.log(esValido)
    return esValido;
}


buttonSubmit.addEventListener('click', () => {
    const usuario = new UserLogin(username.value, password.value)
    login(usuario).then(response => {
        if (response){
            // Si es valido el usuario, ejecuta este codigo
            window.location.replace("../pages/homepage.html");

        }else{
            // si no es valido ejecuta este otro
            alert("Ese usuario o contraseña es incorrecto, por favor revíselo.")
        }
    }).catch((e) => {
        // Si no
        console.log(e)
    })

})

/* buttonSubmit.addEventListener('click', () => {
    user = new UserLogin(username.value, password.value);
    console.log(user.getUsername());
    //console.log('Login');
}); 
 */
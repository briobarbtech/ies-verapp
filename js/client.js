const url = "http://localhost:3000/user";

export function verificarUsuario () {
    return fetch(url).then( respuesta => {
      return respuesta.json() 
    })
}

export const crearUsuario = (username, password) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({username,password, id: uuid.v4()})
    })
}
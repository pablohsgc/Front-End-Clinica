const BASE_URL = "http://localhost:5000";

export async function RequisitaLogin(email, senha) {
    const usuario = {
        email: email,
        senha: senha
    }

    return await fetch(BASE_URL + "/login", {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaListarFuncionarios(email, senha) {
    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/funcionarios", {
        method: 'GET',
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

//Exemplo de requisição que utiliza o token de acesso
/*
export async function RequisitaLogin(email,senha) {
    const usuario = {
        email:email,
        senha:senha
    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL+"/login",{
        method:'POST',
        body:JSON.stringify(usuario),
        headers: {"Content-type": "application/json; charset=UTF-8","bearer":user.token}
    })
    .then(response => response.json())
    .then((json) =>{
        return json
    }).catch((erro) => {
        throw erro;
    })
}*/

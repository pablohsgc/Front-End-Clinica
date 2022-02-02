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

export async function RequisitaListarPacientes(email, senha) {
    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/pacientes", {
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

export async function RequisitaListarAgendamentos(email, senha) {
    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/agendamentos", {
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

export async function RequisitaListarEnderecos(email, senha) {
    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/enderecos", {
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

export async function RequisitaAgendaMedico(codigomedico, data) {
    const medico = {
        codigomedico: codigomedico,
        data: data
    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/agendamentos/consultasMarcadas", {
        method: 'POST',
        body: JSON.stringify(medico),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

//Requisições POST
export async function RequisitaAgendamentos(nome, cpf, email, telefone, especialidade, nomeMedico, logradouro, numero, complemento, bairro, cidade, estado, cep) {
    const usuario = {
        nome:nome,
        cpf:cpf,
        email:email,
        telefone: telefone,
        especialidade: especialidade,
        nomeMedico: nomeMedico,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep
    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL+"/agendamentos",{
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
}

export async function RequisitaEnderecos(logradouro, numero, complemento, bairro, cidade, estado, cep) {
    const usuario = {
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep
    }

    return await fetch(BASE_URL + "/novoEndereco", {
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
}
*/


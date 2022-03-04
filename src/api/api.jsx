// URL para projeto rodando na maquina local
//const BASE_URL = "http://localhost:5000";

// URL conectado com o API hospedada no heroku
const BASE_URL = "https://clica-api.herokuapp.com";


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

export async function RequisitaListarAgendamentos(data) {
    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    let dados = {
        data:data
    }

    return await fetch(BASE_URL + "/agendamentos" , {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaListarEnderecos() {
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

export async function RequisitaAgendaMedico(data) {
    const medico = {
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
export async function RequisitaAgendamento(data,horario,nome,email,telefone,especialidade,codigoMedico) {
    const dados = {
        data: data,
        horario: horario,
        nome: nome,
        email: email,
        telefone: telefone,
        especialidade: especialidade,
        codigoMedico: codigoMedico,
    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/agenda", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaEnderecos(cep, logradouro, bairro, cidade, estado) {
    const dados = {
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        estado: estado
    }

    return await fetch(BASE_URL + "/enderecos", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaCadastrarMedico(nome,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash, especialidade, crm) {
    const dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        dataContrato: dataContrato,
        salario: salario,
        senhaHash: senhaHash,
        especialidade: especialidade,
        crm: crm
    }

    console.log(dados)
    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/medicos", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaCadastrarFuncionario(nome,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash) {
    const dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        dataContrato: dataContrato,
        salario: salario,
        senhaHash: senhaHash
    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/funcionarios", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}
export async function RequisitaCadastrarPaciente(nome, email, telefone, logradouro, bairro, cidade, estado, cep, peso, altura, tipoSanguineo) {
    const dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
        peso: peso,
        altura: altura, 
        tipoSanguineo: tipoSanguineo
    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/pacientes", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaEspecialidades() {
    return await fetch(BASE_URL + "/medicos/especialidades", {
        method: 'GET',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaEspecialistas(especialidade) {
    return await fetch(BASE_URL + "/medicos/especialista/" + especialidade, {
        method: 'GET',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then((json) => {
        return json
    }).catch((erro) => {
        throw erro;
    })
}

export async function RequisitaHorariosDisponiveis(codigoMedico, data) {
    const dados = {
        codigoMedico: codigoMedico,
        data: data
    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/agendamentos/horariosLivres", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer":user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaEndereco(cep) {
    return await fetch(BASE_URL + "/enderecos/" + cep, {
        method: 'GET',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}


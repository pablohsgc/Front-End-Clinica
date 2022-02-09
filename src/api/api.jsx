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

export async function RequisitaAgendaMedico( data) {
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

    return await fetch(BASE_URL + "/agendamentos", {
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

export async function RequisitaCadastrarFuncionario(nome, email, telefone, logradouro, numero, complemento, bairro, cidade, estado, cep, dataInicialTrabalho, salario, senhaHash, especialidade, crm) {
    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
        dataInicialTrabalho: dataInicialTrabalho,
        salario: salario,
        senhaHash: senhaHash,
        especialidade: especialidade,
        crm: crm

    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/cadastrarFuncionario", {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
        .then(response => response.json())
        .then((json) => {
            return json
        }).catch((erro) => {
            throw erro;
        })
}

export async function RequisitaCadastrarPaciente(nome, email, telefone, logradouro, numero, complemento, bairro, cidade, estado, cep) {
    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep

    }

    let user = JSON.parse(localStorage.getItem('usuario-tp2'))

    return await fetch(BASE_URL + "/cadastrarPaciente", {
        method: 'POST',
        body: JSON.stringify(usuario),
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


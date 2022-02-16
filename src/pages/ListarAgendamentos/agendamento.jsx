import React from 'react';
import '../ListarFuncionarios/Item.css';


const Item = ({ item }) => {
    item.horario = (item.horario < 10) ? "0" + item.horario: item.horario;

    return (
        <tr className='text-center'>
            <td>{item.horario}:00</td>
            <td>{item.nome}</td>
            <td>{item.email}</td>
            <td>{item.telefone}</td>
            <td>{item.medico}</td>
            <td>{item.especialidade}</td>
        </tr>
    );
}

export default Item;
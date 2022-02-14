import React from 'react';
import '../ListarFuncionarios/Item.css'

const Item = ({ item }) => {
    let date = Date.parse(item.dataconsulta);
    let data = new Date(date);
    console.log("DATA ", data);
    return (
        <tr className='text-center'>
            <td>{item.codigo}</td>
            <td>{data.getDate()}/{data.getMonth() + 1}/{data.getFullYear()}</td>
            <td>{item.horario} horas</td>
            <td>{item.nome}</td>
            <td>{item.email}</td>
            <td>{item.telefone}</td>
            <td>{item.codigomedico}</td>
        </tr>
    );
}

export default Item;
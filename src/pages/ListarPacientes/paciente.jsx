import React from 'react';
import '../ListarFuncionarios/Item.css'

const Item = ({ item }) => {
    return (
        <tr className='text-center'>
            <td>{item.codigo}</td>
            <td>{item.nome}</td>
            <td>{item.email}</td>
            <td>{item.telefone}</td>     
            <td>{item.tiposanguineo}</td>       
        </tr>
    );
}

export default Item;
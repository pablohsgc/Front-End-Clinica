import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    return (
            <tr className='text-center'>
                <td>{item.codigo}</td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.salario}</td>                
            </tr>
    );
}

export default Item;
import React from 'react';
import '../ListarFuncionarios/Item.css'

const Item = ({ item }) => {
    let date = Date.parse(item.dataconsulta);
    let data = new Date(date);

    return (
        <tr className='text-center'>
            <td>{item.cep}</td>
            <td>{item.logradouro}</td>
            <td>{item.bairro}</td>
            <td>{item.cidade}</td>
            <td>{item.estado}</td>      
        </tr>
    );
}

export default Item;
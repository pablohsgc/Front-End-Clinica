import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    return <div className='item-container'>
        <table border="1" WIDTH='1500' >
            <tr align='center'>
                <td WIDTH='300' align='left'>Nome</td>
                <td WIDTH='300' align='left'>Email</td>
                <td WIDTH='100' align='left'>Código</td>
                <td WIDTH='300' align='left'>Telefone</td>                
                <td WIDTH='100' align='left'>Salário</td>                                
            </tr>
            <tr>
                <td align='left'>{item.nome}</td>
                <td align='left'>{item.email}</td>
                <td align='left'>{item.codigo}</td>
                <td align='left'>{item.telefone}</td>
                <td align='left'>{item.salario}</td>                
            </tr>
        </table>
    </div>
}

export default Item;
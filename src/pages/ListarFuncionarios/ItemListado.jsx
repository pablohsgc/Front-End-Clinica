import React from 'react';
import Item from './Item'

const ItemListado = ({ itemListado }) => {
    return (
            <div className='item-container'>
                <table border="1" WIDTH='1500' >
                    <tr align='center'>
                        <td>Cód.</td>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Telefone</td>                
                        <td>Salário</td>                                
                    </tr>
                    {itemListado.map((item) =>(
                        <Item item={item} />
                    ))}
                </table>
            </div>
    );
}

export default ItemListado;
import React from 'react';
import Item from './agendamento'

const ItemListado = ({ itemListado }) => {
    return (
        <div className='item-container'>
            <table border="1" width='1500' >
                <tr align='center'>
                    <td>Cód.</td>
                    <td >Data</td>
                    <td>Horário</td>
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Telefone</td>
                    <td>Cód. Médico</td>
                </tr>
                {itemListado.map((item) => (
                    <Item item={item} />
                ))}
            </table>
        </div>
    );
}

export default ItemListado;
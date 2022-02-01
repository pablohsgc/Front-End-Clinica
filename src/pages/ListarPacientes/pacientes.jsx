import React from 'react';
import Item from './paciente'

const ItemListado = ({ itemListado }) => {
    return (
        <div className='item-container'>
            <table border="1" width='1500' >
                <tr align='center'>
                    <td>Código</td>
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Telefone</td>
                    <td>Tipo Sanguíneo</td>
                </tr>
                {itemListado.map((item) => (
                    <Item item={item} />
                ))}
            </table>
        </div>
    );
}

export default ItemListado;
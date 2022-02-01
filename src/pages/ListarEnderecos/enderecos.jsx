import React from 'react';
import Item from './endereco'

const ItemListado = ({ itemListado }) => {
    return (
        <div className='item-container'>
            <table border="1" WIDTH='1500' >
                <tr align='center'>
                    <td>CEP</td>
                    <td >Logradouro</td>
                    <td>Bairro</td>
                    <td>Cidade</td>
                    <td>Estado</td>
                </tr>
                {itemListado.map((item) => (
                    <Item item={item} />
                ))}
            </table>
        </div>
    );
}

export default ItemListado;
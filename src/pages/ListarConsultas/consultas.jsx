import React from 'react';
import Item from './consulta'

const ItemListado = ({ itemListado }) => {
    return (
        <div className='item-container'>
            <table border="1" width='1500' >
                <tr align='center'>
                    <td>Cód.</td>
                    <td>Data Consulta</td>
                    <td>Horário</td>
                    <td>Nome Paciente</td>
                    <td>Email Paciente</td>
                    <td>Telefone Paciente</td>
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
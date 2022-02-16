import React from 'react';
import Item from './agendamento'

const ItemListado = ({ itemListado }) => {
    return (
        <div className='item-container'>
            <table border="1" width='1500' >
                <thead>
                    <tr align='center'>
                    <td>Horário</td>
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Telefone</td>
                    <td>Médico</td>
                    <td>Especialidade</td>
                </tr>
                </thead>
                <tbody>
                {itemListado.map((item,index) => (
                    <Item item={item} key={index}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ItemListado;
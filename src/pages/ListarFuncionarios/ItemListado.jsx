import React from 'react';
import Item from './Item'

const ItemListado = ({ itemListado }) => {
    return (
        <>
            {itemListado.map((item) =>(
                <Item item={item} />
            ))}
        </>
    );
}

export default ItemListado;
import '../ListarFuncionarios/Listar.css'
import ItemListado from '../ListarEnderecos/enderecos'
import { RequisitaListarEnderecos } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarEnderecos() {

    const [itemListado, setItem] = useState([]);

    useEffect(() => {

        async function buscarEnderecos() {
            const response = await RequisitaListarEnderecos();
            setItem(response);
        }

        buscarEnderecos();

    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Endereços</h1>
            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
    );

}
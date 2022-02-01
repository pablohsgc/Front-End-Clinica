import './Listar.css'
import ItemListado from './ItemListado'
import { RequisitaListarFuncionarios } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarFuncionarios() {

    const [itemListado, setItem] = useState([]);

    useEffect(() => {

        async function buscarFuncionarios() {
            const response = await RequisitaListarFuncionarios();

            console.log("RESPONSE ", response);            
            
            setItem(response);
        }
        buscarFuncionarios();

    }, [])

    const handleAdicaoItem = async () => {


    };

    return (
        <div className='container'>
            <h1>Lista de Funcionarios:</h1>

            <h5> <ItemListado handleAdicaoItem={handleAdicaoItem}
                itemListado={itemListado} />
            </h5>   


        </div >
    );

}
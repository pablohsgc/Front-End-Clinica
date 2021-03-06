import './Listar.css'
import ItemListado from './ItemListado'
import { RequisitaListarFuncionarios } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarFuncionarios() {

    const [itemListado, setItem] = useState([]);

    useEffect(() => {

        async function buscarFuncionarios() {
            const response = await RequisitaListarFuncionarios();
            if (response.erro) {
                alert(response.erro);
            }else{
                setItem(response);
            }            
        }
        buscarFuncionarios();
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Funcionarios</h1>
            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
    );

}
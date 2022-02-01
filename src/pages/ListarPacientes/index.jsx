import '../ListarFuncionarios/Listar.css'
import ItemListado from '../ListarPacientes/pacientes'
import { RequisitaListarPacientes } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarPacientes() {

    const [itemListado, setItem] = useState([]);

    useEffect(() => {

        async function buscarFuncionarios() {
            const response = await RequisitaListarPacientes();

            setItem(response);
        }

        buscarFuncionarios();

    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Pacientes</h1>
            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
    );

}
import '../ListarFuncionarios/Listar.css'
import ItemListado from '../ListarConsultas/consultas'
import { RequisitaAgendaMedico } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarConsultas() {

    const [itemListado, setItem] = useState([]);

    useEffect(() => {

        async function buscarConsultas(data) {
            const response = await RequisitaAgendaMedico("2021-03-21");

            setItem(response);
        }

        buscarConsultas();

    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Consultas</h1>
            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
    );

}
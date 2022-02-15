import '../ListarFuncionarios/Listar.css'
import ItemListado from '../ListarAgendamentos/agendamentos'
import { RequisitaListarAgendamentos } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarAgendamentos() {

    const [itemListado, setItem] = useState([]);

    useEffect(() => {

        async function buscarAgendamentos() {
            const response = await RequisitaListarAgendamentos();
            if (response.erro) {
                alert(response.erro);
            }

            setItem(response);
        }

        buscarAgendamentos();

    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Agendamentos</h1>
            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
    );

}
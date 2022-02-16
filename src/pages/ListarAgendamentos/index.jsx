import '../ListarFuncionarios/Listar.css';
import ItemListado from '../ListarAgendamentos/agendamentos';
import { RequisitaListarAgendamentos } from "../../api/api";
import { useState, useEffect } from 'react';


export function ListarAgendamentos() {

    const [itemListado, setItem] = useState([]);
    const [data, setData] = useState("2022-02-02");

    useEffect(() => {

        async function buscarAgendamentos() {
            const response = await RequisitaListarAgendamentos(data);
            if (response.erro) {
                alert(response.erro);
            }else{
                setItem(response);
            }
        }
        buscarAgendamentos();
    }, [data])

    return (

        <div className='container'>
            <h1 className='text-center'>Agendamentos</h1>
            <div className='item-container'>
                <label htmlFor="data_agendamentos">Escolha uma data:</label>
                <input id="date" name='calendario' type="date" value={data} onChange={e => setData(e.target.value)} required />
            </div>

            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
        
    );

}
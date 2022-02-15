import '../ListarFuncionarios/Listar.css';
import ItemListado from '../ListarAgendamentos/agendamentos';
import { RequisitaListarAgendamentos, RequisitaAgendaMedico } from "../../api/api";
import { useState, useEffect } from 'react';


export function ListarAgendamentos() {

    const [itemListado, setItem] = useState([]);
    const [data, setData] = useState("2022-02-02");

    useEffect(() => {
        async function buscarConsultas() {
            console.log("DATE: ", data);

            const response = await RequisitaAgendaMedico(data);
            if (response.erro) {
                alert(response.erro);
            }else{
                setItem(response);
            }            
        }
        buscarConsultas();
    }, [data])


    useEffect(() => {

        async function buscarAgendamentos() {
            const response = await RequisitaListarAgendamentos();
            if (response.erro) {
                alert(response.erro);
            }else{
                setItem(response);
            }
        }
        buscarAgendamentos();
    }, [])

    return (

        <div className='container'>
            <h1 className='text-center'>Agendamentos</h1>
            <form className='item-container'>
                <label for="date">Escolha uma data:</label>
                <input id="date" name='calendario' type="date" value={data} onChange={e => setData(e.target.value)} required />
                <input id='selecinarData' name='selecinarData' type="submit" class="btn btn-primary" />
            </form>

            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
        
    );

}
import '../ListarFuncionarios/Listar.css'
import ItemListado from '../ListarConsultas/consultas'
import { RequisitaAgendaMedico } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarConsultas() {

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

    return (
        <div className='container'>
            <h1 className='text-center'>Consultas</h1>
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
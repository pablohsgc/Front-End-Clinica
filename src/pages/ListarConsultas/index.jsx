import '../ListarFuncionarios/Listar.css'
import ItemListado from '../ListarConsultas/consultas'
import { RequisitaAgendaMedico } from "../../api/api";
import { useState, useEffect } from 'react'


export function ListarConsultas() {

    const [itemListado, setItem] = useState([]);

    useEffect(() => {

        async function buscarConsultas() {
            var date = document.getElementById("date").value;
            console.log("DATE: ", date);

            const response = await RequisitaAgendaMedico(date);
            setItem(response);
        }        
        buscarConsultas();
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Consultas</h1>
            <form className='item-container'>
                <label for="date">Escolha uma data:</label>
                <input required id="date" name='calendario' type="date" defaultValue={"2022-02-02"}></input>
                <input id='selecinarData' name='selecinarData' type="submit" class="btn btn-primary"></input>
            </form>

            <h5>
                <ItemListado itemListado={itemListado} />
            </h5>
        </div >
    );

}
import { useEffect, useState } from "react";
import MP from "./DatosMateriaPrima";

function ListaMateriaPrima() {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/api/v1/TablaMateriaPrima", requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));
    }, []) 
    console.log();
    if (datos.length < 1) {
        return <h2>No se encontraron restaurantes</h2>
    }
    return datos.map(function (materiaprima){return <MP ID = {materiaprima.ID} Ingredientes = {materiaprima.Ingredientes} Cantidades = {materiaprima.Cantidades} Costo = {materiaprima.Costo}></MP>})
}
export default ListaMateriaPrima
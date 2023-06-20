import {useEffect, useState  } from "react";
import TipoPanes from "./Tipo_Panes";

function ListadoTipoPanes() {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/api/v1/TablaTipoPanes", requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));
    }, [])
    if (datos.length < 1) {
        return <h2>No se encontraron restaurantes</h2>
    }
    return datos.map(function (tipopanes){return <TipoPanes ID = {tipopanes.ID} Tipo_Pan = {tipopanes.Tipo_Pan} Tipo_Sabor = {tipopanes.Tipo_Sabor} Cantidad = {tipopanes.Cantidad} Fecha_Vencimiento = {tipopanes.Fecha_Vencimiento} Tipo_Empaque = {tipopanes.Tipo_Empaque}></TipoPanes>})
}

export default ListadoTipoPanes
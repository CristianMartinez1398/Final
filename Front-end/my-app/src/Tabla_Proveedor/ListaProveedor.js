import {useEffect, useState  } from "react";
import Proveedor from "./Proveedores";

function ListaProveedor(params) {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/api/v1/TablaProveedores", requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));
    }, [])
    if (datos.length < 1) {
        return <h2>No se encontraron restaurantes</h2>
    }
    return datos.map(function (proveedor){return <Proveedor ID = {proveedor.ID} Nombre_Proveedor = {proveedor.Nombre_Proveedor} Fecha_Entrega = {proveedor.Fecha_Entrega} Tipo_Producto = {proveedor.Tipo_Producto} Telefono = {proveedor.Telefono} Fotografia = {proveedor.Fotografia}></Proveedor>})
}
export default ListaProveedor
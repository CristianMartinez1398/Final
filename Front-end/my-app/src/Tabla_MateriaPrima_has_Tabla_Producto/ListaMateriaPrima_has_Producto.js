import {useEffect, useState} from "react";
import MateriaPrimaHASProducto from "./MateriaPrima_has_Producto";
function ListaMateriaPrimaHASProducto() {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/api/v1/TablaMateriaHasTablaProducto", requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));
    }, [])
    if (datos.length < 1) {
        return <h2>No se encontraron restaurantes</h2>
    }
    return datos.map(function (listamateriaprimahasproducto){return <MateriaPrimaHASProducto Tabla_MateriaPrima_ID = {listamateriaprimahasproducto.Tabla_MateriaPrima_ID} Tabla_producto_ID = {listamateriaprimahasproducto.Tabla_producto_ID} Tabla_producto_Tabla_Proveedor_ID = {listamateriaprimahasproducto.Tabla_producto_Tabla_Proveedor_ID} Tabla_producto_Tabla_Tipo_Panes_ID = {listamateriaprimahasproducto.Tabla_producto_Tabla_Tipo_Panes_ID}></MateriaPrimaHASProducto>})
}
export default ListaMateriaPrimaHASProducto
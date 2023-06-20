import {useState, useEffect } from "react"
import Producto from "./Producto"
function ListaProductos() {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/v1/TablaProducto", requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));
    }, [])

    console.log(datos);
    if (datos.length < 1) {
        return <h2>No se encontraron restaurantes</h2>
    }
    return datos.map(function (producto){return <Producto Imagen_Producto = {producto.Imagen_Producto} ID = {producto.ID} Nombre_Proveedor = {producto.Nombre_Proveedor} Tipo_Producto = {producto.Tipo_Producto} Precio = {producto.Precio}></Producto>})
}
export default ListaProductos
import {useState, useEffect } from "react"




function Registro() {
    const [registra, setDatos] = useState([])
    const [id, setID] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [cantidad_Disponible, setCantidad_Disponible] = useState('')
    const [precio, setPrecio] = useState('')
    const [imagen_Producto, setImagen_Producto] = useState('')
    const [tabla_Proveedor_ID, setTabla_Proveedor_ID] = useState('')
    const [tabla_Tipo_Panes_ID, setTabla_Tipo_Panes_ID] = useState('')
    function registrar() {
    

        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "ID": id,
      "Nombre": nombre,
      "Descripcion": descripcion,
      "Cantidad_Disponible": cantidad_Disponible,
      "Precio": precio,
      "Imagen_Producto": imagen_Producto,
      "Tabla_Proveedor_ID": tabla_Proveedor_ID,
      "Tabla_Tipo_Panes_ID": tabla_Tipo_Panes_ID
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/api/v1/TablaProducto", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }

    return <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
            Registro Producto
        </div>
        <ul className="list-group list-group-flush">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ID </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setID(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Descripcion</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setDescripcion(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Cantidad Disponible</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setCantidad_Disponible(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Precio</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setPrecio(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Imagen producto</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setImagen_Producto(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Proveedor ID </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setTabla_Proveedor_ID(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Tipo Panes ID </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setTabla_Tipo_Panes_ID(e.target.value)}/>
            </div>
        </ul>
        <div class="card-footer">
            <button type="button" class="btn btn-primary" onClick={() => registrar()}>Crear Registro</button>
        </div>
    </div>

}

export default Registro
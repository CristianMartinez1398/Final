import { useState, useEffect } from "react";

function Registro() {
    const [registro, setRegistro] = useState([])
    const [id, setID] = useState([])
    const [nombre_proveedor, setNombre_Proveedor] = useState([])
    const [fecha_entrega, setFecha_Entrega] = useState([])
    const [tipo_producto, setTipo_Producto] = useState([])
    const [telefono, setTelefono] = useState([])
    const [fotografia, setFotografia] = useState([])

    function registrar() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "ID": id,
            "Nombre_Proveedor": nombre_proveedor,
            "Fecha_Entrega": fecha_entrega,
            "Tipo_Producto": tipo_producto,
            "Telefono": telefono,
            "Fotografia": fotografia
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/v1/TablaProveedores", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }




    return <div className="card" style={{width: "18rem"}}>
        <div className="card-header">
            Registro de proveedores
        </div>
        <ul className="list-group list-group-flush">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">ID:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setID(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nombre Proveedor:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setNombre_Proveedor(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Fecha de entraga:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setFecha_Entrega(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Tipo de producto:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTipo_Producto(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Telefono:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Fotografia:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setFotografia(e.target.value)} />
            </div>
        </ul>
        <div className="card-footer">
            <button type="button" className="btn btn-primary" onClick={() => registrar()}>Crear registro</button>
        </div>
    </div>
}

export default Registro
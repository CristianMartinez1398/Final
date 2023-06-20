import { useEffect, useState } from "react";

function Registro() {
    const [registra, setRegistra] = useState([])
    const [tabla_materiaprima_id, setTabla_MateriaPrima_ID] = useState('')
    const [tabla_producto_id, setTabla_producto_ID] = useState('')
    const [tabla_producto_tabla_proveedor_id, setTabla_producto_Tabla_Proveedor_ID] = useState('')
    const [tabla_producto_tabla_tipo_panes_id, setTabla_producto_Tabla_Tipo_Panes_ID] = useState('')

    function registrar() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Tabla_MateriaPrima_ID": tabla_materiaprima_id,
            "Tabla_producto_ID": tabla_producto_id,
            "Tabla_producto_Tabla_Proveedor_ID": tabla_producto_tabla_proveedor_id,
            "Tabla_producto_Tabla_Tipo_Panes_ID": tabla_producto_tabla_tipo_panes_id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/v1/TablaMateriaHasTablaProducto", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
            Registro
        </div>
        <ul className="list-group list-group-flush">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Materia Prima ID:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTabla_MateriaPrima_ID(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Producto ID:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTabla_producto_ID(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Producto y Proveedor ID</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTabla_producto_Tabla_Proveedor_ID(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Producto y Tipo Panes ID:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTabla_producto_Tabla_Tipo_Panes_ID(e.target.value)} />
            </div>

        </ul>
        <div class="card-footer">
        <button type="button" class="btn btn-primary" onClick={() => registrar()}>Crear Registro</button>
        </div>
    </div>

}
export default Registro 
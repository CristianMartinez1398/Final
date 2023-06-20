import { useEffect, useState } from "react"

function Registro() {
    const [registro, setRegistro] = useState([])
    const [id, setID] = useState('')
    const [tipo_pan, setTipo_Pan] = useState('')
    const [tipo_sabor, setTipo_Sabor] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [fecha_vencimiento, setFecha_Vencimiento] = useState('')
    const [tipo_empaque, setTipo_Empaque] = useState('')

    function registrar() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "ID": id,
            "Tipo_Pan": tipo_pan,
            "Tipo_Sabor": tipo_sabor,
            "Cantidad": cantidad,
            "Fecha_Vencimiento": fecha_vencimiento,
            "Tipo_Empaque": tipo_empaque
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/v1/TablaTipoPanes", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return <div class="card" style={{ width: "18rem" }}>
        <div class="card-header">
            Featured
        </div>
        <ul class="list-group list-group-flush">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ID:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setID(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Tipo Pan:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setTipo_Pan(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Tipo Sabor:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setTipo_Sabor(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Cantidad</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setCantidad(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Fecha Vencimiento:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="AAAA-MM-DD" onChange={(e) => setFecha_Vencimiento(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Tipo Empaque:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setTipo_Empaque(e.target.value)} />
            </div>
        </ul>
        <div class="card-footer">
        <button type="button" class="btn btn-primary" onClick={() => registrar()}>Crear Registro</button>
        </div>
    </div>
}
export default Registro

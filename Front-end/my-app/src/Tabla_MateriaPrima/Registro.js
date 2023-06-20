import { useEffect, useState } from "react";


function RegistroMateriaPrima() {

    const [registro, setRegistro] = useState([]);
    const [id, setID] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [cantidades, setCantidades] = useState([]);
    const [costo, setCosto] = useState([]);

    function materiaprima() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "ID": id,
            "Ingredientes": ingredientes,
            "Cantidades": cantidades,
            "Costo": costo
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/v1/TablaMateriaPrima", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    return <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
            Registro de materia prima
        </div>
        <ul className="list-group list-group-flush">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ID:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setID(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ingredientes:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setIngredientes(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Cantidades:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setCantidades(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Precio:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setCosto(e.target.value)} />
            </div>
        </ul>
        <div class="card-footer">
            <button type="" class="btn btn-primary" onClick={() => materiaprima()}>Crear Registro</button>
        </div>
    </div>
}

export default RegistroMateriaPrima
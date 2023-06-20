import { useEffect, useState } from "react";

function MateriaPrima({ID, Ingredientes, Cantidades, Costo}) {
    return <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">Ingredientes: {Ingredientes}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">ID: {ID}</h6>
      <p className="card-text">Cantidades: {Cantidades}</p>
      <p className="card-text">Costos: {Costo}</p>
    </div>
    <button type="button" class="btn btn-primary">Editar</button>
    <button type="button" class="btn btn-danger">Eliminar</button>
  </div>
}

export default MateriaPrima
import { useEffect, useState } from "react";

function TipoPanes({ID, Tipo_Pan, Tipo_Sabor, Cantidad, Fecha_Vencimiento, Tipo_Empaque}) {
    return <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">Tipo Pan: {Tipo_Pan}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">ID: {ID}</h6>
      <p className="card-text">Tipo Sabor: {Tipo_Sabor}</p>
      <p className="card-text">Cantidad: {Cantidad}</p>
      <p className="card-text">Fecha de Vencimiento: {Fecha_Vencimiento}</p>
      <p className="card-text">Tipo Empaque: {Tipo_Empaque}</p>
      <button type="button" class="btn btn-primary">Editar</button>
      <button type="button" class="btn btn-danger">Eliminar</button>
    </div>
  </div>
}

export default TipoPanes
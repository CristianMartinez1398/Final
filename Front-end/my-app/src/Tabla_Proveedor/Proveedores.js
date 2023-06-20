import { useEffect, useState } from "react";

function Proveedor({ ID, Nombre_Proveedor, Fecha_Entrega, Tipo_Producto, Telefono, Fotografia }) {
    return <div className="card" style={{width: "18rem"}}>
        <img src={Fotografia} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{Nombre_Proveedor}</h5>
            <p className="card-text">{Fecha_Entrega}</p>
            <p className="card-text">{Tipo_Producto}</p>
            <p className="card-text">{Telefono}</p>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
    </div>
}
export default Proveedor
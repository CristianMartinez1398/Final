import { useEffect, useState } from 'react'

function MateriaPrimaHASProducto({Tabla_MateriaPrima_ID, Tabla_producto_ID, Tabla_producto_Tabla_Proveedor_ID, Tabla_producto_Tabla_Tipo_Panes_ID}) {
    return <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
            <p className="card-text">Materia Prima ID: {Tabla_MateriaPrima_ID}</p>
            <p className="card-text">Producto ID: {Tabla_producto_ID}</p>
            <p className="card-text">Producto y Proveedor ID: {Tabla_producto_Tabla_Proveedor_ID}</p>
            <p className="card-text">Producto y Tipo Panes ID: {Tabla_producto_Tabla_Tipo_Panes_ID}</p>
        </div>
    </div>
}
export default MateriaPrimaHASProducto
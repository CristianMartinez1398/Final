import { useEffect, useState } from 'react';


function Producto({ Imagen_Producto, ID, Nombre_Proveedor, Tipo_Producto, Precio }) {
  return <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card" style={{ width: "18rem" }}>
        <img src={Imagen_Producto} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-title">{ID}</p>
          <h5 class="card-title">{Nombre_Proveedor}</h5>
          <p class="card-text">El mejor pan de Honduras y a nivel mundial.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{Tipo_Producto}</li>
          <li class="list-group-item">{Precio}</li>

        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-primary">Editar</button>
          <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  </div>



}
export default Producto
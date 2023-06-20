import logo from './logo.svg';
import './App.css';

import ListadoProducto from './Tabla_Producto/ListaProductos';
import Registro from './Tabla_Producto/Registro';

import RegistroMateriaPrima from "./Tabla_MateriaPrima/Registro";
import ListaMateriaPrima from "./Tabla_MateriaPrima/ListaMateriaPrima";

import RegistroProveedores from "./Tabla_Proveedor/Registro";
import ListaProveedor from "./Tabla_Proveedor/ListaProveedor";

import RegistroMateriaPrimaHASProducto from "./Tabla_MateriaPrima_has_Tabla_Producto/Registro";
import ListaMateriaPrimaHASProducto from './Tabla_MateriaPrima_has_Tabla_Producto/ListaMateriaPrima_has_Producto';

import RegistroTipoPanes from "./Tabla_Tipos_Panes/Registro"
import ListadoTipoPanes from "./Tabla_Tipos_Panes/ListadoTipoPanes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <hr></hr>
          <h3>Materia Prima</h3>
          <RegistroMateriaPrima></RegistroMateriaPrima>
          <hr></hr>
          <ListaMateriaPrima></ListaMateriaPrima>
        </section>

        <section>
          <hr></hr>
          <h3>Proveedores</h3>
          <RegistroProveedores></RegistroProveedores>
          <hr></hr>
          <ListaProveedor></ListaProveedor>
        </section>

        <section>
          <hr></hr>
          <h3>Productos</h3>
          <Registro></Registro>
          <hr></hr>
          <ListadoProducto></ListadoProducto>
        </section>
        
        <section>
        <hr></hr>
        <h3>Materia Prima y Productos</h3>
        <RegistroMateriaPrimaHASProducto></RegistroMateriaPrimaHASProducto>
        <hr></hr>
        <ListaMateriaPrimaHASProducto></ListaMateriaPrimaHASProducto>
        </section>
        
        <section>
          <hr></hr>
          <h3>Tipo de Panes</h3>
          <RegistroTipoPanes></RegistroTipoPanes>
          <hr></hr>
          <ListadoTipoPanes></ListadoTipoPanes>
        </section>

      </header>

    </div>

  );
}

export default App;

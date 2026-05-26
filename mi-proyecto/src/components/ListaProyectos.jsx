import { useState } from "react";
import {proyectoService} from "../services/proyectoService.js";

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [buscarProyec, setBuscarProyec] = useState("");
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [nuevoEstado, setNuevoEstado] = useState("");

  let proyectosFiltrados;
    if (buscarProyec === "") {
        proyectosFiltrados = proyectos;
    } else {
        proyectosFiltrados = proyectoService.buscarProyecto(buscarProyec);
    }

  const agregar = () => {
    if (nuevoTitulo && nuevaCategoria && nuevoEstado) {
      const nuevo = {
        id: Date.now(),
        titulo: nuevoTitulo,
        categoria: nuevaCategoria,
        estado: nuevoEstado
      };
      proyectoService.agregarProyecto(nuevo);
      setProyectos(proyectoService.obtenerProyectos());
      
      setNuevoTitulo("");
      setNuevaCategoria("");
      setNuevoEstado("");
    }
  };

  const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <section className="lista-proyectos">

      <h2>Lista de Proyectos</h2>

      <input type="text" placeholder="Buscar proyecto"
        value={buscarProyec} onChange={(e) => setBuscarProyec(e.target.value)}
      />

      <div className="contenedor-proyectos">
        {proyectosFiltrados.map((p) => (

          <div className="card-proyecto" key={p.id}>

            <h3>{p.titulo}</h3>
            <p>
              Categoría: {p.categoria}
            </p>
            <p>
              Estado: {p.estado}
            </p>
            <button onClick={() => eliminar(p.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <h3>Agregar Proyecto</h3>

      <input type="text" placeholder="Título"
        value={nuevoTitulo} onChange={(e) => setNuevoTitulo(e.target.value)}
      />
      <input type="text" placeholder="Categoría"
        value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)}
      />
      <input type="text" placeholder="Estado"
        value={nuevoEstado} onChange={(e) => setNuevoEstado(e.target.value)}
      />
      <button onClick={agregar}>
        Agregar
      </button>

    </section>
  );
}

export default ListaProyectos;
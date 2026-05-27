import { useState } from "react";
import proyectoService from "../services/proyectoService.js";

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
    <h2 className="titulo-seccion">Lista de Proyectos</h2>

    <div className="buscador-proyecto">
      <input
        type="text" placeholder="Buscar proyecto"
        value={buscarProyec} onChange={(e) => setBuscarProyec(e.target.value)}
      />
    </div>

    <div className="proyectos-grid">
      {proyectosFiltrados.map((p) => (
        <div className="proyecto-card" key={p.id}>
          <span className="proyecto-categoria">{p.categoria}</span>

          <h3>{p.titulo}</h3>
          <p>Estado: {p.estado}</p>

          <button className="btn-eliminar" onClick={() => eliminar(p.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>

    <div className="form-agregar">
      <h3 className="titulo-seccion">Agregar Proyecto</h3>
      <input
        type="text" placeholder="Título"
        value={nuevoTitulo} onChange={(e) => setNuevoTitulo(e.target.value)}
      />
      <input
        type="text" placeholder="Categoría"
        value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)}
      />
      <input
        type="text" placeholder="Estado"
        value={nuevoEstado} onChange={(e) => setNuevoEstado(e.target.value)}
      />
      <button className="btn-agregar" onClick={agregar}>
        Agregar
      </button>
    </div>
  </section>
);
}

export default ListaProyectos;
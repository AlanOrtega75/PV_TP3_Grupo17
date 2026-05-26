const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Introducción a la Electrónica",
      categoria: "Tecnologia",
      estado: "Disponible",
    },
    {
      id: 2,
      titulo: "Matemática Aplicada",
      categoria: "Matematica",
      estado: "En progreso",
    },
    {
      id: 3,
      titulo: "Taller de Reparación de PCs",
      categoria: "Tecnologia",
      estado: "En progreso",
    },
    {
      id: 4,
      titulo: "Huerta Sustentable Escolar",
      categoria: "Medio Ambiente",
      estado: "Disponible",
    },
    {
      id: 5,
      titulo: "Programación para Principiantes",
      categoria: "Tecnologia",
      estado: "Finalizado",
    },
  ];

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const agregarProyecto = (nuevo) => {
    proyectos.push(nuevo);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter(p =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
  };
})();

export default proyectoService;
import React, { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const ordenarTareasPorFecha = (a, b) => {
    if (ordenAscendente) {
      return new Date(a.fechaCreacion) - new Date(b.fechaCreacion);
    } else {
      return new Date(b.fechaCreacion) - new Date(a.fechaCreacion);
    }
  };

  const cambiarOrden = () => {
    setOrdenAscendente(!ordenAscendente);
  };

  
  const tareasOrdenadas = [...tareas].sort(ordenarTareasPorFecha);

  return (
    <div>
      <div className="mb-3">
        <button className="btn btn-primary mr-2" onClick={cambiarOrden}>
          {ordenAscendente ? 'Orden Descendente' : 'Orden Ascendente'}
        </button>
      </div>

      <div className="list-group">
        {tareasOrdenadas.map((tarea, index) => (
          <Tarea
            key={index}
            tarea={tarea.texto}
            completada={tarea.completada}
            onDelete={() => eliminarTarea(index)}
            onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
            onToggleCompletada={() => toggleCompletada(index)}
            className={`list-group-item ${tarea.completada ? 'completed' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaTareas;

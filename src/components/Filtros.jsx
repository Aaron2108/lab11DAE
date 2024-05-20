import React from 'react';

function Filtros({ filtrarTareas }) {
  return (
    <div className="btn-group" role="group" aria-label="Filtros">
      <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas("Todas")}>Todas</button>
      <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas("Pendientes")}>Pendientes</button>
      <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas("Completadas")}>Completadas</button>
    </div>
  );
}

export default Filtros;

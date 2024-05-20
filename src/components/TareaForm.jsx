import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) {
      setError("Por favor, introduce una tarea válida.");
      return;
    }
    if (texto.length > 50) {
      setError("La tarea es demasiado larga. Por favor, introduce una tarea más corta.");
      return;
    }
    agregarTarea(texto);
    setTexto("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Agregar Tarea</button>
        </div>
      </div>
      {error && <div className="text-danger mt-2">{error}</div>}
    </form>
  );
}

export default TareaForm;

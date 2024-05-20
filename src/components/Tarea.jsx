import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item ${completada ? 'completed' : ''}`}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={completada}
          onChange={onToggleCompletada}
        />
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleSaveClick}>Guardar</button>
          </>
        ) : (
          <>
            <label className="form-check-label">{tarea}</label>
            <button className="btn btn-danger" onClick={onDelete}>Eliminar</button>
            <button className="btn btn-primary" onClick={handleEditClick}>Editar</button>
          </>
        )}
      </div>
    </li>
  );
}

export default Tarea;

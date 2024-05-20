import { useState } from 'react';
import './App.css'
import ListaTareas from './components/ListaTareas';
import TareaForm from './components/TareaForm';
import Filtros from './components/Filtros';

function App() {

  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas")

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false }]);
    };

    const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
    };

    const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
    };

    const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
    };

    const filtrarTareas = (filtro) => {
    setFiltro(filtro);
    };

    let tareasFiltradas = tareas;
    if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
    } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
    }

    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Lista de Tareas</h1>
        <div className="row">
          <div className="col-md-6">
            <TareaForm agregarTarea={agregarTarea} />
          </div>
          <div className="col-md-6">
            <Filtros filtrarTareas={filtrarTareas} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <ListaTareas
              tareas={tareasFiltradas}
              eliminarTarea={eliminarTarea}
              editarTarea={editarTarea}
              toggleCompletada={toggleCompletada}
            />
          </div>
        </div>
      </div>
    );
}

export default App

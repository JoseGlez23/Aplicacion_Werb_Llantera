// src/pages/TiresPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import BarWithFilter from "../components/BarWithFilter";
import TireCard from "../components/TireCard";
import "../TiresPage.css"; // Archivo CSS para personalizar la disposición y el estilo de la página

export const TiresPage = () => {
  const [tires, setTires] = useState([]);

  // Obtener los datos de los neumáticos desde la API
  useEffect(() => {
    axios.get("http://localhost:3000/api/neumaticos")
      .then(response => setTires(response.data))
      .catch(error => console.error("Error al obtener neumáticos:", error));
  }, []);

  // Funciones de edición y eliminación
  const handleEdit = (tire) => {
    console.log("Editar neumático:", tire);
    // Implementa la lógica de edición aquí
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/neumaticos/${id}`)
      .then(() => setTires(tires.filter(tire => tire.id !== id)))
      .catch(error => console.error("Error al eliminar neumático:", error));
  };

  return (
    <div>
      <BarWithFilter />
      <div className="container">
        <Sidebar />
        <div className="background">
          <h1 style={{ marginTop: "120px", color: "white" }}>Stock de Llantas</h1>
          <div className="tires-grid">
            {tires.map(tire => (
              <TireCard
                key={tire.id}
                tire={tire}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

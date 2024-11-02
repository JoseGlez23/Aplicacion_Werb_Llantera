// src/components/TireCard.jsx
import React from "react";
import "../TireCard.css"; // Asegúrate de que este archivo CSS esté configurado

const TireCard = ({ tire, onEdit, onDelete }) => {
  return (
    <div className="tire-card">
      {/* Mostrar imagen, si está disponible, o una imagen predeterminada */}
      <img
        src={
          tire.imagen
            ? `data:image/jpeg;base64,${tire.imagen}`
            : "/default-tire.jpg"
        }
        alt="Neumático"
        className="tire-image"
      />
      <div className="tire-details">
        <p>
          <strong>Marca:</strong> {tire.marca}
        </p>
        <p>
          <strong>Modelo:</strong> {tire.modelo}
        </p>
        <p>
          <strong>Alto:</strong> {tire.alto}
        </p>
        <p>
          <strong>Ancho:</strong> {tire.ancho}
        </p>
        <p>
          <strong>Pulgada:</strong> {tire.pulgada}
        </p>
        <p>
          <strong>Cantidad:</strong> {tire.cantidad}
        </p>
        <p>
          <strong>Precio:</strong> ${tire.precio}
        </p>
        <p>
          <strong>Condición:</strong> {tire.condicion || "No especificada"}
        </p>
      </div>
      <div className="tire-card-buttons">
        <button onClick={() => onEdit(tire)} className="edit-button">
          EDITAR
        </button>
        <button onClick={() => onDelete(tire.id)} className="delete-button">
          ELIMINAR
        </button>
      </div>
    </div>
  );
};

export default TireCard;

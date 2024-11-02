import "../SuperiorBar.css";
import '@fontsource/open-sans'; 

function SuperiorBar() {
  return (
    <div className="superior-bar">
      <div className="superior-text">
        BIENVENIDO ADMINISTRADOR
      </div>
      <button className="superior-button">
        CERRAR SESION
      </button>
    </div>
  );
}

export default SuperiorBar;

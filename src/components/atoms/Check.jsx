import React, { useState, useEffect } from "react";
import "../../assets/styles/Check.css"; // Asegúrate de tener las clases de Tailwind CSS definidas aquí

function Check() {
    const [isChecked, setIsChecked] = useState(false);
    const [showLabel, setShowLabel] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        setShowLabel(true); // Mostrar el label cuando el checkbox cambia
        setTimeout(() => {
            setShowLabel(false); // Ocultar el label después de 3 segundos
        }, 3000);
    };

    return (
        <>
          <input
              type="checkbox"
              id="cbx2"
              style={{ display: "none" }}
              checked={isChecked}
              onChange={toggleCheckbox}
          />
          <label htmlFor="cbx2" className="check relative group">
              <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
              {showLabel && (
                  //   <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 bg-dark dark:bg-black">
                      {isChecked ? "Encendido" : "Apagado"}
                  </span>
              )}
          </label>
      </>
  );
}

export default Check;

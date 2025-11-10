// --- imported globals ---

import { $, render, template, html, KEY } from "../utils/globals";
import { viewDashboard } from "./viewDashboard";
import { viewLogin } from "./viewLogin";
import { viewWelcome } from "./viewWelcome";

// --- imported views ---

// --- view definition ---
export function viewSummary() {
  // viewSummary code ...
  //Traemos la tabla creada
  const tabla = JSON.parse(localStorage.getItem(KEY) || "[]");
  //Asignamos la multiplicación
  const multiplicar = tabla.reduce((a, b) => a + b);
  template(html`
    <h1>Resultado</h1>
    <p>${tabla.length > 0 ? `${multiplicar}<br>` : "<br>"}</p>
    <div>
      <button id="btnBack">Volver</button>
      <button id="btnExit">Salir</button>
      <button id="btnClose">Cerrar sesión</button>
    </div>
  `);

  $("#btnBack")?.addEventListener("click", () => {
    // button back code ...
    render(viewDashboard);
  });

  $("#btnExit")?.addEventListener("click", () => {
    // button exit code ...
    render(viewWelcome);
  });

  $("#btnClose")?.addEventListener("click", () => {
    // button exit code ...
    localStorage.setItem("user", "");
    localStorage.setItem("pass", "");
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    render(viewWelcome);
  });
}

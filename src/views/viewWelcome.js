// --- imported globals ---
import { $, render, template, html } from "../utils/globals.js";
import { viewDashboard } from "./viewDashboard.js";

// --- imported views ---
import { viewLogin } from "./viewLogin.js";

// --- view definition ---
export function viewWelcome() {
  template(html`
    <h1>Examen DWEC - SPA</h1>
    <p>Bienvenido/a. Pulsa para continuar al login.</p>
    <button id="btnStart">Continuar</button>
  `);

  $("#btnStart")?.addEventListener("click", () => {
    if (
      localStorage.getItem("user") === "admin" &&
      localStorage.getItem("pass") === "1234"
    ) {
      render(viewDashboard);
    } else {
      render(viewLogin);
    }
  });
}

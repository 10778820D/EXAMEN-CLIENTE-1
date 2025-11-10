// --- imported globals ---
import { $, render, template, html } from "../utils/globals.js";

// --- imported views ---
import { viewLogin } from "./viewLogin.js";

// --- view definition ---
export function viewError() {
  template(html`
    <h1>Acceso denegado</h1>
    <p>Los datos de acceso son incorrectos.</p>
    <button id="btnRetry">Volver al login</button>
  `);

  $("#btnRetry")?.addEventListener("click", () => render(viewLogin));
}

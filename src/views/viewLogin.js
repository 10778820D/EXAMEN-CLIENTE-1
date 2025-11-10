// --- imported globals ---
import { $, render, template, html } from "../utils/globals.js";

// --- imported views ---
import { viewDashboard } from "./viewDashboard.js";
import { viewError } from "./viewError.js";
import { viewWelcome } from "./viewWelcome.js";

// --- view definition ---
export function viewLogin() {
  template(html`
    <h1>Acceso</h1>
    <input id="user" placeholder="Usuario" autocomplete="username" />
    <input
      id="pass"
      type="password"
      placeholder="Contraseña"
      autocomplete="current-password"
    />
    <button id="btnLogin">Iniciar sesión</button>
    <button id="btnHome">Volver al inicio</button>
  `);

  $("#btnLogin")?.addEventListener("click", () => {
    const u = $("#user")?.value.trim();
    const p = $("#pass")?.value.trim();
    if (u === "admin" && p === "1234") {
      localStorage.setItem("user", u);
      localStorage.setItem("pass", p);
      render(viewDashboard);
    } else render(viewError);
  });

  $("#btnHome")?.addEventListener("click", () => render(viewWelcome));
}

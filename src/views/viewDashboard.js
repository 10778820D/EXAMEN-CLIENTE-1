// --- imported globals ---
import { $, render, template, html, KEY } from "../utils/globals.js";

// --- imported views ---
import { viewLogin } from "./viewLogin.js";
import { viewSummary } from "./viewSummary.js";
import { viewWelcome } from "./viewWelcome.js";

// --- view definition ---
export function viewDashboard() {
  // viewDashboard code ...
  template(html`
    <h1>Generador de tablas de multiplicar</h1>
    <div>Introduce el número base y el límite (1-100):</div>
    <input id="number1" type="number" />
    <input id="number2" type="number" />
    <button id="btnGenerate">Generar tabla</button>
    <button id="btnExit">Salir</button>
    <button id="btnClose">Cerrar sesión</button>
    <div id="advert"></div>
  `);

  $("#btnGenerate")?.addEventListener("click", () => {
    //  button generate code
    //Creamos las variables y las pasamos a integer
    let number1 = parseInt($("#number1").value);
    let number2 = parseInt($("#number2").value);
    //Creamos la variable advert y la asignamos para que pueda advertir al usuario
    let advert = $("#advert");

    //Controlamos los casos donde nos pueden dar problemas el programa y respondemos
    if (
      isNaN(number1) ||
      isNaN(number1) ||
      number1 <= -1 ||
      number2 <= -1 ||
      number1 >= 101 ||
      number2 >= 101
    ) {
      //Advertimos
      advert.textContent = "Introduce valores válidos entre 1 y 100";
      return;
    } else {
      const tabla = [];
      for (let a = 1; a <= number2; a++) {
        tabla.push(number1 + " x " + a + " = " + number1 * a + "<br>");
      }
      localStorage.setItem(KEY, JSON.stringify(tabla));
      render(viewSummary);
    }
  });

  $("#btnExit")?.addEventListener("click", () => {
    //  button exit code
    render(viewWelcome);
  });

  $("#btnClose")?.addEventListener("click", () => {
    // button exit code ...
    localStorage.setItem("user", "");
    localStorage.setItem("pass", "");
    render(viewWelcome);
  });
}

// --- DOM Shortcuts section ---
export const $ = (sel) => document.querySelector(sel);

// --- Constants section ---
export const KEY = "multiplicationTable";

// --- DOM Utilities section ---
// Clears the inner HTML of an element
export const clearElement = (el) => (el.innerHTML = "");

// --- Template Tag section ---
// Tag function for syntax highlighting with lit-html extension
export const html = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);

// --- Rendering Core section ---
// Root app container
export const app = $("#app");

// Renders HTML content into the root app container
export const template = (html) => (app.innerHTML = html);

// Main render function (used by all views)
export function render(viewFn) {
  clearElement(app);
  viewFn();
}

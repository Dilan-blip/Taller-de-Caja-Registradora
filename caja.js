// CAJA REGISTRADORA

const prompt = require("prompt-sync")({ sigint: false});
const alert = console.log;

let total = 0;
let cantidad = 0;
let precio;

do {
  let entrada = prompt("Ingresa el precio del producto (0 para terminar la compra):");

  if (entrada === null) {
    precio = 0;
  } else {
    precio = Number(entrada);

    if (entrada.trim() === "" || !isFinite(precio) || precio < 0) {
      alert("Error: ingresa un precio numérico mayor o igual a 0.");
      precio = -1; 
    } else if (precio > 0) {
      total += precio;
      cantidad++;
    }
  }
} while (precio !== 0);

console.log("===== RESUMEN DE LA COMPRA =====");
console.log("Productos registrados: " + cantidad);
console.log("Total a pagar: $" + total.toLocaleString("es-CO"));
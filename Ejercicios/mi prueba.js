var nombre = prompt("Ingrese el nombre del producto:");
var precio = parseFloat(prompt("Ingrese el precio del producto:"));
var cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"));

var precioTotal = precio * cantidad;

console.log("Nombre del producto: " + nombre);
console.log("Precio por unidad: $" + precio.toFixed(2));
console.log("Cantidad de unidades: " + cantidad);
console.log("Precio total: $" + precioTotal.toFixed(2));
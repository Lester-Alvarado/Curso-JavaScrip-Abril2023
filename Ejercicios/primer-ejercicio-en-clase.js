// let num1 = 5
// let num2 = 10-5

// console.log(num1==num2)

// let num3 = 100
// let num4 = 99

// console.log(num3>num4)


// let num = 1;
// if (num > 5) {
//   console.log("El numero es mayor a 5");
// }


// console.log("fin de programa");

function librotienda(codigo, cantidad_existencia, precio_total, fecha_vencimiento, proveedor){
  this.codigo = codigo;
  this.cantidad_existencia = cantidad_existencia;
  this.precio_total = precio_total;
  this.fecha_vencimiento = fecha_vencimiento;
  this.proveedor = proveedor;
}

var azucar = new librotienda(1471, 40, "Q. 5.00 c/u", "17/10/2024", "Azucarera La Real");
var aceite = new librotienda(2040, 50, "Q. 10.00 c/u", "10/05/2024", "Dojisa S.A");

console.log(azucar.precio_total)

Num
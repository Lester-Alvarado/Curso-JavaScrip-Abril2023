//////////// Crea un array con 5 numeros
const miArray = [50, 75, 10, 9, 7];
console.log(miArray);

//////////// Array con el doble de los numeros del primer array
const dobleDelValor = miArray.map((valor) => valor * 2);
console.log(dobleDelValor);

/////// Crear array donde lo que son pares se vuelvan cero
function convertirParesEnCero(numero) {
  if (numero % 2 === 0) {
    return 0;
  } else {
    return numero;
  }
}

const paresEnCero = miArray.map(convertirParesEnCero);
console.log(paresEnCero);

//////// Array unidos y mostrar

const unirListas = miArray.concat(dobleDelValor, paresEnCero);
console.log(unirListas);

//////// Mostrar los cuatro array

console.log(miArray);
console.log(dobleDelValor);
console.log(paresEnCero);
console.log(unirListas);

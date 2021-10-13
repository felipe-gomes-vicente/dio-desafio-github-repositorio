// Filter
// Filtre e retorne todos os números pares de um array.

function filtraPares(array) {
  return array.filter(callback)
}

function callback(item) {
  return item % 2 === 0;
  // return item % !2 === 0; so numeros impar
}

const meuArray = [1, 33, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));
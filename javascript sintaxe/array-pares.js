function substituiPares(string) {
  if(!string) return -1;
  if(!string.length) return -1;

  for(let i = 0; i < string.length; i++) {
    if(string[i] === 0) {
      console.log("Você ja é zero!!")
    } else if (string[i] % 2 === 0) {
      console.log(`Substituindo ${string[i]} por 0...`)
      string[i] = 0;
    }
  }

  return string;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares)

const meuObjeto = {
  chave: valor
 }
 
 console.log(meuObjeto.chave); 
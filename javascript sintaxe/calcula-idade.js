// Atividade: This
// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: 'Hanna',
  idade: 30,
};

const pessoa2 = {
  nome: 'Yume',
  idade: 26,
};

const animal = {
  nome: 'JJ',
  idade: 5,
  raca: 'siamês'
};

console.log(calculaIdade.call(animal, 4))
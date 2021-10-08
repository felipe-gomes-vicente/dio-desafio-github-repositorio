function comparison(number1, number2) {
  if(!number1 || !number2) return 'Informe dois números maior que zero!';

  const firstExpression = createFirstExpression(number1, number2);
  const secondExpression = createSecondExpression(number1, number2);

  return `${firstExpression} ${secondExpression}`;
}

function createFirstExpression(number1, number2) {
  let same = '';

  if(number1 !== number2) {
    same = 'não';
  }

  return `Os números ${number1} e ${number2} são iguais.`;
}

function createSecondExpression(number1, number2) {
  const addNumber = number1 + number2;

  let result10 = 'menor';
  let result20 = 'menor';

  if(addNumber > 10) {
    result10 = 'maior';
  }

  if(addNumber > 20) {
    result20 = 'maior';
  }

  return `A Soma é ${addNumber}, que é ${result10} que 10 e ${result20} que 20.`
}

console.log(comparison(10, 20))
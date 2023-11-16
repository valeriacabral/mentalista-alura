// Geração do número aleatório entre 1 e 1000
var numeroSecreto = Math.floor(Math.random() * 500) + 1;

// Loop para permitir várias tentativas
while (true) {
  // Entrada do jogador
  var tentativa = prompt('Tente adivinhar o número secreto (entre 1 e 500):');

  // Converter a entrada para um número
  var palpite = parseInt(tentativa);

  // Verificar se o palpite é válido
  if (isNaN(palpite) || palpite < 1 || palpite > 500) {
    alert('Por favor, insira um número válido entre 1 e 500.');
    continue;
  }

  // Verificar se o palpite está correto
  if (palpite === numeroSecreto) {
    alert('Parabéns! Você acertou o número secreto.');
    break;
  } else if (palpite < numeroSecreto) {
    alert('Tente novamente. O número secreto é maior.');
  } else {
    alert('Tente novamente. O número secreto é menor.');
  }
}

export function isRG(rg: string): boolean {
  // Remove todos os caracteres que não são letras ou números
  const cleanRG = rg.replace(/[^a-zA-Z0-9]/g, '');

  // Verifica se o tamanho está dentro de um intervalo razoável (ajustável)
  if (cleanRG.length < 5 || cleanRG.length > 9) {
    return false;
  }

  // Valida se o conteúdo possui apenas letras e números
  return /^[a-zA-Z0-9]{5,9}$/.test(cleanRG);
}

export function isCPF(CPF: string): boolean {
  // Remove todos os caracteres que não são números
  CPF = CPF.replace(/[^0-9]/g, '');

  // Verifica se o CPF tem 11 dígitos ou se é uma sequência de números iguais
  const invalidCPFs = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];

  if (invalidCPFs.includes(CPF) || CPF.length !== 11) {
    return false;
  }

  let sm: number;
  let r: number;
  let num: number;
  let peso: number;
  let dig10: string;
  let dig11: string;

  try {
    // Cálculo do 1º dígito verificador
    sm = 0;
    peso = 10;
    for (let i = 0; i < 9; i++) {
      num = parseInt(CPF.charAt(i), 10); // Converte o caractere para número
      sm += num * peso;
      peso -= 1;
    }

    r = 11 - (sm % 11);
    if (r === 10 || r === 11) {
      dig10 = '0';
    } else {
      dig10 = r.toString();
    }

    // Cálculo do 2º dígito verificador
    sm = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
      num = parseInt(CPF.charAt(i), 10);
      sm += num * peso;
      peso -= 1;
    }

    r = 11 - (sm % 11);
    if (r === 10 || r === 11) {
      dig11 = '0';
    } else {
      dig11 = r.toString();
    }

    // Verifica se os dígitos calculados conferem com os dígitos informados
    return dig10 === CPF.charAt(9) && dig11 === CPF.charAt(10);
  } catch (error) {
    // Em caso de erro de conversão ou outro erro, retorna false
    return false;
  }
}

export function isValidBirthDate(dataNascimento: string): boolean {
  const dataNascimentoObj = new Date(dataNascimento);
  if (isNaN(dataNascimentoObj.getTime())) {
    return false;
  }

  const dataAtual = new Date();

  const idade = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();

  if (
    mesAtual < dataNascimentoObj.getMonth() ||
    (mesAtual === dataNascimentoObj.getMonth() &&
      diaAtual < dataNascimentoObj.getDate())
  ) {
    return idade - 1 >= 12;
  }

  return idade >= 12;
}

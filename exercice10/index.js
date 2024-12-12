function printNumbers(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }
  return result.trim(); // Supprime l'espace en trop à la fin
}

export default printNumbers;

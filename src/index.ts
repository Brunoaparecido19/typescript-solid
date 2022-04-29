function randomNumber(): number {
  const min = 1;
  const max = 100;
  const random = Math.floor(Math.random() * (min - max) + min);
  return random;
}
function soma(x: number, y: number): number {
  return x + y;
}

console.log(soma(randomNumber(), randomNumber()));

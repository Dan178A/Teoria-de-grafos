let d = 2 * (Math.log2(9) + 1);
console.log(d);
// Formula para
// hallar el diámetro de un bipartito completo K8.5
let diameter = Math.sqrt(9 * (9 - 1));

console.log(diameter);

function findDiameter(n) {
  // n is the number of vertices
  let diameter = n - 1;
  console.log(diameter);
  return diameter;
}

findDiameter(8.5);

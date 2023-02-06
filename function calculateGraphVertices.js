function calculateGraphVertices(edges) {
  return Math.round((Math.sqrt(8 * edges + 1) - 1) / 2);
}

let numVertices = calculateGraphVertices(55);
// El diámetro de un grafo bipartito completo K8,5 es 7,
// ya que esta es la distancia más grande entre dos vértices del grafo.
// Esto se puede determinar utilizando la fórmula del número de aristas en un grafo completo,
// que es K_{n,m} = n + m - 1.
console.log('Number of vertices: ', numVertices);
function calculateDiameter(n, m) {
  // n is the number of vertices in the first part of the graph
  // m is the number of vertices in the second part of the graph
  return Math.max(n - 1, m - 1);
}

let diameter = calculateDiameter(8, 5);
console.log('Diameter: ', diameter);
// Output: Diameter: 7
function calculateDiameter2(n) {
  // n is the number of vertices in the graph
  return n - 1;
}

let diameter2 = calculateDiameter2(9);
console.log('Diameter: ', diameter2);
// Output: Diameter: 8
//Calculate the diameter of a complete bipartite graph K8.5 using Floyd-Warshall Algorithm

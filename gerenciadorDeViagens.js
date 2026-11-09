const trips = [
    { destination: "Lisboa", country: "Portugal", price: 3500, rating: 5 },
    { destination: "Paris", country: "França", price: 4200, rating: 4 },
    { destination: "Tokyo", country: "Japão", price: 6800, rating: 5 },
    { destination: "Madrid", country: "Espanha", price: 2900, rating: 3 },
    { destination: "Roma", country: "Itália", price: 3900, rating: 4 }
];

const extraDestinations = ["Londres", "Berlim", "Amsterdã"];

// unir destinos de extraDestinos com trips;

const unirDestinos = trips.map((n) => {
    return n.destination;
});

// todos destinos;

const todosDestinos = unirDestinos.concat(extraDestinations);

console.log(unirDestinos);

// unir todos destinos separados por |;

const unirTodosDestinos = todosDestinos.join(' | ');

console.log(unirTodosDestinos);

// ultimo destino;

const ultimoDestino = todosDestinos.at(-1);

console.log(ultimoDestino);

// novo array com destino e pais;

const destinosPais = trips.flatMap((n) => [n.destination + ' , ' + n.country]);

console.log(destinosPais);

// ultima bem avaliada;

const ultimoBemAvaliado = trips.findLast((n) => n.rating >= 4);

console.log(ultimoBemAvaliado);

// mais caro pro mais barato;

const caroBarato = trips.toSorted((a, b) => b.price - a.price );

console.log(caroBarato);

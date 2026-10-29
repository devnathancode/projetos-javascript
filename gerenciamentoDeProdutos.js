const products = [
    { name: "Mouse", price: 50, stock: 10 },
    { name: "Teclado", price: 120, stock: 0 },
    { name: "Monitor", price: 800, stock: 5 },
    { name: "Headset", price: 200, stock: 3 },
    { name: "Webcam", price: 150, stock: 0 }
];

// array novo com apenas o nome dos produtos;

let nomeDosProdutos = products.map((n) => {
    return n.name
});

 console.log(nomeDosProdutos);

// mostrar produtos acima de R$100;

let acimaDeCem = products.filter((n) => n.price > 100);

 console.log(acimaDeCem);

// encontrar produto chamado monitor;

let findProduct = products.find((n) => n.name === 'Monitor');

 console.log(findProduct);

// verificar se existe produto sem estoque;

let temAlgumSemEstoque = products.some((n) => n.stock === 0);

 console.log(temAlgumSemEstoque);

// verificar se todos custam mais de 30 reais;

let custaMaisDeTrinta = products.every((n) => n.price > 30);

 console.log(custaMaisDeTrinta);

// retornar somente os nomes dos produtos sem estoque;

let nomeSemEstoque = products.filter((n) => n.stock === 0).map((n) => {
    return n.name
}); 

console.log(nomeSemEstoque);








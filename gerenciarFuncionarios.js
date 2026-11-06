const employees = [
    { name: "Carlos", age: 28, salary: 3500, department: "TI" },
    { name: "Ana", age: 24, salary: 2800, department: "RH" },
    { name: "Pedro", age: 32, salary: 5000, department: "TI" },
    { name: "Mariana", age: 29, salary: 4200, department: "Financeiro" },
    { name: "Lucas", age: 22, salary: 2500, department: "RH" }
];


// localizar funcionario;

const localizarFuncionario = employees.findIndex((n) => {
    return n.name === 'Mariana';
});

console.log(localizarFuncionario);

// verificar departamento;

const verificarDepartamento = employees.includes((n) => {
    return n.department === 'Marketing';
});

console.log(verificarDepartamento);

// ranking salarial;

const melhorSalario = employees.slice().sort((a, b) => b.salary - a.salary);

console.log(melhorSalario);

// melhores salarios;

const melhoresSalarios = melhorSalario.slice(0, 3);

console.log(melhoresSalarios);

// demitir funcionarios;

const demissao = employees.splice(4, 4);

console.log(demissao);

// organizar departamentos;

const departments = [
    ["TI", ["Desenvolvimento", "Suporte"]],
    ["RH", ["Recrutamento", "Treinamento"]],
    ["Financeiro", ["Contabilidade", "Pagamentos"]]
];

console.log(departments.flat(Infinity));

// folha salarial;

let gastoSalarial = employees.reduce((acc, salario) => {
    return acc + salario.salary;
}, 0);

console.log(gastoSalarial);

// total;

console.log(employees);
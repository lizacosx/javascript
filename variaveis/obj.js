const obj = [
    {
        name: "teste",
        idade: 10,
        profissao: "dev",
    },
    {
        name: "teste",
        idade: 10,
        profissao: "dev",
    },
    {
        name: "teste",
        idade: 10,
        profissao: "dev",
    }
];

function receObj({ name, idade, profissao }) {
    // console.log(objeto)
    console.log(name, idade, profissao)
}

receObj(obj.name, obj.idade, obj.profissao)


// console.log(obj.name);
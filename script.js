// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.


let cadastro1 = {
    nome:'Dell',
    idade:20,
    cidade:"Recife "
}

cadastro1.signo = "Gêmeos ";
delete cadastro1.idade;
console.log(cadastro1)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.


let cadastro2 = [{
    nome:' Carlos ',
    idade: 23,
    telefone:215544768,
    amigos: ['carlos']
},

{
    nome:' Alexia ',
    idade: 18,
    telefone:112365589,
    amigos:['alexia']
},
 {
    nome:' Marina ',
    idade: 41,
    telefone:215564478,
    amigos:['marina']
},
{
   nome:' João ',
    idade: 25,
    telefone:217769355,
    amigos:['joão']
},
{
    nome:' Ivone ',
    idade: 56,
    telefone: 216767433,
    amigos:['ivone']
},
]
cadastro2[0].amigos = ['Carlos'];
cadastro2[1].amigos = ['Alexia'];
cadastro2[2].amigos = ['Marina'];
cadastro2[3].amigos = ['João'];
cadastro2[4].amigos = ['Ivone'];

console.log(cadastro2);
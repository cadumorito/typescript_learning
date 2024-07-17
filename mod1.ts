// Variáveis e Constantes

var a = 'a' // Variável de escopo global (não utilizada no mercado por segurança)
let b = 'b' // Variável que pode ser alterada 
const c = 'c' // "Variável" que não pode ser alterada > valor fixo

let d:string = 'd' // Define que d só pode ser string
let n:number = 3 // Define que n só pode ser número
let x:boolean = false // Define que x só pode ser booleano


// Onjetos e Interface


interface Pessoa {
    nome: string,
    idade: number,
    profissao: string,
    historia?: string // Torna-se opcional ao adicionar "?" antes dos dois pontos
} // Definindo o tipo das variáveis de um dicionário e obrigatoriedade

const pessoa: Pessoa = {
    nome: 'Cadu',
    idade: 17,
    profissao: 'Dev'
} // Tipando objeto e dados -> fazendo o dicionário pegando das informações do interface

const outraPessoa: Pessoa = {
    nome: 'Matheus',
    idade: 17,
    profissao: 'Dev'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
] // Define um array do tipo interface Pessoa

const arrayNumber: number[] = [
    1,2,3
]

const arrayString: Array<string> = [
    '1', '2', '3'
]

// Decisões e Repetições

const num:number = 13

if (num>15) {
    console.log(num+" é maior que 15")
} else if (num<15) {
    console.log(num+" é menor que 15")
} else {
    console.log(num+" é igual a 15")
}

const typeUser = {
    admin: "Welcome, admin",
    student: "U are a student",
    viewer: "U are a viewer"
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof  typeUser])
}

const user = 'admin'

validateUser(user)
validateUser('student')

// Estruturas de repetições

for (let i = 0; i < 5; i++) {
    console.log(i)
    
}

let z = 2

while(z > 6){
    console.log(z)
    z++
}


// Array e manipulação

const array: Array<number> = [1,2,3,4]
const stringArray: string[] = ['a', 'b', 'c', 'd']

console.log(stringArray.length) // Quantidade total de quantos itens estão dentro da array

const buscaNum = array.find(num => num == 4) // Busca um número dentro da array

console.log(buscaNum)

const maiorDois = array.find(num => num > 2) // Busca o primeiro número da array que for maior que dois
// Se a array fosse [1,2,4,3], o número encontrado seria 4 por vir primeiro que o 3 dentro da array

array.forEach(num => console.log(num)) // Printa cada componente do array, linha a linha

console.log("Números maiores que dois:")
array.forEach(num =>{
    if(num > 2){
        console.log(num)
    }
}) // Número maiores que dois

array.map(num =>{
    if(num > 2){
        console.log(num)
    }
}) // Mesmo resultado que forEach, porém, para evitar bugs e afins, map é mais utilizado para funções async



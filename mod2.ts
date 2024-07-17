// Programação orientada a objeto

const userExample = {
    name: "Cadu",
    age: 17,
    showName(){
        console.log(this.name)
    }
}

const otherUser = {
    name:  "João",
    age: 16,
    showName(){
        console.log(this.name)
    }
}

userExample.showName()
otherUser.showName()

// Maneira de adicionar um novo cadastro de maneira mais fácil e útil:

class User {
    name: string = 'Unknown' // Nome padrão
    age: number = 18 // Idade padrão

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    } // Tornando obrigatório adicionar um nome e uma idade na hora de adicionar um novo usuário

    showName = () => {
        console.log(this.name)
    }
}

const myUser = new User("Félix", 18) // Adicionando um novo usuário
myUser.showName

// Classes + tipos

abstract class dioAccount {
    name: string
    // public name: string
    // EX01. Permite com que eu consiga alterar o nome "por fora", mas não é muito usado porque normalmente
    // é alterado em momentos específicos

    // private name: string
    // EX02. O nome não consegue ser alterado diretamente, apenas a partir de uma função, por exemplo

    accountNumber: number
    // readonly accountNumber: number
    // EX03. Torno o accountNumber disponível apenas para leitura, ou seja, eu só poderia dar console.log,
    // eu não poderia mudá-lo nem mesmo através de função.
    // + segurança

    status: boolean = true

    constructor(name:string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name 
        console.log("Success name changed")
    } // EX02. Para alterar o nome se ele estiver privado

    getName = (): string =>{
        return this.name
    } // EX02. Função para pegar o nome se ele estiver privado

    deposit = (): void =>{
        if(this.validateStatus()){
            console.log("You have deposited")
        }
        
    }
    withdraw = (): void =>{
        console.log("You have withdrawed")
        
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } throw new Error('Invalid account')
     } // Função privada, só podera ser acessada a partir de outra função

} // Como a classe é abstrata, não daria para criar um objeto com ela. O código abaixo não funcionaria:
// const account: Account = new Account('Félix', 18)
// Por isso, não usarei muito


// Classe com herança
class Admin extends dioAccount {
    balance: number
    
    constructor(name: string, accountNumber: number){ // Herdando as informações de Account
        super(name, accountNumber) // Herdando as informações de Account
        this.balance = 20
    }

    getBalance = (): void =>{
        console.log(this.balance)
    }
}

class peopleAccount extends dioAccount{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

const account: peopleAccount = new peopleAccount(1,'Félix', 18)
// EX01. 
// account.name = 'João'
// Alteraria o nome Félix por João se o name estivesse como public

// EX02.
// account.name = 'João' não funcionaria
// account.setName('João')
// Acima seria possível alterar o nome a partir da função/método definida 
// console.log(account.getName()) -> mostrar o nome atual

account.deposit()

console.log(account)

const adminAccount: Admin = new Admin('Jacinto', 30)

class companyAccount extends dioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (): void =>{
        console.log('You have got a loan')
    }

    deposit = (): void =>{
        console.log("The company have deposited")
    } // Polimorfismo -> alterando algo/função (no caso, a mensagem do console) existente na classe da herança

}

const company: companyAccount = new companyAccount('DIO', 40)
company.deposit(); 



// Importar arquivo: import { nome_da_classe } from './local/do/arquivo'

// Exportar arquivo: export abstract class nome_classe
// Basta adicionar o "export" antes

// Isso seria módulos -> a separação das classes por arquivo


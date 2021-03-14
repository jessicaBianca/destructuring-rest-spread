window.addEventListener('load', start)

function start(){
    doSpread()
    doRest()
    doDestructuring()    
}

//Spread - Muito útil para arrays e objetos - ele "espalha" os itens do array
function doSpread(){
    const marriedMen = people.results.filter(person=>person.name.title === 'Mr')
    const marriedWoman = people.results.filter(person=>person.name.title === 'Ms')
    
    console.log(marriedMen)
    console.log(marriedWoman)

    const merriedPeople = [...marriedWoman, ...marriedMen, {msg: 'Olá'}]

    console.log(merriedPeople)
}

//Rest
/*
Utilizado em funções com o objetivo de agrupar os parâmetros em um array 
permite número infinito de parâmetros
*/
function doRest(){
    console.log(infiniteSum(1,2,7,5,2,3,1,2,34,5,100))
}
function infiniteSum(...numbers){
    return numbers.reduce((acumulador, numeroAtual)=> acumulador+numeroAtual, 0)
    /*
        O número 0 no final indica que vai começar em 0 e depois ir somando todos os números que forem colocamos
        como parâmetro
        console.log(numbers)  //traz um array [ ]
    */ 
}

//Destructuring - facilita a escrita quando precisamos criar variáveis a partir de um objeto, também é possível
//usar com arrays

function doDestructuring(){
    const firtsElement = people.results[0]

   /* É muito repetitivo fazer da forma abaixo
    const username = firtsElement.login.username
    const password = firtsElement.login.password
    */

    //Usando o destructuring:
    const {username, password} = firtsElement.login

    console.log(username)
    console.log(password)

}


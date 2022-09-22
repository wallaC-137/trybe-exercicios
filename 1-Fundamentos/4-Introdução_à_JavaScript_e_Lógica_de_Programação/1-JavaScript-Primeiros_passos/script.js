const a = 15
const b = 12
const c = 13
// Exercício 1

// let adicao = a+b

// let subtracao = a-b

// let multiplicacao = a*b

// let divisao = a/b

// let divisaoSobra = a%b

// console.log(divisaoSobra)


// Exercício 2

// if (a > b) {
//     console.log('A variável "A" é maior que a "B" ')
// }
// else if (b > a) {
//     console.log('A variável "B" é maior que a "A"')
// }
// else{
//     console.log('A e B tem o mesmo valor')
// }


// // Exercício 3

// if (a > b && a > c) {
//     console.log('A variável "A" é maior que "B" e "C"!')
// }
// else if (b > a && b > c) {
//     console.log('A variável "B" é maior que "A" e "C"!')
// }
// else if (c > a && c > b){
//     console.log('A variável "C" é maior que "A" e "B"!')
// }
// else{
//     console.log('As tres variáveis tem o mesmo valor')
// }


// Exercício 4

// let value = 0

// if (value > 0){
//     console.log('Positivo')
// }
// else if (value < 0){
//     console.log('Negativo')
// }
// else{
//     console.log('Zero')
// }


// Exercício 5

// let angleA = 80
// let angleB = 50
// let angleC = 50

// let sumOfAngles = angleA + angleB + angleC

// if (typeof (sumOfAngles) != "number"){
//     console.log('Erro: ângulo inválido')
// }
// else if(angleA < 0 || angleB < 0 || angleC < 0 ){
//     console.log('Erro: ângulo inválido')
// }
// else if(sumOfAngles == 180){
//     console.log('True')
// }
// else{
//     console.log('False')
// }



// Exercício 6

// let chessPeace = 'CACHORRO' 
// let nameLC = chessPeace.toLowerCase()

// switch (nameLC) {
//     case 'cavalo':
//         console.log('O cavalo pode ser movido para uma das casas mais próximas a que ocupa que não esteja na mesma fileira, coluna ou diagonal')
//         break
//     case 'dama':
//         console.log('A dama pode ser movida para qualquer casa ao longo da fileira, coluna ou diagonal em que se encontra. ')
//         break
//     case 'rei':
//         console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.')
//         break
//     case 'bispo':
//         console.log('O bispo pode ser movido para qualquer casa ao longo da diagonal em que se encontra.')
//         break
//     case 'torre':
//         console.log('A torre pode ser movida para qualquer casa ao longo da fileira ou coluna em que se encontra. ')
//         break
//     case 'peão':
//         console.log('O peão pode ser movido para uma casa que esteja imediatamente à sua frente ao longo da mesma coluna, desde que esta casa esteja desocupada')
//     default:
//         console.log('Digite um nome de peça válido')

// }



// Exercício 7

// let note = 88
// let newNote;

// if (note > 100 || note < 0) {
//     newNote = 'Valor inválido. Digite um numero entre 100 e 0'
// }else if (note >= 90){
//     newNote = 'A'
// } else if (note >= 80){
//     newNote = 'B'
// } else if (note >= 70) {
//     newNote = 'C'
// } else if (note >= 60) {
//     newNote = 'D'
// } else if (note >= 50) {
//     newNote = 'E'
// } else if (note < 50) {
//     newNote = 'F'
// }
// console.log('Sua nota foi ' + newNote + ', parabéns!')



// Exercício 8

// const n1 = 5;
// const n2 = 8;
// const n3 = 5;

// let resultado = 'false'
// let numberEven = n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0;


// if (numberEven){
//     resultado = 'True'
// }

// console.log(resultado)



// Exercício 9

// const buyValue = 80
// const saleValue = 140

// let tax = buyValue * 20 / 100
// let profit = saleValue - buyValue - tax
// let start = buyValue > 0 && saleValue > 0;
// let numSale = 1000
// let result;

// if (start) {
//     result = profit * numSale
// } else {
//     result = 'Erro: Digite um valor válido'
// }

// console.log(result)



// Exercício 10

// const salary = 3500.00;
// let inss;
// let ir;


// if (salary <= 1556.94) {
//     inss = salary * 0.08
// } else if (salary >= 1556.95 && salary <= 2594.92){
//     inss = salary * 0.09
// } else if (salary >= 2594.93 && salary <= 5189.82){
//     inss = salary * 0.11
// } else {
//     inss = 570.88
// }

// let salaryInss = salary - inss

// if (salaryInss >= 1903.99 && salaryInss <= 2826.65){
//     ir = (salaryInss * 0.075) - 142.80
// } else if (salaryInss >= 2826.66 && salaryInss <= 3751.05){
//     ir = (salaryInss * 0.15) - 354.80
// } else if (salaryInss >= 3751.06 && salaryInss <= 4664.68){
//     ir = (salaryInss * 0.225) - 636.13
// }   else {
//     ir = (salaryInss * 0.275) - 869.36
// }

// let liqSal = (salary - inss) - ir

// console.log(inss)
// console.log(ir)
// console.log(liqSal)
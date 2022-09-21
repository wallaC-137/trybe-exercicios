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
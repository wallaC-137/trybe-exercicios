// exercício 1 de fixação

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     }

// }

// console.log('O nome dela é ' + player.name + ' ' + player.lastName + ' ela tem ' + player.age + ' anos de idade e já trouxe ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')




// exercício 2 de fixação

// function adicao (a, b){
//     let resultado = a + b
//     return 'a resultado é: ' + resultado
// }

// console.log(adicao(8,2))



// function subtracao (a, b){
//     let resultado = a - b
//     return 'a resultado é: ' + resultado
// }

// console.log(subtracao(10,2))



// function multiplicacao (a, b){
//     let resultado = a * b
//     return 'a resultado é: ' + resultado
// }

// console.log(multiplicacao(10,3))



// function divisao (a, b){
//     let resultado = a / b
//     return 'a resultado é: ' + resultado
// }

// console.log(divisao(10,3))




// function divisao (a, b){
//     let resultado = a / b
//     return 'a resultado é: ' + resultado
// }

// console.log(divisao(10,3))



// function modolo (a, b){
//     let resultado = a % b
//     return 'a resultado é: ' + resultado
// }

// console.log(modolo(10,3))



// function numberLarge (num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1 + ' é o maior dos 3 números'
//     } else if (num2 > num1 && num2 > num3){
//         return num2 + ' é o maior dos 3 números'
//     } else {
//         return num3 + ' é o maior dos 3 números'
//     }
// }

// console.log(numberLarge(10, 11, 18))



// function positiveOrNegative (valor){
//     if(valor > 0){
//         return 'Positive'
//     } else if (valor < 0){
//         return 'Negative'
//     } else{
//         return 'Zero'
//     }
// }

// console.log(positiveOrNegative(0))


// function triangleAngle (angle1, angle2, angle3){
//     if(typeof angle1 !== 'number' || typeof angle2 !== 'number' || typeof angle3 !== 'number') {
//         return 'Error'
//     } else if(angle1 <= 0 || angle2 <= 0 || angle3 <= 0){
//         return 'Error'
//     } else if(angle1+angle2+angle3 == 180){
//         return 'True'
//     } else{
//         return 'False'
//     }
// }

// console.log(triangleAngle(50, 50, 80))



// ============================================================================

// exercícios do dia: 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Ben-vinda, ' + info.personagem)

// info['recorrente'] = 'Sim'

//  console.log(info)

// for(let index in info){
//     console.log(index)
// }


// for(let index in info){
//     console.log(info[index])
// }



// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };


// for(let index in info){
//  if(index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
//     console.log('Ambos recorrentes')
//  } else{
//   console.log(info[index]+ ' e ' + info2[index])
//  }
// }



// ===============================================================

// // exercícios do dia: 2

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// // console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)
// // console.log(leitor.livrosFavoritos[0].titulo)

// leitor.livrosFavoritos[1] = {

//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',

// }

// // console.log(leitor.livrosFavoritos[1])


// if (leitor.livrosFavoritos.length >= 0) {
//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')
// }




// ===============================================================

// // exercícios do dia: 3

// let palindromo = 'wallace';
// let checker = '';

// if (palindromo.length > 0) {

//   for (let index = (palindromo.length - 1); index >= 0; index -= 1) {
//     checker += palindromo[index]
//   }

//   if (palindromo === checker) {
//     console.log('True')
//   } else {
//     console.log('False')
//   } 
// }

// ===================================

// let array = [2, 3, 6, 7, 10, 1];
// let hightedNum = 0

// for (let index = 0; index < array.length; index += 1) {
//   if(hightedNum == 0) {
//     hightedNum += array[0]
//   } else if(hightedNum < array[index]){
//     hightedNum = index
//   }

// }

// console.log(hightedNum)




// ===================================

// let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let nameHighted = ''

// for (let index = 0; index < names.length; index += 1) {
//   if (nameHighted.length == 0) {
//     nameHighted = names[0]
//   } else if (nameHighted.length < names[index].length) {
//     nameHighted = names[index]
//   }
// }


// console.log(nameHighted)



// ===================================

// let array = [2, 3, 2, 5, 8, 2, 3, 2, 1, 1, 1, 1,];


// function highted(lista) {
//   let num = 0
//   let test = 0

//   for (let index = 0; index < lista.length; index += 1) {

//     let contador = 0

//     for (let index2 = 0; index2 < lista.length; index2 += 1) {
//       if (lista[index] == lista[index2]) {
//         contador += 1
//       }
//     }

//     if (contador > test) {
//       num = lista[index]
//       test = contador
//     }
//   }
//   return num
// }
// console.log(highted(array))




// ===================================

// let n = 5

// function somatorio (num){
//   sum = 0
//   for(let index = 1; index <= num; index += 1){
//     sum += index
//   }
//   return sum
// }

// console.log(somatorio(n))



// ===================================

let p1 = 'trybe'
let p2 = 'be'

function stringer(string1, string2) {
  let temp = ''
  let testar = (string1.length - string2.length)

  for (let index = testar; index < string1.length; index += 1) {
    temp += string1[index]
  }

  if (string1.length == 0 || string2.length == 0) {
    return 'Digite alguma frase'
  } else if (temp === string2) {
    return 'True'
  } else {
    return 'False'
  }

}

console.log(stringer(p1, p2))
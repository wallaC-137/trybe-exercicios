// exercicio 1

// let numFactored = 10;
// let initialValue = numFactored - 1;
// let actualValue = null;

// for (let index = initialValue; index > 1 ; index -= 1){
//  if (actualValue == null){
//     actualValue = numFactored * index
//  } else{
//     actualValue = actualValue * index
//  }
//  console.log(actualValue)
// }

// a forma abaixo seria o gabarito da questão de cima, mas está incorreto

// let fatorial = 10;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
//   console.log(fatorial);
// }



// exercicio 2

// let word = 'tryber';
// let palindromo = ''

// for (let index = (word.length-1); index >= 0; index -= 1){
//     palindromo += word[index]
// }

// console.log(palindromo)



// exercicio 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let palavra1= '';
// let palavra2= '';

// for (let index = 0; index <= array.length; index += 1) {
//   if(palavra1.length == 0){
//     palavra1 = array[index]
//     palavra2 = array[index+1]
//   } else if (palavra1.length < palavra2.length){
//     palavra1 = palavra2
//   } else {
//     palavra2 = array[index]
//   }

// }

// console.log(palavra1)


// outra forma de fazer


// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorNum = '';
// let menorNum = '';

// for (let index = 0; index < array.length; index += 1) {
//     if (maiorNum.length < array[index].length){
//         maiorNum = array[index]
//     }
// }

// for (let index = 0; index < array.length; index += 1) {
//     if (menorNum.length > array[index].length || menorNum == 0){
//         menorNum = array[index]
//     }
// }

// console.log(maiorNum)
// console.log(menorNum)


// exercicio 3

let number = 50
let primeNumbers = []


// for (let index = 2; index < number; index += 1) {
//     for (let index2 = 2; index < index; index2 += 1) {
//         if (index % index2 > 0) {
//             con1 += 1
//         }
//     }
//     let con1 = 0
//     if(con1 == 0) {
//         primeNumbers.push(index)
//     }
// }

// for (let index = 2; index <= number; index += 1) {
//    let sinal = 0
//    for (let index2 = 2; index2 < index; index2 += 1) {
//       if(index % index2 == 0){
//          sinal += 1
//       }
//    }
//    if(sinal == 0){
//       primeNumbers.push(index)
//    }
// }
// console.log(primeNumbers)



// for (let index = 2; index <= number; index += 1) {
//    let contador = 0
//    for (let index2 = 2; index2 < index; index2 += 1) {
//       if (index % index2 == 0) {
//          contador += 1
//       }
//    }
//    if (contador == 0) {
//       primeNumbers.push(index)
//    }
// }

// let larger = primeNumbers[primeNumbers.length-1]

// console.log(`Esses são todos os numeros primos entre 1 e ${number}: ${primeNumbers}. O maior é: ${larger}`)


// exercicios bonus: 1

// let valor = 5
// let imprimir = ''

// for (let i = 1; i <= valor; i += 1){
// 	imprimir = ''
//   for(let i2 = 1; i2 <= valor; i2 += 1){
//     imprimir += '*' 
//   }
// console.log(imprimir)
// }



// bonus 2

// let valor = 25
// let imprimir = ''

// for (let i = 1; i <= valor; i += 1){
//     imprimir += '*' 
// console.log(imprimir)
// }



// bonus 3

// let valor = 5
// let imprimir = ''
// let symbol = '*'
// let valor2 = valor - 1

// for (let i = 0; i < valor; i += 1) {
//     for (let i2 = 0; i2 < valor; i2 += 1) {
//         if (i2 < valor2) {
//             imprimir = imprimir + ' '
//         } else {
//             imprimir = imprimir + symbol
//         }
//     }
//     console.log(imprimir)
//     imprimir = ''
//     valor2 -= 1
// }



// bonus 3 'triangulo centralizado'

let valor = 5
let imprimir = ''
let symbol = '*'
let valor2 = valor+1

for (let i = 0; i < valor; i += 1){
    for(let i2 = valor2; i2 >= 0; i2 -= 2){
        if(i2 >= 1){
            imprimir = imprimir + ' '
        } else {
            imprimir = imprimir + symbol
        }
    }
    console.log(imprimir)
    imprimir = ''
}



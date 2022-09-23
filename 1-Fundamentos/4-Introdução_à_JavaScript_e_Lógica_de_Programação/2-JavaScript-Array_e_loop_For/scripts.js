//exercício 1

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.indexOf('Serviços');

// console.log(menuServices);



//exercício 2

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);



//exercício 3

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato')

// console.log(menu);



//exercício 4

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let i = 0; i < groceryList.length; i += 1) {
//     console.log(groceryList[i])
// }

// // de trás pra frente 

// for (let i = groceryList.length-1; i >= 0; i -= 1) {
//     console.log(groceryList[i])
// }



//exercício 5

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let printingNames of names){
//     console.log(printingNames)
// }



//exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index of numbers) {
//     console.log(index)
// }

//outro modo 

// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index])
// }



//exercício 7

// let num = null;

// for (let i = 0; i < numbers.length; i += 1){
//     num += numbers[i]
// }

// console.log(num)



//exercício 8

// let num = null;

// for (let i = 0; i < numbers.length; i += 1){
//     num += numbers[i]
// }
// let media = num / (numbers.length)

// console.log(media)




//exercício 9

// let num = null;

// for (let i = 0; i < numbers.length; i += 1){
//     num += numbers[i]
// }
// let media = num / (numbers.length)

// if (media > 20) {
//     console.log('valor maior que 20')
// } else {
//     console.log('valor menor ou igual a 20')
// }



//exercício 10

// let larger = 0;

// for (let index = 0; index < numbers.length; index += 1){
//  if (larger < numbers[index]){
//     larger = numbers[index]
//  }
// }

// console.log(larger)



//exercício 11

// let numOdd = null;

// for (let index = 0; index < numbers.length; index += 1){
//    if(numbers[index] % 2 !== 0){
//       numOdd += 1
//    }
// }

// if (numOdd === 0) {
//    console.log('nenhum valor ímpar encontrado');
//  } else {
//    console.log('Há', numOdd, 'números ímpares');
//  }



//exercício 11

// let small = numbers[0];

// for (let index = 0; index < numbers.length; index += 1){
//  if (small > numbers[index]){
//     small = numbers[index]
//  }
// }
// console.log(small)



//exercício 12

// let tamanho = 25;
// let array = []

// for (let index = 1; index <= tamanho; index += 1) {
//      array.push(index)
// }
//    console.log(array)



//exercício 12

// let tamanho = 25;
// let array = []

// for (let index = 1; index <= tamanho; index += 1) {
//      array.push(index);
// }

// for (let index = 0; index < array.length; index += 1){
//    console.log(array[index] / 2)
// }




//exercício 13 bonus


let ordem = []

for(let index = 1;index < numbers.length; index += 1){
   for (let index2 = 0; index2 < numbers.length; index2 +=1){
      let ordemTemporaria = null
      if(numbers[index] < numbers[index2]){
         ordemTemporaria = numbers[index2]
         ordem.push(ordemTemporaria)
      }
      
   }
}

console.log(ordem)
// всі парні числа від 0 до 10 (включно)

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// Task

// function getSumOfRange(){
// let num1 = Number(prompt('Введіть перше число'));
// let num2 = Number(prompt('Введіть друге число'));

// if (num2 > num1) {
    
//     console.log(sum)
// } else {
//     console.log('Неправильні вхідні дані')
// }
// }

// function getSum(num1, num2) { //Rure function
//     let sum = 0;
//         for (let i = num1; i <= num2; i++) {
//             sum = sum + i;
//         }
//         return sum;
// }

// *********

// let str ='*';

// for (let i=0; i < 9; i++) {
//     str+='*';
// }

// console.log(str);

// let str ='';
// for (let j =0; j < 8; j++ ) {
//     for (let i=0; i < 8; i++) {
//     str+='* ';
//     }
//     str += '\n'
// }

// console.log(str);

// Квадрат 

// let str1 = '';
// for (let k = 0; k <= 3; k++) {
//     for (let i = 1; i <= 3; i++) {
//         str1 += i;
//     }
//     str1 += '\n';
// }

// console.log(str1)

// Task

// let num1 = Number(prompt('введить число'));
// let num2 = Number(prompt('введить друге число'));

// let str3 = '';
// for (let j = 0; j < num2; j++){
//     for (let i = 1; i <= num1; i++) {
//         str3 += '@ ';
//     }
//     str3 += '\n';
// }
// console.log(str3);

//  Квадрат 

//  let userPrompt = Number(prompt('Ведіть розмір фігури'));

//  drawSquare(userPrompt);

//  function drawSquare(dimension) {
//         let str3 = '';
//     for (let j = 0; j < dimension; j++){
//         for (let i = 0; i < dimension; i++) {
//             str3 += '@ ';
//         }
//         str3 += '\n';
//     }
//     console.log(str3);
//  }

 // Пустий квадрат

//   let userEmptyPrompt = Number(prompt('Ведіть розмір фігури'));

//  drawEmptySquare(userEmptyPrompt);

//  function drawEmptySquare(dimension1) {
//         let str3 = '';
//     for (let j = 0; j < dimension1; j++){
//         for (let i = 0; i < dimension1; i++) {
//             if (j === 0 || j === dimension1 - 1 || i === 0 || i === dimension1 - 1) {  // якщо поточна ітерація циклу - це рамка, то малюємо зірочку
//                 str3 += '@ ';
//             } else {  // інакше - малюємо проюіл
//                 str3 += '  ';
//             }            
//         }
//         str3 += '\n';
//     }
//     console.log(str3);
//  }


 // Трикутник 

 let str1 = '';
for (let k = 1; k <= 7; k++) {
    for (let i = 1; i < k; i++) {
        str1 += '*';
    }
    str1 += '\n';

}
console.log(str1)

// 

//   let userDiagonalPrompt = Number(prompt('Ведіть розмір квадрату'));
// // debugger;
//  drawDiagonalSquare(userDiagonalPrompt);

//  function drawDiagonalSquare(dimension1) {
//         let str3 = '';
//     for (let j = 0; j < dimension1; j++){
//         for (let i = 0; i < dimension1; i++) {
//             if (j === 0 || j === dimension1 - 1 || i === 0 || i === dimension1 - 1 || j === i) {  
//                 str3 += '@ ';
//             } else {
//                 str3 += '  ';
//             }            
//         }
//         str3 += '\n';
//     }
//     console.log(str3);
//  }


//

//  let userReverseDiagonalPrompt = Number(prompt('Ведіть ще раз розмір квадрату'));

//  drawReverseDiagonalSquare(userReverseDiagonalPrompt);

//  function drawReverseDiagonalSquare(dimension) {
//         let str = '';
//     for (let j = 0; j < dimension; j++){
//         for (let i = 0; i < dimension; i++) {
//             if (j === 0 || j === dimension - 1 || i === 0 || i === dimension - 1 || j + i === dimension - 1) {  
//                 str += '@ ';
//             } else {
//                 str += '  ';
//             }            
//         }
//         str += '\n';
//     }
//     console.log(str);
//  }


 let monitor = {
    display: 27,
    brightness:200,
    aspectRatio: '16:9',
    on: function() {
        console.log('Наш монитор работает')
    }
 }


 let cat = {
    name: 'Red',
    color: 'red',
    eueColor: 'yellow',
    weight: 7,
    age: 11,
    meow: function() {
        console.log('МЯЯЯЯУУУУУУУУУУУУ')
    },
    run: function() {
        console.log('ТИГДИК-ТИГДИК')
    },
    eat: function() {
        console.log('НЯМ-НЯМ-НЯМ')
    },
    girlfriend: {
        name: 'Kyzya',
        color: 'white-black',
        eyeColor: 'green'
    }
 }

// Отримання значння з об'єкту ---- READ

cat.color

console.log(cat);

// десь отут котику стукнуло 12 рочків

 cat.age = cat.age +1 //або  //// URDATE
 //cat.age++

 console.log(cat);

 // тупер хочу додати котику нову властмвість

 cat.favouriteFood = 'tune' /// CREATE

 /// виділити властивість  age

 delete cat.age


// Task квітка - різновид, колір, висота, пити, рости -- розквітати, додати віисто, виділити колір

let flower = {
    type: 'Rose',
    color: 'White',
    height: 1,
    drink: function() {
        console.log('water')
    }    
}
flower.bloom = function() {
        console.log('Подивиться на ці квіточки')
    }
flower.height = flower.height + 0.1;

delete flower.color;

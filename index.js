// всі парні числа від 0 до 10 (включно)

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

// Task

function getSumOfRange(){
let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

if (num2 > num1) {
    
    console.log(sum)
} else {
    console.log('Неправильні вхідні дані')
}
}

function getSum(num1, num2) { //Rure function
    let sum = 0;
        for (let i = num1; i <= num2; i++) {
            sum = sum + i;
        }
        return sum;
}
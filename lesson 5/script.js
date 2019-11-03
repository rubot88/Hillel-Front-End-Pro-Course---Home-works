'use strict';

const taskOutputs = [];

function addTaskToArr(arr, item) {
    arr[arr.length] = item;
}
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

//1) Написать функцию которая принимает 2 параметра перемножает и возвращает значение!!!

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 10));
addTaskToArr(taskOutputs, multiply(5, 10));

console.log('==================================================================================');

// 2) Написать функцию которая принимает 3 параметра и возвращает найменьшее из них

function min(a, b, c) {
    return Math.min(a, b, c);
}

console.log(min(100, 33, 11));
addTaskToArr(taskOutputs, min(100, 33, 11));

console.log('==================================================================================');

//3) Написать функцию которая 
//  -принимает массив, 
//  -сохраняет непарные числа в новый массив, 
//  -сортирует массив
// - и возвращает отсортированный массив

function sortOddNumbers(array) {

    return array.filter(item => (item % 2) !== 0).sort((a, b) => a - b);

}

console.log('[' + sortOddNumbers([2, 5, 3, 6, 9, 8, 10, 11]) + ']');
addTaskToArr(taskOutputs, sortOddNumbers([2, 5, 3, 6, 9, 8, 10, 11]));

console.log('==================================================================================');

// 4) Написать функцию котороя принимает массив, и выводит новый массив из тех элементов которые кратны 5!!

function multipleOfFive(array) {
    //Функция возвращает результат вместо того чтобы выводить, по скольку результат задачи вывожу в DOM
    return array.filter(item => item % 5 === 0);
    // как должно быть по условию задачи
    // console.log(array.filter(item => { return index % 5 === 0}));
}

console.log('[' + multipleOfFive([20, 5, 3, 23, 15, 8, 10, 11]) + ']');
addTaskToArr(taskOutputs, multipleOfFive([20, 5, 3, 23, 15, 8, 10, 11]));

console.log('==================================================================================');

// 5) Написать функцию котороя принимает массив из строк, и возвращает кокатенацию из элементов первые символы которых
// совпадают с этой подстрокой 'jitb'. Используем  toLowerCase() и indexOf() методы  !!

function matchWithString(array) {
    const str = 'jitb';
    return array.filter((item) => str.indexOf(item[0].toLowerCase()) !== -1).join(' ');
}
matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']); // должно вывести javascript is the best
console.log(matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']));
addTaskToArr(taskOutputs, matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']));

console.log('==================================================================================');

// 6) Написать функцию котороя принимает строку и возвращает подстроку и количество таких подстрок в строке! 

function sameSubstring(str) {
    if (!str) {
        return 'The string is empty';
    }
    let newStr = str[0];
    for (let i = 1; i < str.length; i++) {
        if (~newStr.indexOf(str[i])) {
            break;
        }
        newStr += str[i];
    }
    let counter = 0;
    for (let i = 0; i < str.length; i = str.indexOf(newStr, i) + 1) {
        if (str.indexOf(newStr, i) === -1) {
            break;
        }
        counter++;
    }
    return [newStr, counter];
}
const subStrOutContainer = [];
addTaskToArr(subStrOutContainer, sameSubstring('fdfdfdfd'));
addTaskToArr(subStrOutContainer, sameSubstring('xxxxxx'));
addTaskToArr(subStrOutContainer, sameSubstring('xyzxyzxyz'));
console.log('[' + sameSubstring('fdfdfdfd') + ']'); // рузльтат массив из ['fd', 4]
console.log('[' + sameSubstring('xxxxxx') + ']'); // рузльтат массив из ['x', 6]
console.log('[' + sameSubstring('xyzxyzxyz') + ']'); // рузльтат массив из ['xyz', 3]

addTaskToArr(taskOutputs, subStrOutContainer);

console.log('==================================================================================');

// 7) Написать функцию которая перемножает числа от 5 до 10 через рекурсию!!!
function recursive(number) {
    if (number < 10) {
        return number * recursive(number + 1);
    }
    return number;
}

console.log(recursive(5));
addTaskToArr(taskOutputs, recursive(5));

console.log('==================================================================================');

// 8) Написать функцию котороя принимает число и проверяет простое ли число, если да то возвращает true иначе false!!
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(9)); // false

const IsPrimeOutContainer = [];
addTaskToArr(IsPrimeOutContainer, isPrime(7));
addTaskToArr(IsPrimeOutContainer, isPrime(6));
addTaskToArr(IsPrimeOutContainer, isPrime(9));

addTaskToArr(taskOutputs, IsPrimeOutContainer);

console.log('==================================================================================');

// render outputs

function renderOutputs() {
    let taskCounter = 1;
    for (let i = 0; i < taskOutputs.length; i++) {
        let li = document.createElement('li');
        let taskNumber = document.createElement('div');
        let taskNode = document.createTextNode(`Task #${taskCounter++}`)
        let p;
        let taskResolution;
        taskNumber.appendChild(taskNode);
        taskNumber.classList.add('title');
        li.appendChild(taskNumber);
        if (Array.isArray(taskOutputs[i])) {
            for (let j = 0; j < taskOutputs[i].length; j++) {
                taskResolution = document.createTextNode(taskOutputs[i][j]);
                p = document.createElement('p');
                p.appendChild(taskResolution);
                li.appendChild(p);
            }
        } else {
            taskResolution = document.createTextNode(taskOutputs[i]);
            p = document.createElement('p');
            p.appendChild(taskResolution);
            li.appendChild(p);
        }
        let ul = document.getElementById('tasks');
        ul.appendChild(li);
    }
}

renderOutputs();
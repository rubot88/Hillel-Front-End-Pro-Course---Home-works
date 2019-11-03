'use strict';

let taskOutputs = [];

function addTaskToArr(arr, item) {
    item && (arr[arr.length] = item);
}
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// ЗАДАНИЕ 1))  ПРОВЕРЯЕМ ПОНИМАНИЕ 
const ar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// ЗАДАНИЕ ПРОПИСАТЬ ПОСЛЕДОВАТЕЛЬНО КАК ВЫПОЛНИТСЯ ЭТОТ ЦИКЛ НИЖЕ!!
// ТО ЕСТЬ СНАЧАЛА!!
//   1) i = 0, j = 0, ar[i][j] = 1;
//   2) i = 0, j = 1, ar[i][j] = 2;  и так далее!!!
//   3) i = 0, j = 2, ar[i][j] = 3;
//   4) i = 1, j = 0, ar[i][j] = 4;
//   5) i = 1, j = 1, ar[i][j] = 5;
//   6) i = 1, j = 2, ar[i][j] = 6;
//   7) i = 2, j = 0, ar[i][j] = 7;
//   8) i = 2, j = 1, ar[i][j] = 8;
//   9) i = 2, j = 2, ar[i][j] = 9;

for (let i = 0; i < ar.length; i++) {
    console.log('номер итерации главного цикла', i);
    for (let j = 0; j < ar[i].length; j++) {
        console.log('номер итерации дочернего цикла', j);
    }
}

let str = '1) i = 0, j = 0, ar[i][j] = 1; 2) i = 0, j = 1, ar[i][j] = 2; 3) i = 0, j = 2, ar[i][j] = 3; 4) i = 1, j = 0, ar[i][j] = 4; 5) i = 1, j = 1, ar[i][j] = 5; 6) i = 1, j = 2, ar[i][j] = 6; 7) i = 2, j = 0, ar[i][j] = 7; 8) i = 2, j = 1, ar[i][j] = 8; 9) i = 2, j = 2, ar[i][j] = 9'
let firstTaskArr = str.split('; ')
addTaskToArr(taskOutputs, firstTaskArr);

console.log('=======================================================================');

// Нужно вывести 4 9 3, другими словами это называется главная диагональ в матрице!!
const zero = [
    [4, 50, 47],
    [11, 9, 17],
    [49, 10, 3],
];

addTaskToArr(taskOutputs, '' + getDiagonal(zero));
console.log('' + getDiagonal(zero));

function getDiagonal(arr) {
    let diagonal = [];
    for (let i = 0; i < zero.length; i++) {
        diagonal[i] = arr[i][i];
    }
    return diagonal;
}

console.log('=======================================================================');

// Нужно перемножить 47 9 47, другими словами это называется побочная диагональ в матрице!!
const first = [
    [4, 50, 47],
    [11, 9, 17],
    [49, 10, 3],
];

addTaskToArr(taskOutputs, multiplySideDiagonal(first));
console.log(multiplySideDiagonal(first));


function multiplySideDiagonal(arr) {
    let multiply = 1;
    for (let i = 0; i < arr.length; i++) {
        multiply *= arr[i][arr.length - i - 1];

    }
    return multiply;
}

console.log('=======================================================================');

// Нужно отсортировать этот массив [11, 9, 17] внутри second!! то есть результат должен быть
//  
// [   [4, 50, 47], 
//     [9, 11, 17], 
//     [49, 10, 3],
// ];
const second = [
    [4, 50, 47],
    [11, 9, 17],
    [49, 10, 3],
];

let sortedArr = sortSubArray(second, 1);
addTaskToArr(taskOutputs, sortedArr);
for (let i = 0; i < sortedArr.length; i++) {
    console.log('[' + sortedArr[i] + ']');


}

function sortSubArray(arr, indexSubArray = 0) {
    for (let i = 0, temp; i < arr[indexSubArray].length - 1; i++) {
        for (let j = 0; j < arr[indexSubArray].length - i - 1; j++) {
            if (arr[indexSubArray][j] > arr[indexSubArray][j + 1]) {
                temp = arr[indexSubArray][j];
                arr[indexSubArray][j] = arr[indexSubArray][j + 1];
                arr[indexSubArray][j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log('=======================================================================');

// Поменять местами минимальный и максимальный елемент!!
const third = [10, 2, 4, 43, 5, 3, 19, 23];

addTaskToArr(taskOutputs, '[' + swapMinMaxIndex(third) + ']');
console.log('[' + swapMinMaxIndex(third) + ']');

function swapMinMaxIndex(arr) {
    let temp;
    let minMaxIndex = minMaxArrayIndex(arr);
    temp = arr[minMaxIndex.min];
    arr[minMaxIndex.min] = arr[minMaxIndex.max];
    arr[minMaxIndex.max] = temp;
    return arr;
}

function minMaxArrayIndex(arr) {
    let min = 0;
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        (arr[min] > arr[i]) ? (min = i) :
        (arr[max] < arr[i]) ? (max = i) : max;

    }
    return {
        min: min,
        max: max
    }

}

console.log('=======================================================================');

// Найти количество отрицательных значений в массиве!!
const fourth = [-4, -3, 43, -23, -9, 14, -19, 28];

addTaskToArr(taskOutputs, (minItemsCount(fourth)));
console.log(minItemsCount(fourth));

function minItemsCount(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++;
        }
    }
    return counter;
}

console.log('=======================================================================');

// Отсортировать весь массив!!!!!! НЕОБЯЗАТЕЛЬНО!!!
// Результат должен быть
// [
//     [3, 4, 9], 
//     [10, 11, 17], 
//     [47, 49, 50],
// ];
const fifth = [
    [4, 50, 47],
    [11, 9, 17],
    [49, 10, 3],
];
sortArray(fifth);
addTaskToArr(taskOutputs, (sortArray(fifth)));

for (let i = 0; i < fifth.length; i++) {
    console.log('[' + fifth[i] + ']');

}

function parseArr(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArray[newArray.length] = arr[i][j];
        }
    }
    return newArray;
}

function assembleArr(initialArr, parsedArr) {
    for (let i = 0, k = 0; i < initialArr.length; i++) {
        for (let j = 0; j < initialArr[i].length; j++, k++) {
            initialArr[i][j] = parsedArr[k];
        }

    }
    return initialArr;
}

function sortParsedArr(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let temp, j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

    }
    return array;
}

function sortArray(arr) {
    return assembleArr(arr, (sortParsedArr(parseArr(arr))));
}

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
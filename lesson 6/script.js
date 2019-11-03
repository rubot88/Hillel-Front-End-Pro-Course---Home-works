'use strict';

const taskOutputs = [];

function addTaskToArr(arr, item) {
    arr[arr.length] = item;
}

console.log('=================================================================================');

// удалить из строки повторяющиеся символы
var first = '12341561172181119999';

first = first.split('').reduce(((acc, curr) => (acc.indexOf(curr) === -1) ? (acc += curr) : acc));

console.log(first);
addTaskToArr(taskOutputs, first);

console.log('=================================================================================');

// количество слов в строке
var second = 'Hi, i am learning javascript';
let wordCount = second.split(' ').length;

console.log(wordCount);
addTaskToArr(taskOutputs, wordCount);

console.log('=================================================================================');

// самое длинное слово в строке
var third = 'Hi, i am learning javascript';

let longestWord = third.split(' ').reduce((acc, currVal) => acc.length < currVal.length ? currVal : acc);

console.log(longestWord);
addTaskToArr(taskOutputs, longestWord);


console.log('=================================================================================');

// удалить пробелы в строке
var fourth = 'Hi, i am learning javascript';

fourth = fourth.split(' ').join('');

console.log(fourth);
addTaskToArr(taskOutputs, fourth);

console.log('=================================================================================');

// заменить пробелы на зяпятые
var fifth = 'Hi, i am learning javascript';

fifth = fifth.split(' ').join(',');

console.log(fifth);
addTaskToArr(taskOutputs, fifth);

console.log('=================================================================================');

// Отфильтровать массив таким образом чтобы числа были не меньше 20 используя фильтр!
var sixth = [3, 42, 234, 5, 3, 21, 53];

sixth = sixth.filter(item => item >= 20);

console.log(`[ ${sixth} ]`);
addTaskToArr(taskOutputs, `[ ${sixth} ]`);

console.log('=================================================================================');

// Вернуть новый массив из строк добавив слово месяц если к элементу если число больше 20 используя map
// [3, '42 месяца', '23 месяца', 5, 3, '21 месяца', '53 месяца']
var seventh = [3, 42, 23, 5, 3, 21, 53];

function appendMonth(array) {
    return array.map(item => item > 20 ? (item + ' месяца') : item);
}

let newArr = appendMonth(seventh);

console.log(`[ ${seventh} ]`);
addTaskToArr(taskOutputs, `[ ${seventh} ]`);

console.log('=================================================================================');

// используя reduce просуммировать элементы которые больше 3
var eight = [3, 42, 23, 5, 3, 21, 53];

let sumItems = eight.reduce((acc, current) => current > 3 ? acc + current : acc, 0);

console.log(sumItems);
addTaskToArr(taskOutputs, sumItems);

console.log('=================================================================================');

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
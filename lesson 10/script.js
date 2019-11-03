'use strict';
let taskNumber = 1;

console.log(`Task # ${taskNumber++}===================================================================================`);

// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

//1) Вывести все значения свойств обьектов в массиве
var arr = [
    { author: 'Sergei', book: 'Sergei\'s book' },
    { author: 'Ivan', book: 'Ivan\'s book' },
    { author: 'Dmitrii', book: 'Dmitrii\'s book' }
];

for (const obj of arr) {
    for (const prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
    }
}

console.log(`Task # ${taskNumber++}===================================================================================`);
//2) есть пустой обьект obj и три переменные k m n! добавить свойства к obj c ключами имена которых совпадают со значениями переменных 
// k, m, n и и значениями такими же как имя ключа!
var k = 'book';
var m = 'apartment';
var n = 'table';
var obj = {};

obj[k] = k;
obj[m] = m;
obj[n] = n;

console.log(obj);

console.log(`Task # ${taskNumber++}===================================================================================`);
// 3) Есть массив с обьектов claims нужно привести к такому виду чтобы получить один обьект с ключами id и со значением весь обьект
// Например 
const newObj = {
    '1234': {
        id: 1234,
        model: 'MC7',
        status: 'Open'
    },
    '3453': {
        id: 3453,
        model: 'MC7',
        status: 'Open'
    }
    // и так далее
}
var claims = [{
        id: 1234,
        model: 'MC7',
        status: 'Open'
    },
    {
        id: 3453,
        model: 'MC7',
        status: 'Open'
    },
    {
        id: 6343,
        model: 'Gran Tour',
        status: 'Closed'
    },
    {
        id: 7644,
        status: 'In Progress'
    },
    {
        id: 7686,
        model: 'City Bike',
        status: 'Closed'
    },
    {
        id: 8356,
        model: 'Bike',
        status: 'Closed'
    },
    {
        id: 9745,
        model: 'Bicycle',
        status: 'Closed'
    },
    {
        id: 10253,
        model: 'Bicycle',
        status: 'Closed'
    },
    {
        id: 14234,
        model: 'Bike',
        status: 'Closed'
    }
];

function destruct(arr) {
    const object = {};
    for (const obj of arr) {
        object[obj.id] = obj;
    }
    return object;
}

console.log(destruct(claims));

console.log(`Task # ${taskNumber++}===================================================================================`);
//4) Дан массив arr! Вернуть те которые в квадрате меньше самого большого значения
var arr = [10, 6, 3, 5, 6, 2, 12, 64];

const arrMax = Math.max(...arr);
var newArr = arr.filter(curr => (curr ** 2 < arrMax));

console.log(`Filtered array: ${newArr}`);

console.log(`Task # ${taskNumber++}===================================================================================`);
// 5) Написать свой собственный some! Функция должна принимать два параметра массив и функцию!!
function some(array, f) {
    for (let i = 0; i < array.length; i++) {
        if (f(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
console.log(some([5, 2, 5, 1, 5, 3, 6], (el) => el > 5));

console.log(`Task # ${taskNumber++}===================================================================================`);
// 6) Переопределить toString функции getArrayClone и обьекта iron
function getArrayClone(arr) {
    return arr.slice();
}
const iron = {
    power: 2000,
    price: 2500
};

getArrayClone.toString = function() {
    return 'This awesome function should have returned new array, but not this time!!!';
}

iron.toString = function() {
    return `power: ${this.power} \nprice: ${this.price}`;
}

console.log(`To String function:\n${getArrayClone}`);
console.log(`To String iron:\n${iron}`);

console.log(`Task # ${taskNumber++}===================================================================================`);
// 7)  Написать функцию которая записывает элементы из массива arr2 в новый массив которых нет в arr1!
var arr1 = [5, 2, 'a'];
var arr2 = [6, 5, 2, 4, 'a'];
var newArr = [];

arr2.forEach(el => arr1.includes(el) ? el : (newArr = [...newArr, el]));
console.log(`New array: [${newArr}]`);

console.log(`Task # ${taskNumber++}===================================================================================`);
// 8) Какой контекст имеет первый и второй массив?
var arr1 = [5, 2, 'a'];
var arr2 = [6, 5, 2, 4, 'a'];

console.log('arr1 and arr2'); // arr1 and arr2

console.log(`Task # ${taskNumber++}===================================================================================`);
// 9) Есть два обьекта! Вызвать getSpeed1() с контекстом car2 и getSpeed2 с контекстом car1
var car1 = {
    speed: 200,
    getSpeed1() {
        return this.speed;
    },
}
var car2 = {
    speed: 220,
    getSpeed2() {
        return `${this.speed}km`;
    },
}

console.log(`Car2 calls getSpeed1: ${car1.getSpeed1.call(car2)}`);
console.log(`Car1 calls getSpeed2: ${car2.getSpeed2.call(car1)}`);
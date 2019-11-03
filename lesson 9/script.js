'use strict';
let taskNumber = 1;

console.log(`Task # ${taskNumber++}===================================================================================`);
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
//1) Есть массив из обьектов нужно отфильтровать только те у которых цена больше 40000 и где model не равна Mercedes с помощью filter!
const car = [{
        model: 'BMW',
        price: 45000,
        year: 2015,
        country: 'Germany'
    },
    {
        model: 'Audi',
        price: 75000,
        year: 2017,
        country: 'Germany'
    },
    {
        model: 'Mercedes',
        price: 80000,
        year: 2019,
        country: 'Germany'
    },
    {
        model: 'Volkswagen',
        price: 35000,
        year: 2019,
        country: 'Germany'
    },
];

const filteredCar = car.filter(curr => curr.price > 40000 && curr.model !== 'Mercedes');
console.log('Filtered Car object: ', filteredCar);

console.log(`Task # ${taskNumber++}===================================================================================`);
// 2) Есть массив claims если хотя бы один обьект имеет в поле статус значение Open то вернуть true! Ипользовать метод массива some!
let claims = [{
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

console.log(`If some of claims status consists 'Open': ${claims.some(curr => curr.status === 'Open')}`);

console.log(`Task # ${taskNumber++}===================================================================================`);
//3) Дан массив arr! Используя пробежаться по массиву и если все больше или равны 2 то вернуть true! Использовть every метод!
const arr = [10, 6, 3, 5, 6, 2, 12, 64];

console.log(`If all elements of arr are >= 2 : ${arr.every(curr => curr >= 2)}`);


console.log(`Task # ${taskNumber++}===================================================================================`);
// 4) Используя claims переменную выше!! Удилить все элементы у которых статус Closed!! Подсказка! удалить не значит брать и явно удалять можно использовать метод массивов и вернуть новый и перезаписать!!

claims = claims.filter(curr => curr.status !== 'Closed');

console.log(`New claims object:`, claims);

console.log(`Task # ${taskNumber++}===================================================================================`);
// 5) Написать свой собственный filter! Функция должна принимать два параметра массив и функцию!!
function filter(array, f) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray = f(array[i], i, array) ? [...newArray, array[i]] : newArray;
    }
    return newArray;
}

console.log(filter([5, 2, 5, 1, 6, 3, 6], function(el) { return el > 2 }));

// ВОТ ПРИМЕР КАК НАПИСАТЬ СВОЙ map
function map(arr, f) { // arr - массив, f - функция обратного вызова
    let newArr = [];
    for (let current of arr) {
        newArr = [...newArr, f(current)];
    }
    return newArr;
}

map([5, 3, 1, 5, 3], function(curr) { return curr * 2 }); // передал два параметра массив и коллбэк
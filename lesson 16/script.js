'use strict';
let taskNumber = 1;

// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))


console.log(`Task # ${taskNumber++}===================================================================================`);
//1) Есть три обьекта организовать цепочку таким образом чтобы обьект obj1 был родилем obj2, obj2 родителем obj3
const obj1 = {
    name: 'Sergei',
    lastName: 'Shakhov'
};

const obj2 = {
    name: 'Vasia',
    lastName: 'Petrov'
};

const obj3 = {
    name: 'Misha',
    lastName: 'Ivanov'
};

obj3.__proto__ = obj2;
obj2.__proto__ = obj1;

console.log('Parent of object 2: ', obj2.__proto__);
console.log('Parent of object 3: ', obj3.__proto__);


console.log(`Task # ${taskNumber++}===================================================================================`);
// 2) Ну еще одна тренировочка  
//  https://playwithpromise.herokuapp.com/api/order-review - POST запрос на отправление данных
// `https://playwithpromise.herokuapp.com/api/order-review/removeByEmail?email=${agentName}` - DELETE запрос на удаление этой записи! 
//  agentName - брать значение со свойства agentName в обьекте order!
// Есть две переменные нужно добавить в обьект order свойство orderList 
// после этого сделать POST запрос который отправит этот обьект! И после этого DELETE запрос
// Сделать с помощью then и async await!
// НЕ ЗНАЕТЕ КАК СДЕЛАТЬ POST, DELETE запросы ? ТОЖЕ САМОЕ ЧТО И С GET, только нужно немного пеменять и добавить кое-что !
//  Ставим вас в боевую обстановку нужно загуглить как, если не получиться тогда я подскажу!
let order = {
    creationDate: "2019-04-07T19:14:55.964Z",
    agentName: "RustamBotirovtest@gmail.com", // здесь введите лучше какой-то другой эмеил!
    orderId: 10
};
const orderList = [{
    quantity: 2,
    productId: "5d4750f21c9d440000511775"
},
{
    quantity: 2,
    productId: "5d47551f1c9d440000511779"
}
];
order = {
    ...order,
    orderList
};
let postUrl = 'https://playwithpromise.herokuapp.com/api/order-review',
    delUrl = `https://playwithpromise.herokuapp.com/api/order-review/removeByEmail?email=${order.agentName}`;

function requestPost(url, data) {
    return new Promise((res, rej) => {
        let req = new XMLHttpRequest();
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(data));
        req.onload = function () {
            if (this.status != 200) {
                rej(`Error ${this.status}: ${this.statusText}`);
            }
            res(JSON.parse(this.responseText));
        };
        req.onerror = () => rej('Request failed!!!');

    });
}

function removeData(url) {
    return new Promise((res, rej) => {
        let req = new XMLHttpRequest();
        req.open("DELETE", url);
        req.send();
        req.onload = function () {
            if (this.status != 200) {
                rej('There is some problem in response from server!!!');
            }
            res(JSON.parse(this.responseText));
        }
        req.onerror = () => rej('Request failed!!!');
    });
}

requestPost(postUrl, order)
    .then(resp => {
        console.log('Post response, using then: ', resp);
        return removeData(delUrl);
    })
    .then(resp => console.log('Delelte response, using then: ', resp))
    .catch(e => console.log('Error: ', e));

async function sendRequests() {
    let postResonse = await requestPost(postUrl, order);
    console.log('Post response, using await: ', postResonse);
    let delResponse = await removeData(delUrl);
    console.log('Delete response,using await: ', delResponse);
}

sendRequests();

console.log(`Task # ${taskNumber++}===================================================================================`);
// 3) Ну и последнее как всегда! теперь пишем свой splice
function splice(array, start, deleteCount = array.length - start, ...items) {
    start = start < 0 ? Math.abs(start) > array.length ? // convert start to correct position
        0 :
        array.length - Math.abs(start) :
        start > array.length ? array.length : start;;
    deleteCount = deleteCount > (array.length - start) ? (array.length - start) : // convert deleteCount to correct count
        deleteCount < 0 ? 0 : deleteCount;
    let tempArr = [...array],
        removedItems = [];
    array.length = 0;
    for (let i = 0, j = deleteCount; i < tempArr.length; i++) {
        if (i === start) {
            array.push(...items);
        }
        if (j && i >= start) {
            j--;
            removedItems.push(tempArr[i]);
            continue;
        }
        array.push(tempArr[i]);
    };
    return removedItems;
}
const arr = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(`Removed items: ${splice(arr, 1, 1, 'drum')}`);
console.log(`Modified Array: ${arr}`);
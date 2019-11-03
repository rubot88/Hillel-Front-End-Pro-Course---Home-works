'use strict';
let taskNumber = 1;

console.log(`Task # ${taskNumber++}===================================================================================`);
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

//1) Есть промис! что за параметры принимает функция? Зачем они? как вернуть обьект {id: 10, name: 'Sergei'} и 
// потом принять его с помощью функции промиса then? Как вернуть ошибку в промисе и потом ее перехватить?
const pr = new Promise(function(resolve, reject) {
    let random = Math.floor(Math.random() * 10);
    if (random >= 5) {
        resolve({
            id: 10,
            neme: 'Sergei'
        });
    }
    reject(new Error('The error occured!'));
});

pr.then(value => console.log(value))
    .catch(err => console.log(err.message));

console.log(`
resolve и reject - функции коллбеки, которые вызываются когда асинхронная функция завершилась.
resolve - вызывается когда функция исполнитель завершилась успешно, меняет состояние Promise на "fulfilled" и возвращает Promise c указанным значением - resolve(value);
reject - вызывается когда функция исполнитель завершилась не успешно, меняет состояние Promise на "rejected" и возвращает Promise с указанной причиной неудачного завершения - reject(reason).
Эти функции существуют для сообщения об успешности(неуспешности) выполнения фкункции исполнителя, а также как связующее звено для передачи результатов для дальнейшей обработки.
Вернуть ошибку можно вызвав функцию reject. Перехватить ее можно с помощью метода .catch. 
Также ошибку можно перехватить, если передать второй параметр в метод .then(result=>console.log(result),error=>console.log(error));
`);

console.log(`Task # ${taskNumber++}===================================================================================`);
//2) Есть код ! с помощью промисов написать таким образом чтобы выполнилось по порядку от одного до 5!
// На данный момент выполнятся setTimeout-ы вконце!!
let newPromise = new Promise(resolve => {
    setTimeout(() => {
        console.log('1');
        resolve();
    }, 1300);

});
newPromise.then(() => {
        console.log('2');
        console.log('3');
    })
    .then(() => new Promise(resolve => setTimeout(() => {
        console.log('4')
        resolve();
    }, 300)))
    .then(() => console.log('5'));

console.log(`Task # ${taskNumber++}===================================================================================`);
//3) Есть код !  Нужно всего лишь написать комментарий что делает каждая из строчок!
const pr2 = new Promise(function(resolve, reject) { //создается промис 
    resolve({ id: 2 }); // вызывается функция resolve, которая сообщает об успешном выполеннеии, и возвращает промис с результатом - { id: 2 }
});
pr2.then((data) => data) // вызывается метод промиса .then, который принимает колбэк-функцию с результатом выполнения промиса в качестве параметра.
    // .then  возвращает промис c резельтатом - data  
    .then((res) => { // вызывется then-> принимет коллбэк, в котором параметр res является результатом предидущего then  
        throw new Error('Something went wrong') // генерируем ошибку с помощью оператора throw
    })
    .catch((e) => console.log('ERROR', e)) // вызывается метод-> принимет колбек с ошибкой в качестве параметра -> выводится на консоль сообщение об ошибке и возвращает промис

console.log(`Task # ${taskNumber++}===================================================================================`);
// 4) Использую Promise.all получить массив из промисов и после чего отсортировать тот что возвращает массив! 
const prom1 = new Promise(function(resolve, reject) {
    resolve(10);
});
const prom2 = new Promise(function(resolve, reject) {
    resolve({ id: 3 });
});
const prom3 = new Promise(function(resolve, reject) {
    resolve([6, 2, 4, 6]);
});

Promise.all([prom1, prom2, prom3])
    .then(result => result.find(el => Array.isArray(el)).sort((a, b) => a - b))
    .then(console.log)
    .catch(err => console.log(err));

console.log(`Task # ${taskNumber++}===================================================================================`);
// 5) Есть роуты!!
// https://playwithpromise.herokuapp.com/api/order-review/last - вернет обьект с id такой( 5d4762e02481a600174fb1ae )
// после чего используя id делаем другой запрос
// https://playwithpromise.herokuapp.com/api/order-review/getid/{id} 
// ответ будет обьект у которого будет поле orderList - массив с двух обьектов 
// у обьектов будет productId еще сделать запрос по productId то есть два запроса ибо 2 обьекта в которых свой productId Promise.all в помощь!!
//https://playwithpromise.herokuapp.com/api/order-system/product/{id}
// ВОТ ПРИМЕР ЗАПРОСА по первому URL! Конечно это нужно будет обернуть в промис!
// var Req = new XMLHttpRequest();
// Req.onload = function() {
//     if (!this.responseText) rej('BYE');
//     res(JSON.parse(this.responseText));
// }
// Req.open("GET", 'https://playwithpromise.herokuapp.com/api/order-review/last');
// Req.send();
function request(url) {
    return new Promise((resolve, reject) => {
        var Req = new XMLHttpRequest();
        Req.onload = function() {
            if (!this.responseText) reject('BYE');
            resolve(JSON.parse(this.responseText));
        }
        Req.open("GET", url);
        Req.send();
    })
}
request('https://playwithpromise.herokuapp.com/api/order-review/last')
    .then(response => request(`https://playwithpromise.herokuapp.com/api/order-review/getid/${response._id}`))
    .then(response => {
        const urls = response.orderList.map(c => `https://playwithpromise.herokuapp.com/api/order-system/product/${c.productId}`), //get URLs
            productReq = urls.map(url => request(url));
        return Promise.all(productReq);
    })
    .then(response => response.forEach(resp => console.log(resp)))
    .catch(e => console.log(e));
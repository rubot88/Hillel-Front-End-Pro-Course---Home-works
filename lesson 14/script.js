'use strict';

// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
//1) Есть код ! с помощью async await реализуем правильную последовательность!!
// setTimeout(() => console.log('1'), 1300);
// console.log('2');
// console.log('3');
// setTimeout(() => console.log('4'), 300);
// console.log('5');

async function logsOrder() {
    await new Promise(res => setTimeout(() => {
        console.log('1');
        res();
    }, 1300));
    console.log('2');
    console.log('3');
    await new Promise(res => setTimeout(() => {
        console.log('4');
        res();
    }, 300))
    console.log('5');
}

logsOrder();

// 2) Есть роуты!! Делаем через async await то что в предыдущей!
// https://playwithpromise.herokuapp.com/api/order-review/last - вернет обьект с id такой( 5d4762e02481a600174fb1ae )
// после чего используя id делаем другой запрос
// https://playwithpromise.herokuapp.com/api/order-review/getid/{id} 
// https://playwithpromise.herokuapp.com/api/order-system/product/{productId}

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

async function callReq() {
    try {
        let idReq = await request(`https://playwithpromise.herokuapp.com/api/order-review/last`),
            orderListObj = await request(`https://playwithpromise.herokuapp.com/api/order-review/getid/${idReq._id}`),
            urls = orderListObj.orderList.map(id => `https://playwithpromise.herokuapp.com/api/order-system/product/${id.productId}`),
            productReq = urls.map(url => request(url));
        return await Promise.all(productReq);
    } catch (e) {
        console.log(e);
    }

}

callReq().then(response => response.forEach(resp => console.log(resp)));
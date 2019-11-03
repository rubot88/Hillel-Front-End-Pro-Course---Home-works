'use strict';
let urlStatus = 'http://localhost:3000/status',
    urlData = 'http://localhost:3000/data',
    arrUrls = [urlStatus, urlData];

function request(url) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = function () {
            if (this.status !== 200) {
                rej(`Error ${this.status}: ${this.statusText}`)
            }
            res(this.responseText);
        };
        xhr.onerror = () => rej('Request failed!!!');
    });
}

async function callRequest() {
    try {
        arrUrls = arrUrls.map(url => request(url));
        let responses = await Promise.all(arrUrls);
        responses = responses.map(resp => JSON.parse(resp));
        console.log(responses);

        return responses;
    } catch (error) {

        return (error);
    }
}
function checkType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}
function render(obj, ObjName = false) {
    const div = document.createElement('div');
    if (ObjName) {
        const p = document.createElement('p');
        ObjName.toLowerCase() === 'error' ? div.classList.add('error') : p.classList.add('heading');
        p.innerHTML = ObjName[0].toUpperCase() + ObjName.slice(1) + ': ';
        div.append(p);
    }
    if (checkType(obj) === 'Array') {
        const ol = document.createElement('ol');
        ol.classList.add('list');
        obj.forEach(el => {
            let li = document.createElement('li');
            li.innerHTML = Object.values(el).join(' ');
            ol.append(li);
        });
        div.append(ol);
    } else if (checkType(obj) === 'Object') {
        const p = document.createElement('p');
        p.classList.add('plain');
        p.innerHTML = Object.values(obj).join(' ');
        div.append(p);
    } else {
        const p = document.createElement('p');
        p.innerHTML = obj;
        div.append(p);
    }
    document.body.append(div);
}
async function renderHandler() {
    let response = await callRequest();
    if (typeof response === 'string') {
        render(response, 'error');
    } else {
        let [status, group] = response;
        Object.keys(status).join('');
        group.students.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
        render(status, Object.keys(status)[0]);
        render(group.teacher, Object.keys(group)[0]);
        render(group.students, Object.keys(group)[1]);
    }

}
renderHandler();
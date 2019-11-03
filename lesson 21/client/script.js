'use strict';
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

//1) Задача состоит в следующем! Написать код который отправляет POST запрос со следующим body! 
let obj = {
    data: {
        question: 'How are you?',
        answer: 'I am good!'
    }
}

const url = new URL('http://localhost:3000/post');
async function sendPost(url, obj) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Content-Type': 'text/plain;charset=UTF-8'
            },
            body: JSON.stringify(obj)
        });
        if (response.ok) {
            let object = await response.json();
            return object;
        } else {            
            throw new Error(`Error status - ${response.status}, ${response.statusText}`)
        }
    } catch (e) {
        return `Request "${url}" is failed! ${e.message}!`;
    }
}
async function renderResult() {
    let response = await sendPost(url, obj);
    let h1 = document.createElement('h1');
    h1.style = 'text-align: center;color: red;padding:6px;margin:0 0 6px;';

    if (typeof response === 'object') {
        h1.innerHTML = 'Request is successful!';
        let div = document.createElement('div');
        div.style = 'font-size: 26px;line-height: 30px;color: chartreuse;display: inline-block;padding: 0px 0px 0px 40px;';
        document.body.append(h1);

        for (const item in response) {
            let p = document.createElement('p');
            p.innerText = `${item}: ${response[item]}`;
            p.style = 'text-align: left;'
            div.append(p);
        }
        document.body.append(div);

    } else {
        h1.innerHTML = response;
        document.body.append(h1);
    }
}

renderResult();

        // И расширить серверную часть ниже добавить заголовки чтобы можно было отправить c любого домена и распарсить body и вернуть его!!

        // http.createServer((req, res) => {
        //     //  Н
        //     res.end();
        // }).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));
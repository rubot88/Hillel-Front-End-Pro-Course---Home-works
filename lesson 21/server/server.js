let http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    if (req.url === '/post') {
        let reqData;
        req.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            reqData = JSON.parse(String(chunk));
            let { data } = reqData;
            reqData = data;
        }).on('end', () => {
            res.end(JSON.stringify(reqData));
        });
    } else {
        res.statusCode = 404;
        // res.write('Bad request');
        res.end();
    }
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));
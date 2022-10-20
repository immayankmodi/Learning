import http from 'http'
import fs from 'fs'

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('./ecms_es6/index.html');
        res.end(data.toString());
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>Hello, welcome to about page.</h1>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Sorry, page not found!</h1>');
    }    
})

server.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})
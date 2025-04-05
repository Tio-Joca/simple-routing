function main () {
    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 3000;
    const publicPath = path.join(__dirname, '../public');

    app.use(express.static(publicPath));

    app.get('/', (req, res) => {
        console.log(req);
        res.status(200);
        res.sendFile(path.join(publicPath, 'index.html'));
    });

    app.get('/login', (req, res) => {
        console.log(req);
        res.status(200);
        res.setHeader('Content-type', 'text/html');
        res.sendFile(path.join(publicPath, 'login.html'));
    });

    app.get('/register', (req, res) => {
        console.log(req);
        res.status(200);
        res.setHeader('Content-type', 'text/html');
        res.sendFile(path.join(publicPath, 'register.html'));
    });

    app.get('/forgot-password', (req, res) => {
        console.log(req);
        res.status(200);
        res.setHeader('Content-type', 'text/html');
        res.sendFile(path.join(publicPath, 'forgot-password.html'));
    });

    app.get('/dashboard', (req, res) => {
        console.log(req);
        res.status(200);
        res.setHeader('Content-type', 'text/html');
        res.sendFile(path.join(publicPath, 'index.html'));
    });

    app.listen(port, () => {
        console.log(`Example app running at http://127.0.0.1:${port}.`);
    });
}

main();
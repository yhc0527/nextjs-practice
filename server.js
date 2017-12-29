const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV !== 'production';
const app = next({ env });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        console.log(`NODE ENV ${env}`)
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
        })
    });

const http = require('http');


const server = http.createServer (
    (req,res) => {

        res.end('Olá, Mundo!')

    }
);

server.listen(3000,() =>{
    console.log('Servidor rodando');
});
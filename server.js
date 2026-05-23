const http = require('http');

// Configurações do servidor
const PROTOCOL = 'http'
const PORT = 3000
const HOST = 'localhost'


const server = http.createServer (
    (req,res) => {
        // writeHead monta o cabeçalho da resposta, onde define as configurações do corpo da resposta.
        // 200 é o status code HTTP informando que deu tudo certo com a chamada.
        // text/plain quer dizer que a resposta é texto puro e não HTML ou Json.
        // charset=utf-8 codifica o texto da mensage em UTF-8
        
        if (req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'})
        res.end('Olá, Mundo!')
        }else {
        res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'})
        res.end('Página não encontrada!')
        }
        
        
      

    }
);



server.listen(PORT,() =>{
    console.log(`Servidor rodando em: ${PROTOCOL}://${HOST}:${PORT}`);
});
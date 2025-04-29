const http_a = require('http')

const PORTA = 8000

const server = http_a.createServer( (req, res) => {
    console.log(req)
    res.end('uma resposta qualquer')
} )

server.listen(PORTA, () => {
    console.log(`O servidor esta rodando na porta' ${PORTA}`)
})
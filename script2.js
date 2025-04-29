const express = require('express')

const PORTA = 8000

const server = express()

server.listen(PORTA, () => {
    console.log(`o servidor esta online na porta ${PORTA}`)
})
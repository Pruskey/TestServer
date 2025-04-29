const express = require('express')

const PORTA = 8000

const server = express()
server.use(express.json())

function soma (num1, num2){
    return num1+num2
}

function subtracao (num1, num2){
    return num1-num2
}

function multiplicacao(num1, num2){
    return num1*num2
}

function divisao(num1,num2){
    return num1/num2
}


server.get('/soma', (req, res) => {
    console.log(req.query)
    const resultado = soma(Number(req.query.num1), Number(req.query.num2))
    res.send(`Resultado da soma: ${resultado}`)
})
server.get('/subtracao', (req, res) => {
    console.log(req.query)
    const resultado = subtracao(Number(req.query.num1), Number(req.query.num2))
    res.send(`Resultado da subtracao: ${resultado}`)
})
server.get('/multiplicacao', (req, res) => {
    console.log(req.query)
    const resultado = multiplicacao(Number(req.query.num1), Number(req.query.num2))
    res.send(`Resultado da multiplicacao: ${resultado}`)
})
server.get('/divisao', (req, res) => {
    console.log(req.query)
    const resultado = divisao(Number(req.query.num1), Number(req.query.num2))
    res.send(`Resultado da divisao: ${resultado}`)
})

server.listen(PORTA, () => {
    console.log(`o servidor esta online na porta ${PORTA}`)
})
const express = require('express')

const PORTA = 8000

const server = express()

server.get('/soma', () => {
    const resultado = somar(1,2)
    resultado.send(`Resultado da soma: ${resultado}`)
})
server.get('/subtracao', () => {
    const resultado = subtracao(1,2)
    resultado.send(`Resultado da subtracao: ${resultado}`)
})
server.get('/multiplicacao', () => {
    const resultado = multiplicacao(1,2)
    resultado.send(`Resultado da multiplicacao: ${resultado}`)
})
server.get('/divisao', () => {
    const resultado = divisao(1,2)
    resultado.send(`Resultado da divisao: ${resultado}`)
})

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

server.listen(PORTA, () => {
    console.log(`o servidor esta online na porta ${PORTA}`)
})
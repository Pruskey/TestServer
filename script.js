const http_a = require('http')

const PORTA = 8000

const server = http_a.createServer( (req, res) => {
    const rota = req.url
    if (rota == '/soma'){
        const resultado = somar(1,2)
        res.end(`Resultado da soma: ${resultado}`)
    } else if (rota == '/subtrair'){
        const resultado = subtrair(1,2)
        res.end(`Resultado da subtracao: ${resultado}`)
    } else if (rota == '/multiplicar'){
        const resultado = multiplicar(1,2)
        res.end(`Resultado da multiplicacao: ${resultado}`)
    } else if (rota == '/dividir'){
        const resultado = dividir(1,2)
        res.end(`Resultado da divisao: ${resultado}`)
    } else {
        const resultado = "invalido"
        res.end(`Resultado: ${resultado}`)
    }
} )

server.listen(PORTA, () => {
    console.log(`O servidor esta rodando na porta' ${PORTA}`)
})

function somar (num1, num2){
    return num1 + num2
}

function subtrair (num1, num2){
    return num1 - num2
}

function multiplicar (num1, num2){
    return num1 * num2
}

function dividir (num1, num2){
    return num1/num2
}
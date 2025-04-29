const http_a = require('http')

const PORTA = 8000

const server = http_a.createServer( (req, res) => {
    const rota = req.url
    if (rota == '/soma'){
        const resultado = somar(1,2)
    } else if (rota == '/subtrair'){
        const resultado = subtrair(1,2)
    } else if (rota == '/multiplicar'){
        const resultado = multiplicar(1,2)
    } else if (rota == '/dividir'){
        const resultado = dividir(1,2)
    } else {
        const resultado = "inválido"
    }
    
    res.end(`O resultado da soma é: ${resultado}`)
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
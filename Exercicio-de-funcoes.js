
/* 1a questão
function operacoes(a,b){
    console.log("Soma: ", parseInt(a)+parseInt(b))
    console.log("Subtração: ", a-b)
    console.log("Multiplicação: ", a * b)
    console.log("Divisão",a / b)
}

operacoes("3",2)
*/

/* 2a questão
function tipoTriangulo (a,b,c){
    let triangulo = ""
    if (a == b && b == c){
        triangulo = "equilátero"
    } else if (a != b && b != c && c != a){
        triangulo = "escaleno"
    } else{
        triangulo = "isóceles"
    }
    return console.log("O Triângulo é: " + triangulo)
}

tipoTriangulo(4,3,4)
*/

/* 3a questão
elevado = (a,b) => console.log(a**b)

elevado(3,4)
*/

/* 4a questão
resto = (a,b) => console.log( a % b)

resto(10,6)
*/

/* 5a questão
moeda = function(a,b){
 let soma = a + b
console.log( "R$"+ soma.toFixed(2).replace(".",","))
}

moeda(0.2,1.4)
*/
/* 6a questão
let jurosSimples = function(C,j,t){
    totalSimples = C + C*j*t
    console.log( totalSimples.toFixed(2) )
}
let jurosCompostos = function (C,j,t){
    totalComposto = C*(1+j)**t
    console.log( totalComposto.toFixed(2) )
}

jurosSimples(10,.2,3)
jurosCompostos(10,.2,3)
*/

/* 7a questao
function bhaskara(ax2, bx, c){
   let delta = bx**2 - 4*ax2*c
   if ( delta < 0 ){
       return console.log("Delta é negativo")
   } else{
       let x = [(-bx + Math.sqrt(delta))/(2*ax2), (-bx - Math.sqrt(delta))/(2*ax2)]
       return console.log(x)
   }
}

bhaskara(3,-5,12)
bhaskara(1,12,-13)
bhaskara(2,-16,-18)
*/

/* 8a questão

function recordeEPerdaJogo(pont) {
    vetor = pont.split(" ")
    let cont = 0
    let menor = ['100', '0']
    let maior = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (Number(vetor[i]) < Number(menor[0])){
            menor[0] = vetor[i]
            menor[1] = i+1
        }
        if (Number(vetor[i]) > Number(maior)){
            maior = vetor[i]
            cont +=1
        }
    }
    resultado = [cont,menor[1]]
    console.log(resultado)
}

pontuacao = "23 20 20 8 25 3 29 30 31"
recordeEPerdaJogo(pontuacao)
*/

/* 9a questao

function resultado(nota) {
    if (nota >= 0 && nota <= 100) {
        let NotaArred = nota
        if (nota % 5 > 2) {
            NotaArred = nota + (5 - nota % 5)
        }
        if (NotaArred < 40){
            NotaArred = nota
            console.log("Reprovado com Nota: " + NotaArred)
        } else{
            console.log("Aprovado com Nota: " + NotaArred)
        }
    } else console.log ("Nota deve estar ente 0 e 100.")
}

resultado(99)
*/

/*10a questão
 divisivelPorTres = (num) => {
     return  Boolean(!(num%3))
 }

 console.log(divisivelPorTres(6))
 */

/* 11a questao
function bissexto(ano) {
    valor = false
    if (!(ano % 400)) {
        valor = true
    } else if (!(ano % 100)) {
        valor = false
    } else if (!(ano % 4)) {
        valor = true
    }
    return valor
}
ano = 1900
anobis = bissexto(ano) ? "Ano é bissexto" : "Ano não é bissexto"
console.log(anobis)
*/

/* 12a questao
fator = (num) => {
   if(num == 0) {
       num = 1
   }
   for (i = num-1; i > 0; i--){
       num=num*i
   }
   console.log(num)
}
fator(6)
*/

/* 13a questao
semana = (num) => {
    switch (num) {
        case 7: case 1:
            console.log("É final de semana.")
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log("É dia útil.")
            break
        default:
            console.log("Número inválido")
    }
}

semana(0)

*/

/* 14 questao

temFruta = (fruta) => {
    switch (fruta) {
        case "maçã":
            console.log("Não vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo.")
            break
        default:
            console.log("Erro no console.")
    }
}

temFruta("melancia")
*/

/*/ 15 questao

tipoCarro = (tipo) =>{
    switch(tipo){
        case "hatch":
            console.log("Compra efetuada com sucesso.")
            break
        case "sedan": case "motocicleta": case "caminhonete":
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui.")
    }
}

tipoCarro("hatch")
*/

/* 16 questao

calcular = (num1, op, num2) =>{
    resultado = 0
    switch (op){
        case "+":
            resultado = (num1 + num2).toFixed(2)
            break
        case "-":
            resultado = (num1 - num2).toFixed(2)
            break
        case "*":
            resultado = (num1 * num2).toFixed(2)
            break
        case "/":
            resultado = (num1 / num2).toFixed(2)
            break
        default:
            resultado = "Operacao inválida."
    }
    return resultado
}

console.log(calcular(6,"+",3))
*/

/* 17 questao

aumentoSalarial = (plano, valor) => {
    resultado = 0
    switch (plano) {
        case "A":
            resultado = (valor * 1.1).toFixed(2).replace(".", ",")
            break
        case "B":
            resultado = (valor * 1.15).toFixed(2).replace(".", ",")
            break
        case "C":
            resultado = (valor * 1.2).toFixed(2).replace(".", ",")
            break
        default:
            resultado = "0,00. Plano inválido."
    }
    return resultado
}

console.log("O novo salário é R$ " + aumentoSalarial("D", 1023))
*/

/*18 questao

extensoNum = (num) => {
    switch (num) {
        case 0:
            console.log("O númeo digitado é zero.")
            break
        case 1:
            console.log("O númeo digitado é um.")
            break
        case 2:
            console.log("O númeo digitado é dois.")
            break
        case 3:
            console.log("O númeo digitado é três.")
            break
        case 4:
            console.log("O númeo digitado é quatro.")
            break
        case 5:
            console.log("O númeo digitado é cinco.")
            break
        case 6:
            console.log("O númeo digitado é seis.")
            break
        case 7:
            console.log("O númeo digitado é sete.")
            break
        case 8:
            console.log("O númeo digitado é oito.")
            break
        case 9:
            console.log("O númeo digitado é nove.")
            break
        case 10:
            console.log("O númeo digitado é dez.")
            break
        default:
            console.log("Número fora do intervalo.")


    }
}

extensoNum(8)
*/

/* 19 questao

calcularPreco = (cod, quant) => {
    let resultado = 0
    switch (cod) {
        case 100:
            resultado = quant * 3
            break
        case 200:
            resultado = quant * 4
            break
        case 300:
            resultado = quant * 5.5
            break
        case 400:
            resultado = quant * 7.5
            break
        case 500:
            resultado = quant * 3.5
            break
        case 600:
            resultado = quant * 2.8
            break
        default:
            return console.log("Produto não existente.")
    }
    return console.log("O preço do lanche foi R$ " + resultado.toFixed(2).replace(".",","))
}

calcularPreco(600,3)
*/

/* 20 questao

quantidadeNotas = function (nota) {
    resto = nota
    resultado = [0, 0, 0, 0, 0]
    resultado[0] = parseInt(resto / 100)
    resto = parseInt(resto % 100)
    resultado[1] = parseInt(resto / 50)
    resto = parseInt(resto % 50)
    resultado[2] = parseInt(resto / 10)
    resto = parseInt(resto % 10)
    resultado[3] = parseInt(resto / 5)
    resto = parseInt(resto % 5)
    resultado[4] = resto
    fraseContador(resultado)

}

fraseContador = function (vetor) {
    frase = [" nota(s) de R$ 100.", " nota(s) de R$ 50.", " nota(s) de R$ 10.", " nota(s) de R$ 5.", " nota(s) de R$ 1."]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] != 0) {
            console.log (vetor[i], frase[i])
        }
    }
}

quantidadeNotas(18)
*/

/* 21 questão
function planoIdade(idade) {
    valor = 0
    if (idade < 0 || idade > 140) {
        return console.log("Idade inválida")
    }
        if (idade < 10) {
        valor = 80
    } else if (idade >= 10 && idade <= 30) {
        valor = 50
    } else if (idade > 30 && idade <= 60) {
        valor = 95
    } else {
        valor = 130
    }
    console.log("Valor a se pago: R$ "+(100 + valor).toFixed(2).replace(".",","))
}

planoIdade(141)
*/

// 22 questão - não entendi

/* 23 questão

ordenar = (vetor) => {
    let aux = 0
    for (let i = 0; i < 2; i++) {
        if (vetor[0] > vetor[1] && vetor[0] > vetor[2]) {
            aux = vetor[0]
            vetor[0] = vetor[2]
            vetor[2] = aux
        } else if (vetor[0] > vetor[1] && vetor[0] < vetor[2]) {
            aux = vetor[0]
            vetor[0] = vetor[1]
            vetor[1] = aux
        } else if (vetor[1] > vetor[0] && vetor[1] > vetor[2]) {
            aux = vetor[1]
            vetor[1] = vetor[2]
            vetor[2] = aux
        }
    }
    return vetor
}

function Resultado(media) {
    if (media >= 5) {
        frase = "APROVADO"
    } else {
        frase = "REPROVADO"
    }
    return frase
}

function calcularMedia(codigo, nota1, nota2, nota3) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        return console.log("Nota inválida.")
    }
    arraydenota = [nota1, nota2, nota3]
    notas = ordenar(arraydenota)
    mediaPond = ((notas[0] + notas[1])*3 + notas[2]*4)/10
    console.log("Código: " + codigo)
    console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3)
    console.log("Média: " + mediaPond)
    console.log(Resultado(mediaPond))
}

codigo = 12
while (codigo >= 0){
calcularMedia(codigo, 2, 9, 1)
codigo = -1
}
*/

/* 24 questão
repetirFrase = () => {
    i = 1
    while (i <= 11) {
        console.log("Hello, World!")
        i++
    }
}

repetirFrase()
*/


/* 25 questão

contar = function () {
    i = 1
    while (i <= 50) {
        console.log(i)
        i++
    }
}
contar()
*/

/* 26 questão

contarPares = () => {
    i = 1
    while (i <= 100) {
        if (!(i % 2)) {
            console.log(i)
        }
        i++
    }
}

contarPares()
*/

/* 27 questao

function compararAltura(altmenor, taxa1, altmaior, taxa2) {
    auxiliar = 0
    taxaaux = 0
    if (altmenor > altmaior) {
        auxiliar = altmenor
        altmenor = altmaior
        altmaior = auxiliar
        taxaaux = taxa1
        taxa1 = taxa2
        taxa2 = taxaaux
    }

    if (altmenor != altmaior) {
        if (taxa1 > taxa2) {
            let t = (altmaior-altmenor)/(taxa1-taxa2)
            resultado =  `A criança menor ultrapassará a maior em ${t} anos.`
        } else {
            resultado = "A criança menor nunca ultrapassará a maior."
        }
        console.log(`Há uma criança menor. ${resultado}`)

    } else {
        console.log("As alturas são iguais.")
    }
}

compararAltura(150, 20, 130, 15)
*/

/* 28
quantNum = function (vetor) {
    let par = 0
    let impar = 0

    for (let i = 0; i < vetor.length; i++) {
        if (!(vetor[i]%2)) {
            par++
        } else {
            impar++
        }
    }
    console.log("Há " + par + " número(s) par(es) e " + impar + " número(s) ímpar(es).")
}


vetor = [1, 1, 5, 7, 9]
quantNum(vetor)
*/

/* 29 questao

contadorIntervalo = function (vetor){
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vetor.length; i++) {
       if (vetor[i] >=10 && vetor[i] <=20){
           dentro++
       } else {
           fora++
       }
    
    }
    console.log("Há " + dentro + " número(s) dentro do intervalo [10,20] e " + fora + " número(s) fora do intervalo.")
}

vetor = [10, 11, 15, 7, 20]
contadorIntervalo(vetor)
*/

/* 30 questao
function maiorEmenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i + 1] > maior) {
            maior = vetor[i + 1]
        }
        if (vetor[i + 1] < menor) {
            menor = vetor[i + 1]
        }
    }

    console.log("Menor número: " + menor)
    console.log("Maior número: " + maior)
}

vetor =  [10, 11, 15, 7, 20]
maiorEmenor(vetor)
*/

/* 31 questao

contNegativo = (vetor) => {
    let cont = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            cont++
        }
    }
    console.log("Quantidade de número(s) negativo(s): " + cont)
}
vetor = [-10, -11, 15, 7, -20]
contNegativo(vetor)
*/

/* 32 questão

function mediaArit(vetor) {
    soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i]
    }
    console.log("A média é: ", (soma / vetor.length))
}

vetor = [10, 10, 15, 15, 20]
mediaArit(vetor)
*/

/* 33 questao

vetorInteiro = [1, 2, 3, 4]
vetorString = ['a', 'b', 'c', 'd']
vetorDouble = [1.5, 2.6, 3.7, 4.8]

vetorResultado1 = vetorInteiro.concat(vetorString, vetorDouble)

vetorparcial = vetorInteiro.concat(vetorString)
vetorResultado2 = vetorparcial.concat(vetorDouble)

console.log(vetorResultado1)
console.log(vetorResultado2)
*/

/* 34 questao
function compararStrings(string1, string2) {
    vetor1 = string1.toUpperCase().split("")
    vetor2 = string2.toUpperCase().split("")
    let cont = 0
    for (let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] == vetor2[i]) {
            cont++
        }
    }
    return (cont == vetor1.length)
}

st1 = "maça"
st2 = "maçA"

console.log(compararStrings(st1, st2))
*/

/* 35 questao

vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

vetorPilha = vetorPilha.concat(vetorAdiciona)
console.log(vetorPilha)
console.log(vetorAdiciona)
*/

/* 36 questao 

function multiplicarVetor(vetor, numero) {
    let multiplicado = []
    for (let i = 0; i < vetor.length; i++) {
        multiplicado[i] = vetor[i] * numero
    }
    return multiplicado
}

function multiplicarSe(vetor, numero) {
    let resultado = []
    let j = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            resultado[j] = vetor[i] * 5
            j++
        }
    }
    return resultado
}

vetorMult = [1, 6, 10, 7]
num = 5

console.log(multiplicarVetor(vetorMult, num))
console.log(multiplicarSe(vetorMult, num))
*/

/* 37 questao
function ProgArit(n, a1, r) {
    vetorArit = []
    for (let i = 0; i < n; i++) {
        vetorArit[i] = a1 + i * r
    }
    let somaPA = (vetorArit[0] + vetorArit[n - 1]) * n / 2
    console.log("Os elementos da P.A. são: " + vetorArit)
    console.log("A soma da P.A. é: " + somaPA)
}

function ProgGeo(n, a1, q) {
    vetorGeo = []
    for (let i = 0; i < n; i++) {
        vetorGeo[i] = a1 * (q ** i)
    }
    let somaPG = a1 * (q**n - 1)/(q-1)
    console.log("Os elementos da P.G. são: " + vetorGeo)
    console.log("A soma da P.G. é: " + somaPG)
}
ProgArit(4, 1, 1)
ProgGeo(4, 1, 2)
*/

/* 38 questao 

function NumerosImpares(min = 0, max = 0) {
    let auxiliar = 0
    let vetorImpares = []
    let j = 0
    if (min > max) {
        auxiliar = min
        min = max
        max = auxiliar
    }
    for (let i = min; i <= max; i++) {
        if (i % 2 != 0) {
            vetorImpares[j] = i
            j++
        }
    }
    console.log("Os números ímpares entre " + min + " e " + max + " são: " + vetorImpares)
}

NumerosImpares(12, 5)
*/

/* 39 questao 

function TrocaVetor (vetorA, vetorB){
    vetorA = vetorA.concat(vetorB)
    for (let i = 0; i < (vetorA.length/2); i++) {
        vetorB[i] = vetorA[i]
    }
    for (let i = 0; i <= (vetorA.length/2)+1; i++) {
        vetorA.shift()     
    }
    console.log(vetorA)
    console.log(vetorB)
}


vetorUm = ["a","b", "c", "d","e"]
VetorDois = [6,7,8,9,10]

TrocaVetor(vetorUm,VetorDois)
*/

/* 40 questao
function conceitoNota(notas) {
    for (let i = 0; i < notas.length; i++) {
        switch (parseInt(notas[i])) {
            case 10: case 9:
                console.log("Nota: " + notas[i] + ". Conceito: A.")
                break
            case 8: case 7:
                console.log("Nota: " + notas[i] + ". Conceito: B.")
                break
            case 6: case 5:
                console.log("Nota: " + notas[i] + ". Conceito: C.")
                break
            case 4: case 3: case 2: case 1: case 0:
                console.log("Nota: " + notas[i] + ". Conceito: D.")
                break
            default:
                console.log("Nota inválida.")
        }
    }
}


vetor = [4.9, 6.9, 8.9, 9.9, 10]
conceitoNota(vetor)
*/
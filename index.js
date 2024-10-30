function aplicarDesconto(precoProduto, desconto){
    return (precoProduto - (precoProduto * (desconto/100)))
}

function aplicarJuros(precoProduto, juros){
    return (precoProduto + (precoProduto * (juros/100)))
}

let precoProduto = 220.40 //entrada operador caixa (pistola)
let condicaoPgto = 3 // selecionado pelo operador de caixa
let qtdparcelas = 2 // selecionado pelo operador de caixa
let parcela
let precoFinal 

// a operadora de caixa devera selecionar 1 = a vista ; 2 = dinheiro ou pix ; 3 = parcelado 2x ; 4 = parcelado em mais de 2x 

if (condicaoPgto===1) {
    console.log ("Voce ganha 10% de desconto")
    console.log (aplicarDesconto(precoProduto, 10))
}
else if (condicaoPgto===2) {
    console.log("Voce ganha 15% de desconto")
    console.log (aplicarDesconto(precoProduto, 15))
}
    
else if (condicaoPgto===3) {
    console.log ("O preço é R$ " + precoProduto)
    precoFinal = precoProduto
    parcela = precoFinal/qtdparcelas
}
else if (condicaoPgto===4) {
    console.log("acrescimo de 10%")
    //console.log(aplicarJuros(precoProduto,10))
    precoFinal= aplicarJuros(precoProduto,10)
    parcela = precoFinal/qtdparcelas

}

if (condicaoPgto ===3 || condicaoPgto===4){
    console.log("A condicao de pagamento escolhida pelo cliente foi " + condicaoPgto + " , e o preco final sera R$ " + precoFinal.toFixed(2))
    console.log ("A quantidade de parcelas escolhida foi: " + qtdparcelas + ", ficando cada parcela = R$ " + parcela.toFixed(2))
} else{
    console.log ("Nao houve parcelamento.")
}
const botão = document.querySelector(".convert-button")
const selecionar = document.querySelector(".selecionar")
function conversão() {

    const dolar = document.querySelector(".conversão-currency").value
    const moedabr = document.querySelector(".currency-value-conversão")
    const moedaeua = document.querySelector(".currency-value")
    const dolarx = 3.7
    const eurox = 4.5
    const valordehj = dolar / dolarx
    const libra = 6.5
    const bitcointoday = 211.038

    moedabr.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
        dolar)




  if  (selecionar.value == 'americano') {

        moedaeua.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
            valordehj)
    }

    if (selecionar.value == 'europeu') {
        moedaeua.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
            dolar / eurox)
    }
    if (selecionar.value == 'libra') {
        moedaeua.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(
            dolar / libra)
    }
    if (selecionar.value == 'bitcoin') {
        moedaeua.innerHTML = new Intl.NumberFormat("BTC", { style: "currency", currency: "BTC" }).format(
            dolar / bitcointoday)
    }


}
        


function change() {
    const namecurrency = document.querySelector("#paragrafomestre")
    const img = document.querySelector(".img-eua")
    if (selecionar.value == 'americano') {
        namecurrency.innerHTML = 'dolar'
        img.src = "estados-unidos (1) 1.png"
    }
    if (selecionar.value == 'europeu') {
        namecurrency.innerHTML = 'euro'
        img.src = "Design sem nome 3 (1).png"
    }
    if (selecionar.value == 'libra') {
        namecurrency.innerHTML = 'libra'
        img.src = 'libra 1 (1).png'
    }
    if (selecionar.value == 'bitcoin') {
        namecurrency.innerHTML = 'bitcoin'
        img.src = 'bitcoin 1 (1).png'
    }

    conversão()

    selecionar.addEventListener("change", change)
    botão.addEventListener("click", conversão)

}

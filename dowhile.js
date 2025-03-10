function contador() { // "contador" os parêntes vazios significa que não tem parâmetro para ser enviado ou "coletado"
    const tempo = new Date(); // A variavel "tempo" somente leitura, a qual receberá o objeto "Date" do javascript
    let hora = tempo.getHours(); // A variavel "hora" temporaria, a qual receberá o retorno do método "getHours"
    console.log(hora) //mostrará o valor da variavel "hora" no console do navegador
    document.body.innerText = hora; // mostrara o valor da variavel "hora" no texto da tag "body"
}

window.setTimeout(contador, 1000) // executa apenas uma vez
//window.setInterval(contador, 1000) // executa infinitamente
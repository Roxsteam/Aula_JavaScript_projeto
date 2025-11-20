//Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
 
// A expressão regular abaixo vai procurar por qualquer caractere que não seja número (0-9), ou seja, letras e o + indica que pode ser um ou mais caracteres. O g é para procurar globalmente, ou seja, em toda a string.
const hasCharactersRegex = /\D+/g

// O replace vai pegar a expressão acima e vai procurar o padrão entre os valores do amount (input) Se encontrar, ele vai substituir por "" (nada)
amount.value = amount.value.replace(hasCharactersRegex, "")})

// Na etapa acima, o input está validado para receber somente números. Ocorre que, quando se digita uma letra, ela será substituida por nada através do replace, dando a impressão de que nada foi digitado. Desta forma, recebe-se somente números no input.


//Recuperando o valor selecionado pelo usuário.
// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault() 
// Switch para verificar qual moeda foi selecionada
switch(currency.value) {
case "USD": 
    convertCurrency(amount.value, USD, "US$")
    break
 case "EUR": 
    convertCurrency(amount.value, EUR, "€")
    break  
    
  case "GBP": 
    convertCurrency(amount.value, GBP, "£")
    break  
}
} 

// event.preventDefault() serve para evitar que o formulário seja enviado e a página recarregada. Desta forma, podemos manipular os dados do formulário com JavaScript sem que a página seja recarregada.

//Função para converter a moeda

function convertCurrency(amount, price, symbol){
  try {

    description.textContent = `${symbol} 1 = ${price}`
    
// Aplica a classe que exibe o footer para mostrar o resultado.    
footer.classList.add("show-result")
  }

  catch (error){
    
// Remove a classe do footer, retirando ele da tela.
footer.classList.remove("show-result")

console.log(error)
alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}
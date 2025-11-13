const amount = document.querySelector("#amount")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
 
// A expressão regular abaixo vai procurar por qualquer caractere que não seja número (0-9), ou seja, letras e o + indica que pode ser um ou mais caracteres. O g é para procurar globalmente, ou seja, em toda a string.
const hasCharactersRegex = /\D+/g

// O replace vai pegar a expressão acima e vai procurar o padrão entre os valores do amount (input) Se encontrar, ele vai substituir por "" (nada)
amount.value = amount.value.replace(hasCharactersRegex, "")})

// Na etapa acima, o input está validado para receber somente números. Ocorre que, quando se digita uma letra, ela será substituida por nada através do replace, dando a impressão de que nada foi digitado. Desta forma, recebe-se somente números no input.
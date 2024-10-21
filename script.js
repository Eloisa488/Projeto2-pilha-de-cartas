let deck = []
let option = true

while (option !== '3') {
    let menu = 'Quantidade de cartas no baralho: ' + deck.length + '\n\n'
    menu += 'Escolha uma opção:\n'
    menu += '1 - Adicionar uma carta\n'
    menu += '2 - Puxar uma carta\n'
    menu += '3 - Sair\n'

    option = prompt(menu)

    switch (option) {
        case '1':
            let newCard = prompt('Digite o nome da nova carta:')
            deck.push(newCard)  // Adiciona a carta no topo do baralho
      
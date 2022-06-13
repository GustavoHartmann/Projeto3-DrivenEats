function aparecerIcone(element, produto) {
    let check = document.querySelectorAll(`.${produto} .item-box .check`)
    for(let icon of check) {
        icon.classList.add('hidden')
    }
    const icon = element.children[4]
    icon.classList.remove('hidden')
}

let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;

function selecionarPrato(element) {
    const selected = document.querySelector('.prato .select')
    if(selected !== null) {
        selected.classList.remove('select')
    }
    element.classList.add('select')
    aparecerIcone(element, 'prato')    
}

function selecionarBebida(element) {
    const selected = document.querySelector('.bebida .select')
    if(selected !== null) {
        selected.classList.remove('select')
    }
    element.classList.add('select')
    aparecerIcone(element, 'bebida')
}

function selecionarSobremesa(element) {
    const selected = document.querySelector('.sobremesa .select')
    if(selected !== null) {
        selected.classList.remove('select')
    }
    element.classList.add('select')
    aparecerIcone(element, 'sobremesa')
}

function fecharPedido() {
    if(pratoSelecionado !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined) {
        const pedir = document.querySelector('.order')
        pedir.classList.add('activate-order')
        pedir.innerHTML = 'Fechar pedido'
    }
}
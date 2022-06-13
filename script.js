function selecionarPrato(element) {
    const selected = document.querySelector('.prato .select')
    if(selected !== null) {
        selected.classList.remove('select')
    }
    element.classList.add('select')

    let check = document.querySelector('.prato1 .check')
    if(check !== undefined) {
        check.classList.add('hidden')
    }
    check.classList.remove('hidden')
}

function selecionarBebida(element) {
    const selected = document.querySelector('.bebida .select')
    if(selected !== null) {
        selected.classList.remove('select')
    }
    element.classList.add('select')
}

function selecionarSobremesa(element) {
    const selected = document.querySelector('.sobremesa .select')
    if(selected !== null) {
        selected.classList.remove('select')
    }
    element.classList.add('select')
}
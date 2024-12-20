const iptDescricao = document.querySelector('#iptDescricao')
const iptUrl = document.querySelector('#iptUrl')
const btnSalvar = document.querySelector('#btnSalvar')
const listaDePaginas = document.querySelector('.pages-list')

let paginas = JSON.parse(localStorage.getItem('paginas')) || []

function atualizarPaginas() {
    localStorage.setItem('paginas', JSON.stringify(paginas))
}

btnSalvar.addEventListener('click', salvarPagina)

function salvarPagina(event) {
    const iconAddress = getIconAddress(iptUrl.value)

    const pagina = {
        descricao: iptDescricao.value,
        url: iptUrl.value,
        iconAddress: iconAddress
    }

    paginas.push(pagina)
    atualizarPaginas()
}

function criarPagina(pagina) {
    const page = document.createElement('div')
    page.classList.add('page')

    const pageCard = document.createElement('a')
    pageCard.href = pagina.url
    pageCard.classList.add('page__card')
    pageCard.target = '_blank'

    const pageCardImage = document.createElement('img')
    pageCardImage.src = `${pagina.iconAddress}`
    pageCardImage.classList.add('page__card__image')

    const pageCardDescription = document.createElement('p')
    pageCardDescription.textContent = pagina.descricao
    pageCardDescription.classList.add('page__card__description')

    pageCard.appendChild(pageCardImage)
    pageCard.appendChild(pageCardDescription)
    page.appendChild(pageCard)

    
    listaDePaginas.appendChild(page)
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarPaginas()
})

function renderizarPaginas() {
    paginas.forEach(pagina => {
        criarPagina(pagina)
    })
}

function getIconAddress(inputUrl) {
    const iconAddress = `https://www.google.com/s2/favicons?sz=64&domain=${inputUrl}`
    return iconAddress
}
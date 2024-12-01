const iptDescricao = document.querySelector('#iptDescricao')
const iptUrl = document.querySelector('#iptUrl')
const btnSalvar = document.querySelector('#btnSalvar')
const listaDePaginas = document.querySelector('.pages-list')

let paginas = []

btnSalvar.addEventListener('click', salvarPagina)

function salvarPagina(event) {
    event.preventDefault()

    const pagina = {
        descricao: iptDescricao.value,
        url: iptUrl.value
    }

    criarPagina(pagina)

}

function criarPagina(pagina) {
    const page = document.createElement('div')
    page.classList.add('page')

    const pageCard = document.createElement('a')
    pageCard.href = pagina.url
    pageCard.classList.add('page__card')
    pageCard.target = '_blank'

    const pageCardImage = document.createElement('img')
    pageCardImage.src = './assets/page.png'
    pageCardImage.classList.add('page__card__image')

    const pageCardDescription = document.createElement('p')
    pageCardDescription.textContent = pagina.descricao
    pageCardDescription.classList.add('page__card__description')

    pageCard.appendChild(pageCardImage)
    pageCard.appendChild(pageCardDescription)
    page.appendChild(pageCard)

    
    listaDePaginas.appendChild(page)
}
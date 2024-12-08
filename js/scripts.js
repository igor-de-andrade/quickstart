const iptDescricao = document.querySelector('#iptDescricao')
const iptUrl = document.querySelector('#iptUrl')
const btnSalvar = document.querySelector('#btnSalvar')
const listaDePaginas = document.querySelector('.pages-list')
const btnDropdown = document.querySelector('.page__dropdown__button')
const btnDropdownMenu = document.querySelector('.page__dropdown__menu')
const btnEdit = document.querySelector('#button-edit')
const btnDelete = document.querySelector('#button-delete')


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

    const pageDropdown = document.createElement('div')
    pageDropdown.classList.add('page__dropdown')

    const pageDropdownButton = document.createElement('button')
    pageDropdownButton.classList.add('page__dropdown__button')
    pageDropdownButton.textContent = '...'
    
    const pageDropdownMenu = document.createElement('div')
    pageDropdownMenu.classList.add('page__dropdown__menu')
    pageDropdownMenu.style.display = 'none'

    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('page__dropdown__option')
    buttonEdit.id = 'button-edit'
    buttonEdit.textContent = 'Editar'
    buttonEdit.addEventListener('click', editPage)

    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('page__dropdown__option')
    buttonDelete.id = 'button-delete'
    buttonDelete.textContent = 'Excluir'
    buttonDelete.addEventListener('click', deletePage)

    pageDropdownMenu.appendChild(buttonEdit)
    pageDropdownMenu.appendChild(buttonDelete)
    pageDropdown.appendChild(pageDropdownButton)
    pageDropdown.appendChild(pageDropdownMenu)
    page.appendChild(pageDropdown)

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

    pageDropdownButton.addEventListener('click', () => {
        showOrHideDropdownOptions(pageDropdownMenu)
    })
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

function showOrHideDropdownOptions(element) {
    if (element.style.display != 'block') {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }
}

function editPage() {
    alert('Deseja editar?')
}

function deletePage() {
    alert('Deseja excluir?')
}









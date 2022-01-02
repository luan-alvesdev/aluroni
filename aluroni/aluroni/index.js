const botaoMenu = document.querySelector('.botao-menu-hamburguer')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})



// const botaoFechar = document.querySelector('.menu-lateral__fechar')
// const menuAtivo = document.querySelector('.menu-lateral--ativo')

// botaoFechar.addEventListener('click', () => {
//     menuAtivo.classList.toggle('menu-lateral')
// })

// const botaoMenu = document.querySelector('.botao-menu-hamburguer')
// const menu = document.querySelector('.menu-lateral')

// botaoMenu.addEventListener('click', () => {
//     menu.classList.toggle('menu-lateral--ativo')
// })

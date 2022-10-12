const hamburger = document.querySelector('.hamburger')
const hamburgerImg = document.querySelector('#hamburger-img')
const headerMenu = document.querySelector('header nav ul')
const cartBlock = document.querySelector('.cart__list-block')
const cart = document.querySelector('#basket')
const deleteItem = document.querySelector('#delete')
const checkout = document.querySelector('.cart__list-button')
const basketContainer = document.querySelector('.cart__list-container')

hamburger.onclick = () => {
   hamburgerImg.src =
   hamburgerImg.getAttribute('src') == './images/icon-menu.svg' ? './images/icon-close.svg' : './images/icon-menu.svg'
   headerMenu.classList.toggle("active")
   // document.querySelector('#logo').classList.toggle('active')
   document.querySelector('.wrapper').classList.toggle('active')
}

cart.onclick = () => {
   if(basketContainer.children.length !== 0) cartBlock.classList.toggle("active")
}

deleteItem.onclick = () => {
   basketContainer.removeChild(deleteItem.parentElement)
   if(basketContainer.children.length === 1) basketContainer.removeChild(checkout)
   if(basketContainer.children.length === 0) cartBlock.classList.remove("active")
}
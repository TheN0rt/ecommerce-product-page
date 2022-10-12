const hamburger = document.querySelector('.hamburger')
const hamburgerImg = document.querySelector('#hamburger-img')
const headerMenu = document.querySelector('header nav ul')
const cartBlock = document.querySelector('.cart__list-block')
const cart = document.querySelector('#basket')
const checkout = document.querySelector('.cart__list-button')
const basketContainer = document.querySelector('.cart__list-container')
const addCart = document.querySelector('.product__add')
const minus = document.querySelector('.product__minus')
const plus = document.querySelector('.product__plus')
const countOfProduct = document.querySelector('.product__counter-count')
const imgMain = document.querySelectorAll('main .img-block img')

// mobile-menu

hamburger.onclick = () => {
   hamburgerImg.src =
   hamburgerImg.getAttribute('src') == './images/icon-menu.svg' ? './images/icon-close.svg' : './images/icon-menu.svg'
   headerMenu.classList.toggle("active")
   document.querySelector('.wrapper').classList.toggle('active')
}

// cart 

cart.onclick = () => {
   if(basketContainer.children.length !== 1) cartBlock.classList.toggle("active")
}   

addCart.onclick = () => {
   if(Number.parseInt(countOfProduct.textContent) === 0) return
   let div = document.createElement('div')
   div.innerHTML = `<div class="cart__list-img-block">
   <img src="./images/image-product-1-thumbnail.jpg" alt="img product">
 </div>
 <div class="cart__list-info-block">
   <p class="cart__list-title">${document.querySelector('.product__title').textContent}</p>
   <p class="cart__list-price">${document.querySelector('.product__price').textContent} x <span class="cart__list-count">${countOfProduct.textContent} </span><span class="cart__list-sum-price">  $${125 * Number.parseInt(countOfProduct.textContent)}</span></p>
 </div>
 <img src="./images/icon-delete.svg" alt="delete icon" id="delete">`
 div.classList.add("cart__list-info")
 document.querySelector('.backet-count').style.display = "flex"
 

 if(basketContainer.children.length === 1){
   basketContainer.insertBefore(div, document.querySelector('.cart__list-button')),
      document.querySelector('.backet-count').textContent = basketContainer.children.length - 1
 }
   else{
      if(basketContainer.children[0].children[1].children[0].textContent === document.querySelector('.product__title').textContent){
         document.querySelector('.cart__list-sum-price').textContent = `$${Number.parseInt(document.querySelector('.cart__list-sum-price').textContent.replace('$', '')) + 125 * Number.parseInt(countOfProduct.textContent)}`
         //+ 125 * Number.parseInt(countOfProduct.textContent)
         document.querySelector('.cart__list-count').textContent = Number.parseInt(document.querySelector('.cart__list-count').textContent) + Number.parseInt(countOfProduct.textContent) + ' '
         document.querySelector('.backet-count').textContent = basketContainer.children.length - 1
       }
       
       else{
         basketContainer.insertBefore(div, document.querySelector('.cart__list-button'))
       }
   }

   document.querySelectorAll('#delete').forEach(elem => {
      elem.onclick = () => {
         basketContainer.removeChild(elem.parentElement)
         if(basketContainer.children.length === 1) {
            cartBlock.classList.remove("active")
            document.querySelector('.backet-count').style.display = "none"
         }
   }
   })
}

minus.onclick = () => {
   countOfProduct.textContent =
   Number.parseInt(countOfProduct.textContent) === 0 ? '0' : Number.parseInt(countOfProduct.textContent) -1 
}

plus.onclick = () => {
   countOfProduct.textContent = Number.parseInt(countOfProduct.textContent) +1
}

let activeImgMain = 1;

imgMain.forEach((elem, i) => {
   elem.onclick = () => {
      document.querySelector('#main-img').src = imgMain[i].src
      imgMain[activeImgMain].classList.remove("active")
      activeImgMain = i
      imgMain[activeImgMain].classList.add("active")
   }
})


// popup

const images = document.querySelectorAll('.popup__container .img-block .img__slider-block img')
const leftArrow = document.querySelector('.arrow:first-child')
const rightArrow = document.querySelector('.arrow:nth-child(3)')
const closeIcon = document.querySelector('.img-block p')
let active = 0
console.log(leftArrow)
console.log(rightArrow)
console.log(images)

rightArrow.onclick = () => {
   images[active].classList.remove("active")
   active + 1 == images.length ? active=0 : active++
   images[active].classList.add("active")
   // document.querySelector("#main-img").src = images[active].src
   document.querySelector("#popup-main-img").src = images[active].src
}
leftArrow.onclick = () => {
   images[active].classList.remove("active")
   active - 1 < 0 ? active = images.length - 1 : active--
   images[active].classList.add("active")
   // document.querySelector("#main-img").src = images[active].src
   document.querySelector("#popup-main-img").src = images[active].src
}

images.forEach((img, i) => {
   img.onclick = () => {
      // document.querySelector("#main-img").src = img.src
      document.querySelector("#popup-main-img").src = img.src
      images[active].classList.remove("active")
      active = i
      images[active].classList.add("active")
   }
})

closeIcon.onclick = () => {
   document.querySelector('.popup').style.display = "none"
}

// popup open 

document.querySelector('#main-img').onclick = () => {
   document.querySelector('.popup').style.display = "block"
}
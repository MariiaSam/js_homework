const selectors = {
container: document.querySelector('.js-list'),
totalPrice: document.querySelector('.js-total-price'),
clearBtn: document.querySelector('.js-clear')
}


const PRODUCT_LS_KEY = 'checkout';

const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];//отримали список товарів, які додали на головній сторінці
 
function createMarkup(arr) {
    return arr
      .map(
            ({ img, name, qty, price }) => 
            ` <li class="card-item">
        <img src="${img}" alt="${name}" class="product-img">
        <h2>${name}</h2>
        <p>Quantity: ${qty}</p>
        <p>Total price: ${qty * price}</p>
          </li>`
        )
        .join('');
  }
  
  if (products.length) {
    const totalCost = products.reduce((acc, {qty, price} ) => acc + qty * price, 0)
    selectors.totalPrice.textContent = `Total price ${totalCost} грн`;
   
        selectors.clearBtn.hidden = false
        selectors.clearBtn.addEventListener('click', handlerClearBasket); 
        selectors.container.insertAdjacentHTML('beforeend', createMarkup(products))

} else{
    selectors.totalPrice.textContent = 'Your basket is empty'

}


function handlerClearBasket() {
        localStorage.removeItem(PRODUCT_LS_KEY)
        window.location.href = './index.html'
}
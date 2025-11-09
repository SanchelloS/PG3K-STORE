
const basketWrapper = document.querySelector(".cart__products");

function updateView() {
  const allProducts = getBasketItems().map((id) => {
    return getProductInfo(id);
  });

  
  const allProductsHTML = allProducts.map((product) => {
    return toCartHTML(product.name, product.cost, product.photoUrl, product.id);
  });

  basketWrapper.innerHTML = allProductsHTML.join("");

  console.log('is called')
}

updateView();

function toCartHTML(name, cost, photoUrl, id) {

  return `
    <div class="cart__product">
    <a href="product.html?productId=${id}">
      <img class="cart__product__image" src="${photoUrl}" />
    </a>
      <div class="cart__product__info">
        <div>
          <p>${name}</p>
          <span class="cart__product__info_price">${cost} р.</span>
        </div>

        <a href=""><img src="" alt="" /></a>
      </div>
      <div class="remove__button">
       <a onclick="removeFromBasket(${id})">X</a>
       </div>
  </div>
  `;
}

updateBasketCountView();


const products = JSON.parse(localStorage.getItem("products"));

console.log(products);


const productsRecommend = document.querySelector(
  ".products__recommend .products"
); 

const productsFavorite = document.querySelector(
  ".products__favorites .products"
); 
const productsOfRecommend = products.filter((product) => product.isRecommended); 
const productsOfFavorite = products.filter((product) => product.isFavorites);

const productsRecommendHTML = productsOfRecommend.map((product) => {
  return toRecommendHTML(
    product.name,
    product.cost,
    product.photoUrl,
    product.id
  );
});

const productsFavoriteHTML = productsOfFavorite.map((product) => {
  return toFavoriteHTML(
    product.name,
    product.cost,
    product.photoUrl,
    product.id
  );
});

productsRecommend.innerHTML = productsRecommendHTML.join("");

function toRecommendHTML(name, cost, photoUrl, id) {
  return `
    <div class="product">
    <a href="product.html?productId=${id}">
      <img class="product__image" src="${photoUrl}" />
    </a>
      <div class="product__info">
        <div>
          <p>${name}</p>
          <span class="product__info_price">${cost} р.</span>
        </div>

        <a href=""><img src="" alt="" /></a>
        <a href="cart.html"><img src="img/icon_buy.png" alt="" /></a>
      </div>
  </div>
  `;
}


console.log(productsFavorite); 
productsFavorite.innerHTML = productsFavoriteHTML.join("");

function toFavoriteHTML(name, cost, photoUrl, id) {
  return `
    <div class="product">
    <a href="product.html?productId=${id}">
      <img class="product__image" src="${photoUrl}" />
    </a>
      <div class="product__info">
        <div>
          <p>${name}</p>
          <span class="product__info_price">${cost} р.</span>
        </div>

        <a href=""><img src="" alt="" /></a>
        <a href="cart.html"><img src="img/icon_buy.png" alt="" /></a>
      </div>
  </div>
  `;
}

updateBasketCountView();
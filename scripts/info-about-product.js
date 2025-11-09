const detailProduct = document.querySelector(".middle__product .container");

function getQueryParameters(str) {
  return (str || document.location.search)
    .replace(/(^\?)/, "")
    .split("&")
    .map(
      function (n) {
        return (n = n.split("=")), (this[n[0]] = n[1]), this;
      }.bind({})
    )[0];
}

const queryParams = getQueryParameters();

function loadProduct() {
  const productId = Number(queryParams.productId);
  const currentProduct = getProductInfo(productId);

  showProduct(currentProduct);
}

loadProduct();

function showProduct(product) {
  const html = toDetailProductHTML(product);
  detailProduct.innerHTML = html;

  console.log(detailProduct);
}

function toDetailProductHTML(product) {
  console.log(product);

  return `
        <div class="middle__wrapper">
        <div class="middle__images-wrapper">
          <div>
            <!-- IMAGES -->
            <div>
              <div class="middle__image-mini">
                <img src="${product.photoUrl}" alt="" />
              </div>
            </div>
            <div class="middle__image-mini">
              <img src="${product.photoUrl1}" alt="" />
            </div>
            <div class="middle__image-mini">
              <img src="${product.photoUrl_second}" alt="" />
            </div>
          </div>
          <!-- <div> -->
          <div class="middle__image-gen">
            <img src="${product.photoUrl}" alt="" />
          </div>
          <!-- </div> -->
        </div>
  
        <div class="middle__product-info">
          <div class="product__name">${product.name}</div>
          <div class="product__price">${product.cost} р.</div>
          <div class="cart__navigation">
            <a style="cursor:pointer;" onclick="addToBasket(${product.id})">
              <img src="img/icon_cart.png" alt="" />
              В корзину
            </a>
          </div>
  
          <div class="description">
            <div class="product__description">
              <div class="description__title">
                <h3>Описание:</h3>
                ${product.description}
              </div>
            </div>
            <div class="product__parameters">
              <div class="parameters__title">
                <h3>Характеристики:</h3>
                ${product.parameters}
              </div>
            </div>
          </div>
        </div>
      </div>`;
}


updateBasketCountView();
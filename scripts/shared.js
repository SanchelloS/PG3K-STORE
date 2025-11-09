function getProductInfo(productId) {
  const products = JSON.parse(localStorage.getItem("products"));
  const currentProduct = products.find((product) => product.id === productId);

  return currentProduct;
}

function getBasketItems() {
  const items = JSON.parse(localStorage.getItem("basketItems")) || [];

  return items;
}



const basketCountTemplate = document.querySelector(".navigation__basket");

function updateBasketCountView() {
  const count = getBasketItemsCount();

  basketCountTemplate.innerHTML = `КОРЗИНА (${count})`;
}


function getBasketItemsCount() {
  const items = JSON.parse(localStorage.getItem("basketItems")) || [];

  return items.length;
}

addToBasket = (productId) => {
    const items = JSON.parse(localStorage.getItem("basketItems")) || [];
  
    if (items.includes(productId)) {
      alert("Товар уже в корзине");
      return;
    }
  
    const newBasket = JSON.stringify([...items, productId]);
    localStorage.setItem("basketItems", newBasket);

    updateBasketCountView();
    alert("Товар добавлен в корзину");
  };

removeFromBasket = (productId) => {
  const items = JSON.parse(localStorage.getItem("basketItems")) || [];
  const itemsAfterRemoved = items.filter(item => item != productId);
  const basketItemsAsJSON = JSON.stringify(itemsAfterRemoved)

  localStorage.setItem("basketItems",basketItemsAsJSON);

  updateView();
  updateBasketCountView();
}

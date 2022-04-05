const addToCart = (img, title, category, price, details, id) => {
  const carts = JSON.parse(localStorage.getItem('carts')) || [];
  carts.push({
    id, img, title, category, price, details,
  });
  localStorage.setItem('carts', JSON.stringify(carts));
};
export default addToCart;

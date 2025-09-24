/**
 * ? 1. to get something from the local store you or i will get the data as the string
 * ? 2. Convert this String into a file formate
 */

// const getCartFromLocalStorage = () => {
//   const storedCartString = localStorage.getItem("cart");

//   //   if (storedCartString) {
//   //     const storedCart = JSON.parse(storedCartString);
//   //     return storedCart;
//   //   }

//   const storedCart = storedCartString ? JSON.parse(storedCartString) : [];
//   return storedCart;
// };

// const AddItemToLocalStorage = (id) => {
//   const cart = getCartFromLocalStorage();
//   const newCart = [...cart, id];
//   //   cart.push(id);
//   saveCartToLocalStorage(newCart);
// };

// const saveCartToLocalStorage = (cart) => {
//   const cartStringify = JSON.stringify(cart);
//   localStorage.setItem("cart", cartStringify);
// };

// export {
//   getCartFromLocalStorage as getStored,
//   AddItemToLocalStorage as addToStored,
// };

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  return storedCartString ? JSON.parse(storedCartString) : [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const addItemToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = cart.includes(id) ? cart : [...cart, id];
  saveCartToLocalStorage(newCart);
};

const removeItemFromLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = cart.filter((cartId) => cartId !== id);
  saveCartToLocalStorage(newCart);
};

export {
  getCartFromLocalStorage as getStored,
  addItemToLocalStorage as addToStored,
  removeItemFromLocalStorage as removeFromStored,
};

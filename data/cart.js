export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 4,
  },
];

export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    // this is to check if the product we are adding already exist
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  // if the product already exist increase the quantity
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}

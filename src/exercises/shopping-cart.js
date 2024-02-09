/*
* Shopping Cart Requirements:
* - Before you start, please run `npm run start:api` to start mock API server
* - data for mock APIs come from ./db/db.json
* - There are 2 APIs you need to call:
*     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
*     - http://localhost:4002/products : this will provide a list of products with full details
*
* We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
* product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
* inside table#shopping-cart-tbl as below:
* ID     Item
* 1001   TV
* 1002   iPad
*
* */
const View = {
  init: async () => {
    const tbodyElem = document.getElementById('shopping-cart-tbl').querySelector('tbody');
    const cartR = await fetch('http://localhost:4002/cart');
    const cartD = await cartR.json();
    //console.log(cartD);
    //debugger;
    const productsR = await fetch('http://localhost:4002/products');
    const productsD = await productsR.json();
    // console.log(productsD); 
    const productMapping = new Map(productsD.map(product => [product.id, product.name]));
  console.log(productMapping);
  cartD.forEach(productId => {
     // console.log(productId);
      const productName = productMapping.get(productId.id);
            //console.log(productName);
      const row = tbodyElem.insertRow();
     // debugger;
      const c1 = row.insertCell(0);
      const c2 = row.insertCell(1);
      c1.textContent = productId.id;
      c2.textContent = productName;
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);




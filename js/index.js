// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const quantity = product.querySelector('.quantity input');
  const price = product.querySelector('.price span');
  const subtotal = product.querySelector('.subtotal span');
  
  const priceValue = price.textContent;
  const quantityValue = quantity.value;

  const total = priceValue * quantityValue;

  subtotal.textContent= total;

  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const allProducts = document.getElementsByClassName('product');

  // let total = 0;
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  allProducts.forEach(element => {
      updateSubtotal(element);
      total += Number(element.querySelector('.subtotal span').textContent);
      console.log(element.querySelector('.subtotal span').textContent);
  });

  console.log(total);


  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span")
  total.innerHTML = totalSum
}


// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  event.remove();
}


// ITERATION 5

function createProduct() {
  //... your code goes here
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

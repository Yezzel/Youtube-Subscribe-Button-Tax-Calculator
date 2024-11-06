function clickEnter () {
  if(event.key === 'Enter') {
      calculateTax();
}


}

function calculateTax() {
  const taxCalculator = document.querySelector('.js-taxcalculator');

  let cost = Number(taxCalculator.value);
  

  if(cost < 4000000) {
    cost = cost * 0.1

  }
  document.querySelector('.js-total-tax')
   .innerHTML = `$${cost}`
  
  }


function Subscribe () {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerHTML === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-Subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-Subscribed');
  }
}




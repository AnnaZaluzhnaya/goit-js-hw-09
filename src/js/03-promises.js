import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formInput = document.querySelector('.form');
formInput.addEventListener('submit', getNewPromise);

function getNewPromise(event) {
  event.preventDefault();

  let stepValue = Number(event.currentTarget.step.value);
  let amountValue = Number(event.currentTarget.amount.value);
  let delayValue = Number(event.currentTarget.delay.value);
  
  for (let position = 1; position <= amountValue; position += 1) {
    delayValue  += stepValue ;
    createPromise(position, delayValue)
      .then(success => Notify.success(`✅ Fulfilled promise ${position} in ${delayValue}ms`))
      .catch(error => Notify.failure(`❌ Rejected promise ${position} in ${delayValue}ms`));
  }
};
  
  
function createPromise(position, delayValue) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delayValue });
        } else {
          reject({ position, delayValue });
        }
      }, delayValue);
    } )
};

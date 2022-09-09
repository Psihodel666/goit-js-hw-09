import Notiflix from 'notiflix';

const refs = {
  form : document.querySelector('form'),
  button : document.querySelector('button'),
  firstStep : document.querySelector('[name = delay]'),
  step : document.querySelector('[name = step]'),
  amount : document.querySelector('[name = amount]')
}



refs.button.addEventListener('click',onSubmit);



function onSubmit(eve) {
  eve.preventDefault();
  const firstStep = Number(refs.firstStep.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);
  let delay = firstStep;
  
  for (let position = 1; position <= amount; position += 1) {
    
    createPromise(position, delay)
      .then(({ position, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
    delay += step;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) => {
    
    setTimeout (() => {
        if (shouldResolve) {
            resolve({position, delay})
        }
        else {
            reject({position, delay});
        }
    }, delay);
  });
};



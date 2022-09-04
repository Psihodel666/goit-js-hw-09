import Notiflix from 'notiflix';

const refs = {
  form : document.querySelector('form'),
  button : document.querySelector('button'),
  deleyInput : document.querySelector('[name = delay]'),
  step : document.querySelector('[name = step]'),
  amount : document.querySelector('[name = amount]')
}



refs.button.addEventListener('click',onSubmit);



function onSubmit(e){
  e.preventDefault();
  const deleyInput = refs.deleyInput.value;
  const step = refs.step.value;
  const amount = refs.amount.value;
  let delay = 0;

  for(let i = 1; i <= amount; i++){
    const position = i;

    if((i === 1)){
      delay += deleyInput;
    }else{
      delay += step;
    }
   
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });

  }

}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(shouldResolve){
        resolve({position,delay});
      }else{
        reject({position, delay});
      }
    }, delay)
  })
  return promise;
}



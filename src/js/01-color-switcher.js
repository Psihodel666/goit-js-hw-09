import throttle from 'lodash.throttle';



  const refs = {
    btnStart : document.querySelector('button[data-start]'),
    btnStop : document.querySelector('button[data-stop]'),
    body : document.querySelector('body')
  }
  

  refs.btnStart.addEventListener('click', throttle(start,1000));
  refs.btnStop.addEventListener('click', stop);
  refs.btnStop.setAttribute('disabled', true)



  function start(){
   refs.btnStart.setAttribute('disabled', true);
   refs.btnStop.removeAttribute('disabled')

    colorBody = setInterval(() => {
      refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }, 1000);
  }

  
  function stop(){
    refs.btnStart.removeAttribute('disabled');
    clearInterval(colorBody);
    refs.btnStop.setAttribute('disabled', true)
  }
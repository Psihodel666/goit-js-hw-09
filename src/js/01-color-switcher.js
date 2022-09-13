import throttle from 'lodash.throttle';



  const refs = {
    btnStart : document.querySelector('button[data-start]'),
    btnStop : document.querySelector('button[data-stop]'),
    body : document.querySelector('body')
  }

  let isActive = false;
  

  refs.btnStart.addEventListener('click', throttle(start,1000));
  refs.btnStop.addEventListener('click', stop);
  refs.btnStop.setAttribute('disabled', true)

  function getRandomHexColor() {
    return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   
  }

  function start(){
    isActive = false;
   refs.btnStart.setAttribute('disabled', true);
   refs.btnStop.removeAttribute('disabled')
   
      colorBodyInterval = setInterval(() =>{
        if(isActive === true){
          clearInterval(colorBody)  
          return;
        }
        
        const randomColor =  getRandomHexColor();
        document.body.style.background = randomColor;
      },  1000);
  }

  
  function stop(){
    refs.btnStart.removeAttribute('disabled');
    clearInterval(colorBodyInterval);
    refs.btnStop.setAttribute('disabled', true)
    isActive = false;
    console.log(isActive)
  }
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      
      if(selectedDates[0] <= Date.now()){
        Notiflix.Notify.warning("Please choose a date in the future")
        
        refs.btn.setAttribute('disabled', 'disabled')
        refs.days.textContent = "00";
        refs.hours.textContent = "00";
        refs.minutes.textContent = "00";
        refs.seconds.textContent = "00";
      }else{
        refs.btn.removeAttribute('disabled', 'disabled')

        const result = selectedDates[0] - Date.now();
         convertMs(result);
         selectedDatess.result = selectedDates[0].getTime();
      }
     
    },
  };
  


  const refs = {
    input : document.querySelector('#datetime-picker'),
    btn : document.querySelector('button[data-start]'),
    days : document.querySelector('span[data-days]'),
    hours : document.querySelector('span[data-hours]'),
    minutes : document.querySelector('span[data-minutes]'),
    seconds : document.querySelector('span[data-seconds]'),
    timerWrap : document.querySelector('.timer'),
    field : document.querySelectorAll('.field'),
    firsField : document.querySelector('.field'),  
    number : document.querySelectorAll('.value')
  }
  const selectedDatess = {};



  refs.btn.setAttribute('disabled', 'disabled')
  flatpickr(refs.input, options);
  refs.btn.addEventListener('click',() =>{
    timerId = setInterval(() => {
    const ms = selectedDatess.result - Date.now();
    convertMs(ms);
  },1000)

  
  refs.btn.setAttribute('disabled', 'disabled')})
 


  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    if(days < 10){
      refs.days.textContent = `0${days}`;
    }else{
      refs.days.textContent = days;
    }
    

    if(hours < 10){
      refs.hours.textContent = `0${hours}`;
      }else{
      refs.hours.textContent = hours;
      }
    
    if(minutes < 10){
      refs.minutes.textContent = `0${minutes}`
      }else{
      refs.minutes.textContent = minutes;
      }
    
    if(seconds < 10){
      refs.seconds.textContent = `0${seconds}`
      }else{
      refs.seconds.textContent = seconds;
      }
    


    return console.log({ days, hours, minutes, seconds });
  }


console.log(refs.div)

refs.timerWrap.style.display = "flex";
refs.timerWrap.style.textAlign = 'center'

refs.field.forEach(el => {
  el.style.display = 'flex'
  el.style.flexDirection = "column";
  el.style.marginLeft = '10px'
})
refs.firsField.style.marginLeft = '0'

refs.number.forEach(el => {
  el.style.fontSize = '24px'
  el.style.fontWeight = '600'
})

  

console.log(refs.field)

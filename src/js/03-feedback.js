import throttle from 'lodash.throttle';


const refs = {
    input : document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    form: document.querySelector(".feedback-form"),
}




refs.form.addEventListener('input', throttle(onForm, 500));
refs.form.addEventListener('submit', onFormSubmite);



function onForm(e){
    const elementForm = e.target.form.elements;
    const formValue = {emeil:elementForm.email.value,
                        messege:elementForm.message.value,}
    

    localStorage.setItem("feedback-form-state", JSON.stringify(formValue))
}
function onFormSubmite(e){
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.removeItem("feedback-form-state");  
    refs.form.reset();
}

// function textInForm(){
//     const saveText = JSON.parse(localStorage.getItem("feedback-form-state"));
    
//     const emeil = refs.input.value;
//     const message = refs.textarea.value;
//     if(emeil != undefined){
//         refs.input.value = saveText.emeil;
//     }
//     if(message != undefined){
//         refs.textarea.value = saveText.messege;
//     }
    
// }
// textInForm();
// refs.form.value = JSON.parse(localStorage.getItem("feedback-form-state"))
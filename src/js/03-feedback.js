import throttle from 'lodash.throttle';


const refs = {
    input : document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    form: document.querySelector(".feedback-form"),
}


refs.form.addEventListener('input',throttle(onForm, 500));
refs.form.addEventListener('submit', onFormSubmite);



function onForm(e){
    const elementForm = e.target.form.elements;
    const emeil = elementForm.email.value;
    const messege = elementForm.message.value;
    // console.log(messege)
    // console.log(emeil)
    const formValue = {emeil,messege }
    // console.log(formValue)
    localStorage.setItem("feedback-form-state", JSON.stringify(formValue))
    
}
function onFormSubmite(e){
    e.preventDefault();
    localStorage.removeItem("feedback-form-state");
    refs.form.reset();
}

function textInForm(){
    const saveText = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(saveText)
    console.log(refs.input.value)
    const emeil = refs.input.value;
    const message = refs.textarea.value;
    if(emeil != undefined){
        refs.input.value = saveText.emeil;
    }
    if(message != undefined){
        refs.textarea.value = saveText.messege;
    }
}
textInForm();

const formvalidate=()=>{
    let emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordformat = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/;

    let email = document.getElementById('email');
    let password=document.getElementById('password');
    let emailerr=document.getElementById('emailerr');
    let pwerr=document.getElementById('pwerr');
    
    if(email.value == ""){
        emailerr.innerHTML='please enter email address';
        emailerr.style.color='red';
        email.style.border='2px solid red';
        return false;
    }

else if(!email.value.match(emailformat)){
    emailerr.innerHTML='please enter valid email address';
        emailErr.style.color='red';
        email.style.border='2px solid red';
        return false;

}
else{
    emailerr.innerHTML='';
    email.style.border='2px solid black';
}

if(password.value == ""){
    pwerr.innerHTML='please enter password';
    pwerr.style.color='red';
    password.style.border='2px solid red';
    return false;
}

else if(!password.value.match(passwordformat)){
pwerr.innerHTML='please enter valid password';
    pwerr.style.color='red';
    password.style.border='2px solid red';
    return false;

}
else{
pwerr.innerHTML='';
password.style.border='2px solid black';
}

}   
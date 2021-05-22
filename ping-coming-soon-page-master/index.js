function validate(){
    let myemail=document.getElementById("email");
    let emailcomp=document.getElementById("email-comp");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(myemail.value.match(validRegex))
    {
        
        if(emailcomp.classList.contains("error"))
        {
            emailcomp.classList.remove("error");
        }
        email.style.border='1px solid #4f7df399';
    }
    else{
        emailcomp.classList.add("error");
        email.style.border='1px solid #ff5263';
    }
}
const alphabetRegExp = /^[a-zA-Z]+$/;

const  emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const alphabetChecker =  (input) =>  alphabetRegExp.test(input);

const emailChecker =  (input) =>  emailRegExp.test(input);


const validateAlphabet = (input_id, error_name) =>  {
    let input_value = document.getElementById(input_id).value;
    if(input_value.length > 3){
    if(!alphabetChecker(input_value)){
    document.getElementById(error_name).textContent="Please only alphabets are allowed!";
    }else{
        document.getElementById(error_name).textContent="";
        isValid();
    }
    }
}



const validateEmail = (input_id, error_name) => {
    let input_value = document.getElementById(input_id).value;
    if(input_value.length > 3){
    if(!emailChecker(input_value)){
        document.getElementById(error_name).textContent="Please provide a valid email address";
    }else{
        document.getElementById(error_name).textContent="";  
        isValid();
    }    
}
}

const chkPasswordLength = (input_id, error_name) => {
    let input_value = document.getElementById(input_id).value;
    if(input_value.length < 8){
        document.getElementById(error_name).textContent="Password should be 8 character long!";
    }else{
        document.getElementById(error_name).textContent="";
        isValid();
    }
}

const chkPasswordMatch = (input_id, error_name) => {
    let pword = document.getElementById("pword").value;
    let cword = document.getElementById(input_id).value;
    if (pword != cword) {
        document.getElementById(error_name).textContent="Passwords do not match";
    }else{
        document.getElementById(error_name).textContent="";
        isValid();
    }
}


const isValid = () => {
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let pword = document.getElementById("pword").value;
    let cword = document.getElementById("cword").value;
    const sign_up = document.getElementById("sign-up");
    if(!alphabetChecker(first_name)){
        sign_up.disabled = true;
        sign_up.style.cursor="none";
        return false
    }
    if(!alphabetChecker(last_name)){
        sign_up.disabled = true;
        sign_up.style.cursor="none";
        return false
    }
    if(!emailChecker(email)){
        sign_up.disabled = true;
        sign_up.style.cursor="none";
        return false
    }
    if(pword.length < 8){
        sign_up.disabled = true;
        sign_up.style.cursor="none";
        return false
    }
    if(pword != cword){
        sign_up.disabled = true;
        sign_up.style.cursor="none";
        return false
    }
    sign_up.disabled = false;
    sign_up.style.cursor="pointer";

}

const handleFormSubmit = () => {
    document.getElementById('sign-up').style.display = "none";
    document.getElementById('loader').style.display = "block";
    setTimeout(function() {
      document.getElementById('loader').style.display = "none";
      document.getElementById('sign-up').style.display = "block";
    }, 2000);
     
  }


  const validateLogin = () => {

    let email = document.getElementById("email-login").value;
    let pword = document.getElementById("pword-login").value;
    const login = document.getElementById("login");
    if(email == '' && pword == ''){
        sign_up.disabled = true;
        sign_up.style.cursor="none";
        return false;
    }

    sign_up.disabled = false;
    sign_up.style.cursor="pointer";

  }
const trimAlphabet = (input) => {
    return input.search(/[a-zA-Z]/g);
}

const chk_email = (input_email) => {

}


const chk_password = (password, confirm_password) => {
    
}



const form_validate = () => {
    let first_name = document.forms["signUpForm"]["first-name"].value;
    let last_name = document.forms["signUpForm"]["last-name"].value;
    let email = document.forms["signUpForm"]["email"].value;
    let pword = document.forms["signUpForm"]["pword"].value;
    let cword = document.forms["signUpForm"]["cword"].value;

    if( trim(first_name)) {
        document.getElementById("first-name-error").textContent="Please provide the first name with valid letter characters";
        document.forms.signUpForm.first_name.focus() ;
        return false;
     }


     if( trim(last_name)) {
        document.getElementById("last-name-error").textContent="Please provide the lastr name with valid letter characters";
        document.forms.uploadForm.last_name.focus() ;
        return false;
     }




     if( chk_email(email)) {
        // document.getElementById("last-name-error").textContent="Please provide the lastr name with valid letter characters";
        // document.forms.uploadForm.last_name.focus() ;
        return false;
     }



     if( chk_password(pword, cword)) {
        // document.getElementById("last-name-error").textContent="Please provide the lastr name with valid letter characters";
        // document.forms.uploadForm.last_name.focus() ;
        return false;
     }

    return (true);

}

const sign_up = document.getElementById("sign-up");

sign_up.onclick(function(e){
    e.preventDefault();

    form_validate();

});
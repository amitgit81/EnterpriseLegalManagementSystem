var nameError = document.getElementById("name-error");  // getting the id of span tag for name error  // this variable will be used to display error messages related to name validation
var phoneError = document.getElementById("phone-error"); 
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error"); 
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;  // getting the value of the name input field by id = contact-name
    if(name.length == 0)
    {
        nameError.innerHTML = "Name is required";  // displaying error message if name is empty
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){  
        nameError.innerHTML = "Write full name"; 
        return true;
    }
    nameError.innerHTML = "valid";
    return true;  // returning true if name is valid
}

function validatePhone() {

    var phone = document.getElementById("contact-phone").value;  
    if(phone.length == 0)
    {
        phoneError.innerHTML = "Phone number is required";  // displaying error message if phone number is empty
        return false;
    }
    if(phone.length != 10) {
        phoneError.innerHTML = "Phone number must be 10 digits";  
        return false; 
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML = "only digit please"; 
        return false;
    }
    phoneError.innerHTML = "valid";  
    return true;  
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "invalid ";
        return false;
    }
    emailError.innerHTML = "valid";
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required=30;
    var left = required - message.length;

    if(message.length==0){
        messageError.innerHTML = "message is required";
        return false;
    }
    
    if(left > 0){
        messageError.innerHTML = left + " more character required";
        return false;
    }

    messageError.innerHTML = "valid";
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error";
        setTimeout(function() {
            submitError.style.display = "none";  
        }, 3000);
        return false;
    }
}

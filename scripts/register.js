function register() {
    const email = document.getElementById('email').value; //output to database
    const password = document.getElementById('password').value; //first encrypt below then output to database
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const termsError = document.getElementById('terms-error');
    const termsCheckbox = document.getElementById('terms');
    const commsCheckbox = document.getElementById('communications');//output to database



    //Email Validation (text validation, not *email exist validation*)
    if (!email || !email.includes('@')|| !email.includes('.')) {
        emailError.textContent = 'Please enter a valid email address';
        return;
    } else {
        emailError.textContent = '';
    }

    //Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must be 8 characters long, include one uppercase letter, one number, and one symbol';
        return;
    } else {
        passwordError.textContent = '';
    }

    //T&C Validation
    if (!termsCheckbox.checked) {
        termsError.textContent = 'You must accept the Terms and Conditions to register';
        return;
    } else {
        termsError.textContent = '';
    }


    //Encrypt & Output
    const encryptedPassword = btoa(password);//temp
    console.log('Email:', email);
    console.log('Encrypted Password:', encryptedPassword);
    console.log('Terms and Conditions Accepted:', termsCheckbox.checked);
    console.log('Additional Communications Accepted:', commsCheckbox.checked);

    //FUTURE IMPLEMENTATION TO ADD TO DATABASE

}

//Show Password Functionality
document.getElementById('show-password').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
});
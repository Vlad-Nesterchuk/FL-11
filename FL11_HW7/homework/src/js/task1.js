let promptEmail = prompt('Enter your email');
const MIN_EMAIL_LENGTH = 6;
const MIN_PASSWORD_LENGTH = 5;
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
let newPassword;

if (promptEmail === '' || promptEmail === null) {
    alert('Canceled');
} else if (promptEmail.length < MIN_EMAIL_LENGTH) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else {
    switch (promptEmail) {
        case userEmail:
            if (prompt('Enter password') !== userPassword) {
                alert('Wrong password')
            } else if (confirm('Do you want to change your password?')) {
                if (prompt('Enter old password') !== userPassword) {
                    alert('Wrong password');
                } else if((newPassword = prompt('Enter new password').length) < MIN_PASSWORD_LENGTH){
                        alert('It’s too short password. Sorry.');
                    } else if (prompt('Enter new password again') === newPassword){
                        userPassword = newPassword;
                        alert('You have successfully changed your password.')
                    } else {
                        alert('You wrote the wrong password.');
                    }
            } else {
                alert('You have failed the change.');
            }
            break;
        case adminEmail:
            if (prompt('Enter password') !== adminPassword) {
                alert('Wrong password')
            }else if (confirm('Do you want to change your password?')) {
                if (prompt('Enter old password') !== adminPassword) {
                    alert('Wrong password');
                } else if((newPassword = prompt('Enter new password').length) < MIN_PASSWORD_LENGTH){
                    alert('It’s too short password. Sorry.');
                } else if (prompt('Enter new password again') === newPassword){
                    adminPassword = newPassword;
                    alert('You have successfully changed your password.')
                } else {
                    alert('You wrote the wrong password.');
                }
            } else {
                alert('You have failed the change.');
            }
            break;
        default:
            alert('I don’t know you');
    }
}
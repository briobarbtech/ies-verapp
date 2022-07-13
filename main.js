
const buttonSubmit = document.querySelector(".submit-button");
const password = document.querySelector('#password');
const username = document.querySelector('#username');


class UserLogin {
    UserLogin (username, password){
        this.username = username;
        this.password = password
    }

    get username() {
        return this.username;
    }
}


buttonSubmit.addEventListener('click', () => {
    const user = new UserLogin(username.value, password.value);
    console.log(user.username());
    //console.log('Login');
}); 

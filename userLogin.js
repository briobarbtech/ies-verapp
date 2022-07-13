class UserLogin {
    username;
    password;
    UserLogin (username, password){
        this.username = username;
        this.password = password
    }

    get username () {
        return this.username;
    }
}
class AuthModel {
    constructor(data) {
        this.access_token = data?.token;
    }

    getToken(){
        return this.access_token;
    }
}

export default AuthModel;
class UserModel {
    constructor(data) {
        this.id = data?.id;
        this.firstName = data?.name;
        this.lastName = data?.surname;
        this.description = data?.description;
        this.image = data?.image;
        this.email = data?.email;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

export default UserModel;
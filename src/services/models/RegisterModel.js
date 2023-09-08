class RegisterModel {
    constructor(data) {
        this.id = data?.id;
        this.name = data?.name;
        this.surname = data?.surname;
        this.email = data?.email;
        this.image = data?.image_id;
    }
}

export default RegisterModel;
import {requestInstance} from "../config/requestInstance";
import RegisterModel from "./models/RegisterModel.js";


class RegisterService {

    api = {
        register: '/register',
    }

    register(data) {
        return requestInstance.post(this.api.register, data)
            .then(r => {
                return new RegisterModel(r.data);
            })
            .catch(err => Promise.reject(err));
    }

}


export const registerService = new RegisterService();
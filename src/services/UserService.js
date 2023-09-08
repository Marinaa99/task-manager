import {requestInstance} from "../config/requestInstance";
import UserModel from "./models/UserModel.jsx";

class UserService {
    //apis used for user requests
    api = {
        account: '/user',
    }

    //parameters used in apis
    params = {}

    getCurrentUserData(){
        return requestInstance.get(this.api.account)
            .then(r => {
                return new UserModel(r.data)
            })
            .catch(err => Promise.reject(err))
    }

}

export const userService = new UserService();
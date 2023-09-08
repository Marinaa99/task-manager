import {requestInstance} from "../config/requestInstance.js";
import TaskModel from "./models/TaskModel.js";



class TaskService {

    api = {
        main: '/tasks'
    }

    params = {
        search: "searchTerm="
    }


    getAll() {
        return requestInstance.get(`${this.api.main}`)
            .then(r => r?.data?.map(item => new TaskModel(item)))
            .catch(err => Promise.reject(err))
    }

    get(id){
        return requestInstance.get(`${this.api.main}/${id}`)
            .then(r => new TaskModel(r.data))
            .catch(err => Promise.reject(err))
    }

    add(data){
        const formData = {...data};
        return requestInstance.post(this.api.main, formData)
            .then(r => new TaskModel(r.data))
            .catch(err => Promise.reject(err))
    }

    edit(data){
        const formData = {...data};
        return requestInstance.put(`${this.api.users}/${data?.id}`, formData)
            .then(r => new TaskModel(r.data))
            .catch(err => Promise.reject(err))
    }

    delete(id){
        return requestInstance.delete(`${this.api.main}/${id}`)
            .then(r => new TaskModel(r.data))
            .catch(err => Promise.reject(err))
    }
}


export const taskService = new TaskService();
class TaskModel {
    constructor(data) {
        this.id = data?.id;
        this.name = data?.name;
        this.description = data?.description;
        this.category_id = data?.category_id;
        this.status_id = data?.status_id;

    }
}

export default TaskModel;
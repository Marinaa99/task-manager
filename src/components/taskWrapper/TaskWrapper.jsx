import classes from './TaskWrapper.module.scss';

const TasksWrapper = ({children}) => {
    return (
        <div className={classes["container"]}>
            {children}
        </div>
    )
}

export default TasksWrapper;
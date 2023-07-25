import React from "react";
import {useParams} from "react-router-dom";


const Task = () => {
    const params = useParams();
    console.log(params);

    return   <div>
               This is a task
                You have selected {params?.type} {params?.typeId}
             </div>

}





export default Task;
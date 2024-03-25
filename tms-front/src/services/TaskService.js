import axios from 'axios'
const fetchTaskURL = "http://localhost:8080/api/task"
const fetchStatusURL = "http://localhost:8080/api/status"
const createTaskURL = "http://localhost:8080/api/task/create"
const removeTaskURL = "http://localhost:8080/api/task/remove"
class TaskService {

getAllTask(){
        const data  = axios.get(fetchTaskURL).then(response => response.data);
        return data;
    }


getAllStatus(){
        const data  = axios.get(fetchStatusURL).then(response => response.data);
        return data;
    }

    createTask(task){
        return axios.post(createTaskURL, task);
    }

        removeTask(taskid){
            return axios.delete(removeTaskURL+"/"+taskid);
        }


}

export default new TaskService();
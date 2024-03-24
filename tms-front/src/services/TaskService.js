import axios from 'axios'
const fetchTaskURL = "http://localhost:8080/api/task"

class TaskService {

getAllTask(){
        const data  = axios.get(fetchTaskURL).then(response => response.data);
        return data;
    }


}

export default new TaskService();
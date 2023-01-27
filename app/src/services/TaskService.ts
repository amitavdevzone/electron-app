import axios from 'axios';
import ITask from '../interfaces/ITask';

class TaskService {
  public static fetchTasks = async (): Promise<Array<ITask>> => {
    const response = await axios.get('http://192.168.1.191:8000/api/tasks');
    console.log('resp', response.data);
    return response.data;
  };
}

export default TaskService;

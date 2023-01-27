import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { TodoForm } from '../components/forms/TodoForm';
import ITask from '../interfaces/ITask';

const Work: React.FC = () => {
  const ipcRenderer = (window as any).ipcRenderer;
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);

  const setup = async () => {
    setLoading(true);
    const resp = await axios.get('http://127.0.0.1:8000/api/task');
    setTasks(tasks.concat(resp.data));
    setLoading(false);
  };
  useEffect(() => {
    setup();
    ipcRenderer.on('task:added', (event: any, data: any) => {
      setup();
    });
  }, []);

  return (
    <div>
      {!loading ? (
        <ul>
          {tasks &&
            tasks.map((task) => {
              return <li key={task.id}>{task.description}</li>;
            })}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
      <TodoForm />
    </div>
  );
};

export { Work };

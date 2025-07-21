import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import TaskCard from '../components/TaskCard';
import AddTaskForm from '../components/AddTaskForm';
import { dummyTasks } from '../data/dummyTasks';
const Tasks = () => {
  const { isSignedIn } = useUser();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsedTasks = JSON.parse(saved);
      setTaskList(parsedTasks);
    } else {
      setTaskList(dummyTasks);
      localStorage.setItem("tasks", JSON.stringify(dummyTasks));
    }
  }, []);
  function saveToLocal(newList) {
    setTaskList(newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
  }

  function addTask(newTask) {
    const updated = [...taskList, newTask];
    saveToLocal(updated);
  }

  function changeStatus(taskId, newStatus) {
    const updated = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      } else {
        return task;
      }
    });
    saveToLocal(updated);
  }

  function deleteTask(taskId) {
    const confirmDelete = window.confirm("Do you really want to delete this task?");
    if (confirmDelete) {
      const filtered = taskList.filter(task => task.id !== taskId);
      saveToLocal(filtered);
    }
  }

  if (!isSignedIn) {
    return (
      <div className="page-container">
        <p>You need to log in to see your tasks.</p>
      </div>
    );
  }
  const todo = taskList.filter(t => t.status === "todo");
  const doing = taskList.filter(t => t.status === "in-progress");
  const done = taskList.filter(t => t.status === "done");
  return (
    <div className="page-container">
      <h2>My Tasks</h2>
      <AddTaskForm onTaskAdd={addTask} />
      <div className="board">
        <div className="col col-todo">
          <h3>📝 To Do ({todo.length})</h3>
          {todo.length === 0 && <p style={{ fontStyle: 'italic', color: '#aaa' }}>No tasks yet.</p>}
          {todo.map(t => (
            <TaskCard
              key={t.id}
              task={t}
              onStatusChange={changeStatus}
              onDelete={deleteTask}
            />
          ))}
        </div> 
        <div className="col col-progress">
          <h3>⏳ In Progress ({doing.length})</h3>
          {doing.length === 0 && <p style={{ fontStyle: 'italic', color: '#aaa' }}>Nothing here right now.</p>}
          {doing.map(t => (
            <TaskCard
              key={t.id}
              task={t}
              onStatusChange={changeStatus}
              onDelete={deleteTask}
            />
          ))}
        </div>
        <div className="col col-done">
          <h3>✅ Done ({done.length})</h3>
          {done.length === 0 && <p style={{ fontStyle: 'italic', color: '#aaa' }}>No completed tasks.</p>}
          {done.map(t => (
            <TaskCard
              key={t.id}
              task={t}
              onStatusChange={changeStatus}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;

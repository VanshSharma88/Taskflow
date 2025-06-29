import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import TaskCard from '../components/TaskCard';
import AddTaskForm from '../components/AddTaskForm';
import { dummyTasks } from '../data/dummyTasks';

const Tasks = () => {
  const { isSignedIn } = useUser();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage or use dummy data
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(dummyTasks);
      localStorage.setItem('tasks', JSON.stringify(dummyTasks));
    }
  }, []);

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleTaskAdd = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);
  };

  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    saveTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      saveTasks(updatedTasks);
    }
  };

  if (!isSignedIn) {
    return (
      <div className="container">
        <div className="auth-container">
          <p>Please sign in to access your tasks.</p>
        </div>
      </div>
    );
  }

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div className="container">
      <h2>Task Management Dashboard</h2>
      
      <AddTaskForm onTaskAdd={handleTaskAdd} />

      <div className="kanban-board">
        <div className="kanban-column todo">
          <div className="column-header">
            <span className="column-title">📝 To Do</span>
            <span className="task-count">{todoTasks.length}</span>
          </div>
          <div>
            {todoTasks.map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onStatusChange={handleStatusChange}
                onDelete={handleTaskDelete}
              />
            ))}
            {todoTasks.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                color: 'rgba(255,255,255,0.7)',
                fontStyle: 'italic'
              }}>
                No tasks in this column
              </div>
            )}
          </div>
        </div>

        <div className="kanban-column in-progress">
          <div className="column-header">
            <span className="column-title">⏳ In Progress</span>
            <span className="task-count">{inProgressTasks.length}</span>
          </div>
          <div>
            {inProgressTasks.map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onStatusChange={handleStatusChange}
                onDelete={handleTaskDelete}
              />
            ))}
            {inProgressTasks.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                color: 'rgba(255,255,255,0.7)',
                fontStyle: 'italic'
              }}>
                No tasks in this column
              </div>
            )}
          </div>
        </div>

        <div className="kanban-column done">
          <div className="column-header">
            <span className="column-title">✅ Done</span>
            <span className="task-count">{doneTasks.length}</span>
          </div>
          <div>
            {doneTasks.map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onStatusChange={handleStatusChange}
                onDelete={handleTaskDelete}
              />
            ))}
            {doneTasks.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                color: 'rgba(255,255,255,0.7)',
                fontStyle: 'italic'
              }}>
                No tasks in this column
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
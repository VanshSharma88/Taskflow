import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import TaskCard from '../components/TaskCard';
import { dummyTasks } from '../data/dummyTasks';

const AllTasks = () => {
  const { isSignedIn } = useUser();
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(dummyTasks);
    }
  }, []);

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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

  // Filter tasks based on selected filters
  const filteredTasks = tasks.filter(task => {
    const statusMatch = filterStatus === 'all' || task.status === filterStatus;
    const priorityMatch = filterPriority === 'all' || task.priority === filterPriority;
    return statusMatch && priorityMatch;
  });

  const taskStats = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length,
    high: tasks.filter(t => t.priority === 'high').length,
    medium: tasks.filter(t => t.priority === 'medium').length,
    low: tasks.filter(t => t.priority === 'low').length
  };

  return (
    <div className="container">
      <div className="tasks-header">
        <div>
          <h2>All Tasks Overview</h2>
          <p>Total: {taskStats.total} tasks</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <label htmlFor="statusFilter" style={{ marginRight: '0.5rem' }}>Status:</label>
            <select
              id="statusFilter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="form-control"
              style={{ width: 'auto', display: 'inline-block' }}
            >
              <option value="all">All</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="priorityFilter" style={{ marginRight: '0.5rem' }}>Priority:</label>
            <select
              id="priorityFilter"
                  value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="form-control"
              style={{ width: 'auto', display: 'inline-block' }}
      >
              <option value="all">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
               <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>


      


      <div className="stats-grid">
        <div className="feature-card">
          <h4 style={{ color: '#6c757d' }}>📝 To Do</h4>
          <p>{taskStats.todo}</p>
        </div>
        <div className="feature-card">
          <h4 style={{ color: '#ffc107' }}>⏳ In Progress</h4>
          <p>{taskStats.inProgress}</p>
        </div>
        <div className="feature-card">
          <h4 style={{ color: '#28a745' }}>✅ Done</h4>
          <p>{taskStats.done}</p>
        </div>
        <div className="feature-card">
          <h4 style={{ color: '#dc3545' }}>🔥 High Priority</h4>
          <p>{taskStats.high}</p>
        </div>
      </div>

  
      <div className="tasks-grid">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onStatusChange={handleStatusChange}
              onDelete={handleTaskDelete}
            />
          ))
        ) : (
          <div style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>No tasks found</h3>
            <p>No tasks match the selected filters. Try adjusting your filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTasks;
import { useState } from 'react';
import TaskCard from '../TaskCard/TaskCard';
import './Column.css';

const Column = ({ column, tasks, onTaskClick, onTaskMove }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
    
  };
  
  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    
    const taskId = e.dataTransfer.getData('text/plain');
    
    onTaskMove(taskId, column.id);
  };
  const getColumnStyle = (columnId) => {
    switch(columnId) {
      case 'todo': return 'column-todo';
      case 'inProgress': return 'column-progress';
      case 'done': return 'column-done';
      default: return '';
    }
  };

  return (
    <div 
      className={`column ${getColumnStyle(column.id)} ${isDraggingOver ? 'dragging-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="column-header">
        <div className="column-title-container">
          <div className={`status-indicator ${column.id}`}></div>
          <h2 className="column-title">{column.title}</h2>
          <span className="task-count">({tasks.length})</span>
        </div>
      </div>
      
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onClick={() => onTaskClick(task.id)}
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', task.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
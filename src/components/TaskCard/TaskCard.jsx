import './TaskCard.css';

const TaskCard = ({ task, onClick, onDragStart }) => {
  const getTaskPriorityClass = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  const getTaskTypeIcon = (type) => {
    switch(type) {
      case 'bug': return '🐛';
      case 'feature': return '✨';
      case 'task': return '📋';
      case 'improvement': return '⚡';
      default: return '📄';
    }
  };

  return (
    <div 
      className={`task-card ${getTaskPriorityClass(task.priority)}`}
      onClick={onClick}
      draggable
      onDragStart={onDragStart}
    >
      <div className="task-header">
        <div className="task-id">{task.identifier}</div>
        {task.type && (
          <div className="task-type">
            <span className="task-type-icon">{getTaskTypeIcon(task.type)}</span>
          </div>
        )}
      </div>
      
      <h3 className="task-title">{task.title}</h3>
      
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      
      <div className="task-footer">
        {task.dueDate && (
          <div className="task-due-date">
            <span className="due-date-icon">📅</span>
            <span>{task.dueDate}</span>
          </div>
        )}
        
        {task.assignee && (
          <div className="task-assignee">
            <img 
              src={task.assignee.avatar} 
              alt={task.assignee.name} 
              className="assignee-avatar" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
const TaskCard = ({ task, onStatusChange, onDelete }) => {
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString();
    };
  
    const getPriorityClass = (priority) => {
      return `priority-${priority}`;
    };
  
    return (
      <div className={`task-card ${task.priority}`}>
        <div className="task-header">
          <h4 className="task-title">{task.title}</h4>
          <span className={`task-priority ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </span>
        </div>
        
        <p className="task-description">{task.description}</p>
        
        <div className="task-meta">
          <span className="task-assignee">👤 {task.assignee}</span>
          <span className="task-date">📅 {formatDate(task.dueDate)}</span>
        </div>
  
        <div className="task-actions">
          {task.status === 'todo' && (
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => onStatusChange(task.id, 'in-progress')}
            >
              Start Task
            </button>
          )}
          
          {task.status === 'in-progress' && (
            <>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onStatusChange(task.id, 'done')}
              >
                Complete
              </button>
              <button
                className="btn btn-sm"
                style={{ backgroundColor: '#6c757d', color: 'white' }}
                onClick={() => onStatusChange(task.id, 'todo')}
              >
                Move to Todo
              </button>
            </>
          )}
          
          {task.status === 'done' && (
            <button
              className="btn btn-sm"
              style={{ backgroundColor: '#6c757d', color: 'white' }}
              onClick={() => onStatusChange(task.id, 'in-progress')}
            >
              Move to Progress
            </button>
          )}
          
          <button
            className="btn btn-sm"
            style={{ backgroundColor: '#dc3545', color: 'white' }}
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default TaskCard;
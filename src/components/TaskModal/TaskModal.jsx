import { useEffect, useRef } from 'react';
import './TaskModal.css';

const TaskModal = ({ task, onClose }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const getTaskPriorityLabel = (priority) => {
    switch(priority) {
      case 'high': return 'High Priority';
      case 'medium': return 'Medium Priority';
      case 'low': return 'Low Priority';
      default: return 'No Priority';
    }
  };
  
  const getTaskTypeLabel = (type) => {
    switch(type) {
      case 'bug': return 'Bug';
      case 'feature': return 'Feature';
      case 'task': return 'Task';
      case 'improvement': return 'Improvement';
      default: return 'Unknown';
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <div className="modal-header">
          <div className="modal-task-id">{task.identifier}</div>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-content">
          <h2 className="modal-task-title">{task.title}</h2>
          
          <div className="task-meta">
            <div className={`task-priority ${task.priority}`}>
              {getTaskPriorityLabel(task.priority)}
            </div>
            
            {task.type && (
              <div className="task-type-badge">
                {getTaskTypeLabel(task.type)}
              </div>
            )}
          </div>
          
          <div className="task-section">
            <h3 className="section-title">Description</h3>
            <p className="task-description-full">{task.description || 'No description available.'}</p>
          </div>
          
          {task.subtasks && task.subtasks.length > 0 && (
            <div className="task-section">
              <h3 className="section-title">Subtasks</h3>
              <ul className="subtasks-list">
                {task.subtasks.map((subtask, index) => (
                  <li key={index} className="subtask-item">
                    <input 
                      type="checkbox" 
                      checked={subtask.completed} 
                      readOnly 
                      className="subtask-checkbox" 
                    />
                    <span className={`subtask-text ${subtask.completed ? 'completed' : ''}`}>
                      {subtask.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="task-details-grid">
            {task.dueDate && (
              <div className="task-detail-item">
                <span className="detail-label">Due Date</span>
                <span className="detail-value">{task.dueDate}</span>
              </div>
            )}
            
            {task.estimatedTime && (
              <div className="task-detail-item">
                <span className="detail-label">Estimated Time</span>
                <span className="detail-value">{task.estimatedTime}</span>
              </div>
            )}
            
            {task.storyPoints && (
              <div className="task-detail-item">
                <span className="detail-label">Story Points</span>
                <span className="detail-value">{task.storyPoints}</span>
              </div>
            )}
          </div>
          
          {task.assignee && (
            <div className="task-section assignee-section">
              <h3 className="section-title">Assignee</h3>
              <div className="assignee-info">
                <img 
                  src={task.assignee.avatar} 
                  alt={task.assignee.name} 
                  className="assignee-avatar-large" 
                />
                <div className="assignee-details">
                  <div className="assignee-name">{task.assignee.name}</div>
                  <div className="assignee-role">{task.assignee.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          <button className="btn-secondary">Edit</button>
          <button className="btn-primary">Mark Complete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
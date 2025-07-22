import React from 'react';

function TaskCard(props) {
  function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  }
  function handleStatusChange(newStatus) {
    props.onStatusChange(props.task.id, newStatus);
  }
  function handleDelete() {
    props.onDelete(props.task.id);
  }
  return (
    <div className="task-card">
      <div>
        <h4>{props.task.title}</h4>
        <p><strong>Priority:</strong> {props.task.priority}</p>
      </div>

      <p>{props.task.description}</p>

      <div>
        <p><strong>Assignee:</strong> {props.task.assignee}</p>
        <p><strong>Due:</strong> {formatDate(props.task.dueDate)}</p>
      </div>

      <div>
        {props.task.status === 'todo' && (
          <button onClick={function () { handleStatusChange('in-progress'); }}>
            Start Task
          </button>
        )}

        {props.task.status === 'in-progress' && (
          <div>
            <button onClick={function () { handleStatusChange('done'); }}>
              Mark as Done
            </button>
            <button onClick={function () { handleStatusChange('todo'); }}>
              Move to To-Do
            </button>
          </div>
        )}

        {props.task.status === 'done' && (
          <button onClick={function () { handleStatusChange('in-progress'); }}>
            Move to In Progress
          </button>
        )}

        <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

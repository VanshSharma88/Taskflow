import { useState } from 'react';
import Column from '../Column/Column';
import './KanbanBoard.css';

const KanbanBoard = ({ data, onTaskMove }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const handleTaskClick = (taskId) => {
    setSelectedTask(data.tasks[taskId]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="kanban-container">
      <div className="kanban-header">
        <h1>Taskflow for agile teams.</h1>
        <p className="kanban-description">
          A visual tool designed to enhance the visibility of work progress and optimize workflows for maximum efficiency.
        </p>
        <button className="btn-primary sign-up-btn">ADD NEW TASK....</button>
      </div>
      
      <div className="kanban-board">
        {Object.values(data.columns).map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={column.taskIds.map(taskId => data.tasks[taskId])}
            onTaskClick={handleTaskClick}
            onTaskMove={onTaskMove}
          />
        ))}
      </div>

      {modalOpen && selectedTask && (
        <TaskModal task={selectedTask} onClose={closeModal} />
      )}
    </div>
  );
};

export default KanbanBoard;
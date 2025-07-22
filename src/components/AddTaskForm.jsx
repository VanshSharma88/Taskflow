import { useState } from 'react';

const AddTaskForm = ({ onTaskAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignee: '',
    dueDate: ''
  });

  function handleInputChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData(prevData => ({
      ...prevData,
      [fieldName]: fieldValue
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (
      formData.title === '' ||
      formData.description === '' ||
      formData.assignee === '' ||
      formData.dueDate === ''
    ) {
      alert('Please fill all the fields.');
      return;
    }

    const task = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      assignee: formData.assignee,
      dueDate: formData.dueDate,
      status: 'todo',
      createdAt: new Date().toISOString().split('T')[0]
    };

    onTaskAdd(task);

    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      assignee: '',
      dueDate: ''
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Add New Task</h3>
      <div>
        <label className='labelss'>Title:</label><br />
        <input
          className='input'
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Task title"
        />
      </div>

      <div>
        <label className='labelss'>Description:</label><br />
        <textarea
          className='input'
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Task description"
        />
      </div>

      <div>
        <label className='labelss'>Priority:</label><br />
        <select name="priority" value={formData.priority} onChange={handleInputChange} className='input'>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label className='labelss'>Assignee:</label><br />
        <input
          className='input'
          type="text"
          name="assignee"
          value={formData.assignee}
          onChange={handleInputChange}
          placeholder="Assignee name"
        />
      </div>

      <div>
        <label className='labelss'>Due Date:</label><br />
        <input
          className='input'
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleInputChange}
        />
      </div>

      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

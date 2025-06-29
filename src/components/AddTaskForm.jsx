import { useState } from 'react';

const AddTaskForm = ({ onTaskAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignee: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, priority, assignee, dueDate } = formData;

    if (!title || !description || !assignee || !dueDate) {
      alert('Please fill in all fields');
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      assignee,
      dueDate,
      status: 'todo',
      createdAt: new Date().toISOString().split('T')[0]
    };

    onTaskAdd(newTask);
    setFormData({ title: '', description: '', priority: 'medium', assignee: '', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Task</h3>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task description"
      />

      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="text"
        name="assignee"
        value={formData.assignee}
        onChange={handleChange}
        placeholder="Assignee"
      />

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

// src/pages/RemoveTask.jsx
import React, { useState } from 'react';
import axios from 'axios';

function RemoveTask() {
  const [taskId, setTaskId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`/api/tasks/${taskId}`)
      .then(response => {
        console.log('Task removed:', response.data);
      })
      .catch(error => {
        console.error('Error removing task:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Remove Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          placeholder="Task ID"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button type="submit" className="w-full p-2 bg-red-500 text-white rounded">
          Remove Task
        </button>
      </form>
    </div>
  );
}

export default RemoveTask;

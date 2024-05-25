// src/pages/UpdateTask.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateTask() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    axios.get(`/api/tasks/${id}`)
      .then(response => {
        const { title, description, dueDate, isPublic } = response.data;
        setTitle(title);
        setDescription(description);
        setDueDate(dueDate);
        setIsPublic(isPublic);
      })
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/tasks/${id}`, {
      title,
      description,
      dueDate,
      isPublic,
    }).then(response => {
      console.log('Task updated:', response.data);
    }).catch(error => {
      console.error('Error updating task:', error);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block mb-4">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          Public Task
        </label>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Update Task
        </button>
      </form>
    </div>
  );
}

export default UpdateTask;

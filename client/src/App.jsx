// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ViewTasks from './pages/ViewTasks.jsx';
import AddTask from './pages/AddTask.jsx';
import UpdateTask from './pages/UpdateTask.jsx';
import RemoveTask from './pages/RemoveTask.jsx';
import Login from './pages/Login.jsx';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';

function App() {
  const { username } = useAuth();

  return (
    <div className="App">
      {username ? (
        <Routes>
          <Route path="/view" element={<ViewTasks />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/update" element={<UpdateTask />} />
          <Route path="/remove" element={<RemoveTask />} />
          <Route path="*" element={<Navigate to="/view" />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}

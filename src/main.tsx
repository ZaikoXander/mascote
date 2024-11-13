import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from './App'
import Admin from './pages/Admin'
import Login from './pages/Admin/Login';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>,
)

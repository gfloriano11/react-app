import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Task from './pages/task.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/task',
    element: <Task/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

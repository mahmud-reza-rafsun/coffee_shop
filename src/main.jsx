import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Layout/Root.jsx'
import Home from './Pages/Home.jsx'
import Coffees from './Pages/Coffees.jsx'
import Dashboard from './Pages/Dashboard.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/coffees',
        element: <Coffees/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

export default router;
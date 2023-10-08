import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main/main.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CV from './pages/CV/cv.jsx'
import Error from './pages/404/404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/cv",
        element: <CV />,
      },
      {
        path: "/*",
        element: <Error />,
      }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// verifier fonctionnement des routes
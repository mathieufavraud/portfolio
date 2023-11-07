import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CV from './pages/CV/cv.jsx'
import Error from './pages/404/404.jsx'
import './styles/main.scss'

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/error" element={<Error />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)

// verifier fonctionnement des routes

/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CV from './pages/CV/cv.jsx'
import Error from './pages/404/404.jsx'
import './styles/main.scss'

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
*/
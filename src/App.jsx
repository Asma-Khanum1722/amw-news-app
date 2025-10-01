import './App.css'
import './components/navbar.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from './components/NavBar'
import News from './pages/News'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element: <><NavBar/><Home/></>
  },
  {
    path:'/news',
    element: <><NavBar/><News/></>
  },
  {
    path:'/about',
    element: <><NavBar/><About/></>
  },
  {
    path:'/login',
    element: <><NavBar/><Login/></>
  },
  {
    path:'/contact',
    element: <><NavBar/><Contact/></>
  }
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home, About, Contact, Github, User } from './components/index';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { githubInfoLoader } from './components/Github';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/user/:userId/about' element={<About />} />
      <Route path='/user/:userId/contact' element={<Contact />} />
      <Route path='/user/:userId/github' loader={githubInfoLoader} element={<Github />} />
      <Route path='/user/:userid' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

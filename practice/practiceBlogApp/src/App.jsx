import React, { useEffect, useState } from 'react'
import authservice from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './feature/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      }).catch((userData) => {
        console.log("App.jsx/getCurrentUser :: error :: ", userData);
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (<div>Loading...</div>)
}

export default App

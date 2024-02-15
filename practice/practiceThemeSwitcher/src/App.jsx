import React, { useContext } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import {ThemeContext } from './context/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`flex flex-wrap min-h-screen items-center ${theme}`}>
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Card />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <ThemeBtn />
        </div>
      </div>
    </div>
  )
}

export default App

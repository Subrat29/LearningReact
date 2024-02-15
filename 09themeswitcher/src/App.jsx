import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = (theme) => { //todo: if i remove theme then
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const htmlClassList = document.querySelector("html").classList
    htmlClassList.remove("dark", "light")
    htmlClassList.add(theme)
  }
  ),[theme]

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

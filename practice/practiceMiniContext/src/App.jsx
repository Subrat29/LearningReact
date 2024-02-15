import './App.css'
import Profile from './components/Profile'
import Signin from './components/Signin'
import { UsernameContextProvider, PasswordContextProvider, AgeContextProvider, HobbyContextProvider } from './context/UserContextProvider'
function App() {

  return (
    <UsernameContextProvider>
      <PasswordContextProvider>
        <HobbyContextProvider>
          <AgeContextProvider>
            <Signin />
            <Profile />
          </AgeContextProvider>
        </HobbyContextProvider>
      </PasswordContextProvider>
    </UsernameContextProvider>
  )
}

export default App

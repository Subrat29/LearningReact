import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    username: "subrat",
    age: 21
  }

  let arr = [1,2,3,4];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <Card channel="chaiaurreact" someObj = {myObj}/>
    <Card channel="cofeeaurreact" someObj = {myObj}/>
    <Card someObj = {myObj}/>
    </>
  )
}

export default App

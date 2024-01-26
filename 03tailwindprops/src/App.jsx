import './App.css'
import Card from './components/card'
import Card2 from './components/card2'

function App() {

  let myObj = {
    username: "subrat",
    age: 21
  }

  let arr = [1, 2, 3, 4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl my-9'>Tailwind test</h1>

      <Card channel="Hina Khan" someObj={myObj} />
      <Card channel="Rajkumar Rao" someObj={myObj} />
      <Card someObj={myObj} someArray={arr} />

      {/* <Card channel="Aditi"
        someObj={ myObj2 = {
          username: "aditi",
          age: 2
        }}
        someArray={arr2 = [6, 6, 6, 6]}
      /> */}

      <Card2 name="Raman Buddh" />

    </>
  )
}

export default App

import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const specialChar = "~!@#$%^&*(){}_+?></*-,./|"
  const numbers = "0123456789"

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const getUppercaseChar = () => {
    return uppercase[getRandomInteger(0, 26)]
  }
  const getLowercaseChar = () => {
    return lowercase[getRandomInteger(0, 26)]
  }
  const getSpecialChar = () => {
    return specialChar[getRandomInteger(0, 25)]
  }
  const getNumber = () => {
    return numbers[getRandomInteger(0, 9)]
  }

  let [pass, setPass] = useState("")
  let [length, setLength] = useState(8)
  let [uppercaseChecked, setUppercaseChecked] = useState("true")
  let [lowercaseChecked, setLowercaseChecked] = useState("true")
  let [symbolChecked, setSymbolChecked] = useState("true")
  let [numberChecked, setNumberChecked] = useState("true")
  let passwordRef = useRef(null)

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  const passGenrator = (length) => {
    let password = ""

    while (length && (uppercaseChecked || lowercaseChecked || symbolChecked || numberChecked)) {
      if (length && uppercaseChecked) {
        password += getUppercaseChar();
        length--;
      }

      if (length && lowercaseChecked) {
        password += getLowercaseChar();
        length--;
      }

      if (length && symbolChecked) {
        password += getSpecialChar();
        length--;
      }

      if (length && numberChecked) {
        password += getNumber();
        length--;
      }
    }
    return password
  }

  const passGenratorHandler = useCallback(() => {
    setPass(passGenrator(length))
  }, [length, uppercaseChecked, lowercaseChecked, symbolChecked, numberChecked, setPass])

  useEffect(() => {
    passGenratorHandler()
  }, [length, uppercaseChecked, lowercaseChecked, symbolChecked, numberChecked, passGenratorHandler])


  return (
    <>
      <div className='w-full h-screen flex justify-center bg-black text-xl'>
        <div className='flex justify-center flex-col'>
          <h1 className='text-white text-4xl mb-4' >PASSWORD GENERATOR</h1>
          <input
            className='px-3 py-3 my-5'
            type="text"
            placeholder='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={copyPassToClipboard}
          >
            Copy
          </button>
          <label className='text-white mt-8' htmlFor="">Length of password</label>
          <input
            className='w-1/3 px-3 py-3 my-2'
            type="number"
            min="1"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <div>
            <input
              onChange={(e) => setUppercaseChecked(!uppercaseChecked)}
              defaultChecked
              type="checkbox"
            />
            <label className='text-white'> Uppercase</label>
            <br />
            <input
              onChange={(e) => setLowercaseChecked(!lowercaseChecked)}
              defaultChecked
              type="checkbox"
            />
            <label className='text-white'> Lowercase</label>
            <br />
            <input
              onChange={(e) => setNumberChecked(!numberChecked)}
              defaultChecked
              type="checkbox"
            />
            <label className='text-white'> Numbers</label>
            <br />
            <input
              onChange={(e) => setSymbolChecked(!symbolChecked)}
              defaultChecked
              type="checkbox"
            />
            <label className='text-white'> Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
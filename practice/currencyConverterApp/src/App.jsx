import { useCallback, useEffect, useState } from 'react'
import Input from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)

  const currencyOptions = useCurrencyInfo(fromCurrency)

  const convertCurrency = useCallback(() => {
    const toCurrencyRate = currencyOptions[toCurrency]
    setToAmount(fromAmount * toCurrencyRate)
  }, [fromAmount, toAmount, fromCurrency, toCurrency, currencyOptions])

  useEffect(() => {
    convertCurrency()
  }, [fromAmount, toAmount, fromCurrency, toCurrency, currencyOptions])

  const swapInput = () => {
    setFromAmount(toAmount)
    setToAmount(fromAmount)
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }


  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center bg-slate-600 text-2xl'>
        <h1 className='text-6xl text-white font-bold m-7'>Currency Converter</h1>
        <Input
          label={"From"}
          amount={fromAmount}
          setAmount={setFromAmount}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          currencyOptions={currencyOptions}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={swapInput}
        >
          Swap
        </button>
        <Input
          label={"To"}
          amount={toAmount}
          setAmount={setToAmount}
          currency={toCurrency}
          setCurrency={setToCurrency}
          currencyOptions={currencyOptions}
        />
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={convertCurrency}
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button> */}
      </div>
    </>
  )
}

export default App

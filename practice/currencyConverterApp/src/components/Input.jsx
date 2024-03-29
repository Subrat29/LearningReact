import React, { useId } from 'react'

function Input({ label, amount, setAmount, currency, setCurrency, currencyOptions }) {

    const currencyKeys = Object.keys(currencyOptions)
    const amountInputId = useId()

    return (
        <div className='bg-blue-300 w-1/2 h-1/6 rounded-xl p-2'>
            <div className='p-2 flex justify-between'>
                <label htmlFor={amountInputId}>{label}</label>
                <label >Currency Type</label>
            </div>
            <div className='p-2 flex justify-between'>
                <input
                    id={amountInputId}
                    type="text"
                    className='border p-2 rounded-md'
                    placeholder={label}
                    value={amount}
                    onChange={(e) => (setAmount(e.target.value))}
                />
                <select
                    className='border p-2 rounded-md'
                    value={currency}
                    onChange={(e) => (setCurrency(e.target.value))}
                >
                    {currencyKeys.map((key) => (
                        <option key={key} value={key}>{key}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Input

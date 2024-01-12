import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Subrat29')
    //         .then(respose => respose.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='flex flex-col items-center justify-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div className='m-3'> Github Followers: {data.followers} </div>
            <img src={data.avatar_url} alt="Oops! No image found" width={300} />

        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Subrat29');
    return response.json();
}
import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {

    const data = useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const url = "https://api.github.com/users/Ayushpal2006"
    //  const fetchData = async () => {
    //  const response = await fetch(url)
    //  const data = await response.json()
    //     console.log(data);
    //     setData(data)
    //  }
    //  fetchData();
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}
export default Github



export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ayushpal2006')
    return response.json()
}

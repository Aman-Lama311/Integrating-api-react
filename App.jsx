import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

const [data, setData] = useState([])

const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list')

  setData(response.data)
  console.log(data)
}

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-green-500 px-4 py-2 text-white text-lg rounded-md active:scale-90'>Get data</button>
      <div className='bg-gray-700 text-white p-5'>

      {data.map(function(e, idx){
        return <div key={idx} className='bg-gray-300 flex items-center flex-col w-full px-7 py-6 mb-5'>
         <img className='h-40' src={e.download_url} alt="" />
         <h1 className='text-black text-lg'>{e.author}</h1>
        </div>
      })}


      </div>
      
    </div>
  )
}

export default App

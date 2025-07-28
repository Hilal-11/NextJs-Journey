import React from 'react'

function Home() {
  return (
    <div className='w-full min-h-screen bg-slate-950 flex justify-center items-center p-6 text-black'
      style={{
        background: `hsla(298, 68%, 90%, 1);
        background: linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        background: -moz-linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        background: -webkit-linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F6D5F7", endColorstr="#FBE9D7", GradientType=1 )`
      }}
    >
      <div>
        <h1 className='poppins-medium text-center text-6xl pb-4'>Welcome to the Dashboard App</h1>
        <button className='text-white text-md poppins-bold bg-blue-700 py-4 px-20 rounded-md'>Go To Dashboard</button>
      </div>
    </div>
  )
}

export default Home                                   
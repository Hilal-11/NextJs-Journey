import React from 'react'
import Link from 'next/link'
function Home() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center p-6 text-black'
      style={{
        background: `hsla(298, 68%, 90%, 1);
        background: linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        background: -moz-linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        background: -webkit-linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F6D5F7", endColorstr="#FBE9D7", GradientType=1 )`
      }}
    >
      <div className='text-center'>
        <h1 className='poppins-bold text-5xl lg:text-7xl pb-5'>Welcome to the Dashboard App</h1>
        <p className='poppins-light py-2 text-xl lg:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, rerum explicabo! Modi ut exercitationem qui ipsa, inventore sint, tempora quidem possimus error repellat deserunt assumenda similique amet iste quasi non!</p> <br /><br />
        <Link href="/dashboard" className='text-md poppins-bold shadow-md shadow-slate-900 py-4 px-20 rounded-md cursor-pointer hover:shadow-inner hover:shadow-slate-800 transition-shadow duration-500'>Go To Dashboard</Link>
      </div>
    </div>
  )
}

export default Home                                   
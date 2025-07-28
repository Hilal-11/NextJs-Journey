import React from 'react'
import Link from 'next/link'
function Dashboard() {
  return (
    <div className='w-full min-h-screen py-10' 
      style={{
        background: `hsla(298, 68%, 90%, 1);
        background: linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        background: -moz-linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        background: -webkit-linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%),
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F6D5F7", endColorstr="#FBE9D7", GradientType=1 )`
      }}
    >

      <div className='bg-white shadow-sm shadow-slate-500 rounded-md lg:w-2/3 mx-auto py-5 px-5'>
        <div>
          <h1 className='poppins-bold text-3xl'>Dashboard</h1>
          <p className='poppins-regular text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perspiciatis.</p>
        </div>

        {/* DASHBOARD */}
      <div className='w-full flex gap-10 py-6 flex-wrap '>
        <Link href="/dashboard/tasks">
          <div className=' bg-blue-300 w-[300px] h-auto px-4 py-4 rounded-md shadow-sm shadow-sky-950 duration-400 hover:scale-105'>
              <div className='flex justify-between '>
                <h1 className='text-lg poppins-bold'>Tasks</h1>
                <span className='text-xl'>📒</span>
              </div>
              <div className='py-2'>
                <p className='poppins-light break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit.</p>
              </div>
          </div>
        </Link>

      {/* analytics */}
        <Link href="/dashboard/analytics">
          <div className='bg-green-300 w-[300px] h-auto px-4 py-4 rounded-md shadow-sm shadow-green-950 duration-400 hover:scale-105'>
              <div className='flex justify-between '>
                <h1 className='text-lg poppins-bold'>Analytics</h1>
                <span className='text-xl'>👥</span>
              </div>
              <div className='py-2'>
                <p className='poppins-light break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit.</p>
              </div>
          </div>
        </Link>


        {/* settings */}
         <Link href="/dashboard/settings">
          <div className='bg-gray-400 w-[300px] h-auto px-4 py-4 rounded-md shadow-sm shadow-gray-600 duration-400 hover:scale-105'>
              <div className='flex justify-between '>
                <h1 className='text-lg poppins-bold'>Settings</h1>
                <span className='text-xl'>👩‍🔧</span>
              </div>
              <div className='py-2'>
                <p className='poppins-light break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit.</p>
              </div>
          </div>
        </Link>




         <Link href="/dashboard/users">
          <div className='text-white bg-slate-950 w-[300px] h-auto px-4 py-4 rounded-md shadow-sm shadow-green-950 duration-400 hover:scale-105'>
              <div className='flex justify-between '>
                <h1 className='text-lg poppins-bold'>Users</h1>
                <span className='text-xl'>👥</span>
              </div>
              <div className='py-2'>
                <p className='poppins-light break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit.</p>
              </div>
          </div>
        </Link>

      </div>


      </div>



      
      
    </div>
  )
}

export default Dashboard
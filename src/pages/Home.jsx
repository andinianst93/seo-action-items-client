import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import main1 from '../assets/main1.png'
import { useGlobalContext } from '../context/appContext'
const Home = () => {
  const { user } = useGlobalContext()
  return (
    <>
      {user && <Navigate to='/dashboard' />}

      <div className='mx-auto max-w-[1120px] px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
        <div className='m-0 h-[6rem] flex items-center'></div>
        <div className='grid items-center min-h-[calc(100vh-6rem)] lg:grid-cols-2 lg:gap-[6rem]'>
          <div>
            <h1 className='font-bold text-4xl mb-4'>SEO Items Tracking App</h1>
            <p className='mb-4'>
              SEO Items Tracking web application allows you to objectively
              identify what's working with your campaign and what needs
              improvement.
            </p>
            <Link
              to='/account'
              className='cursor-pointer text-white text-[1.25rem] bg-sky-800 border-transparent rounded-md py-[0.5rem] px-[1.25rem] shadow-md capitalize inline-block'
            >
              Login/Register
            </Link>
          </div>
          <img
            src={main1}
            alt='seo tracking app'
            className='lg:block w-[450px]'
          />
        </div>
      </div>
    </>
  )
}

export default Home

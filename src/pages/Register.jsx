import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'
import code from '../assets/code.svg'
import FormRowS from '../components/FormRowS'
import SectionContainer from '../components/SectionContainer'
import { Link } from 'react-router-dom'
import loginimg from '../assets/loginimg.png'
import registerimg from '../assets/registerimg.png'
const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    isMember: true,
  })
  const { user, register, login, isLoading, showAlert } = useGlobalContext()
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (isMember) {
      login({ email, password })
    } else {
      register({ name, email, password })
    }
  }
  return (
    <>
      <SectionContainer>
        {user && <Navigate to='/dashboard' />}
        <div className='mx-auto max-w-[1120px] px-4 sm:px-6 xl:max-w-5xl xl:px-0 min-h-[100vh] grid items-center'>
          <div>
            {showAlert && (
              <div className='py-[0.375rem] px-[0.75rem] m-auto border-transparent rounded-md md:w-[35vw] mb-2 max-w-[1120px] text-center capitalize text-red-800 bg-red-200'>
                there was an error, please try again
              </div>
            )}
            <div className='grid lg:grid-cols-2 lg:space-x-[250px] place-items-center'>
              <div className='mx-auto flex-col justify-center lg:py-0 py-8'>
                {values.isMember ? (
                  <>
                    <img
                      src={loginimg}
                      alt='login'
                      className='w-[550px] h-full mx-auto flex justify-center object-cover'
                      id='login user'
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={registerimg}
                      alt='register'
                      className='w-[550px] h-full mx-auto flex justify-center object-cover'
                      id='register user'
                    />
                  </>
                )}
              </div>
              <form
                className='max-w-[1120px] md:w-[35vw] bg-white rounded-md shadow-md p-[2.5rem] mx-auto my-auto'
                onSubmit={onSubmit}
                id='login form'
              >
                <div className='h-4 flex items-center justify-center mb-8'>
                  <h2 className='ml-2 text-2xl font-bold'>
                    <span className='text-sky-900'>Welcome!</span>
                  </h2>
                </div>
                {values.isMember ? (
                  <>
                    <h4 className='text-center text-xl font-bold text-sky-600'>
                      Login
                    </h4>
                  </>
                ) : (
                  <>
                    <h4 className='text-center text-xl font-bold text-sky-600'>
                      Register
                    </h4>
                  </>
                )}

                {!values.isMember && (
                  <FormRowS
                    type='name'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                  />
                )}
                <FormRowS
                  type='email'
                  name='email'
                  value={values.email}
                  handleChange={handleChange}
                />
                <FormRowS
                  type='password'
                  name='password'
                  value={values.password}
                  handleChange={handleChange}
                />
                <button
                  type='submit'
                  className='mt-4 cursor-pointer text-white bg-sky-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-md capitalize inline-block w-[100%] mb-4'
                >
                  Submit
                </button>
                <p className='m-0 mt-4 text-center'>
                  {values.isMember ? 'Not a member yet?' : 'Already a member?'}{' '}
                  <button
                    type='button'
                    onClick={toggleMember}
                    className='bg-transparent border-transparent text-sky-700 cursor-pointer'
                  >
                    {values.isMember ? 'Register' : 'Login'}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default Register

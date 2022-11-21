import React, { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useGlobalContext } from '../context/appContext'
import FormRow from '../components/FormRow'
import Navbar from '../components/Navbar'
import SectionContainer from '../components/SectionContainer'

const Edit = () => {
  const { id } = useParams()
  const {
    isLoading,
    editItem,
    fetchSingleItem,
    singleItemError: error,
    user,
    editSingleItem,
    editComplete,
  } = useGlobalContext()
  const [values, setValues] = useState({
    item: '',
    recommendation: '',
    status: '',
    priority: '',
  })
  useEffect(() => {
    fetchSingleItem(id)
  }, [id])

  useEffect(() => {
    if (editItem) {
      const { item, recommendation, status, priority } = editItem
      setValues({ item, recommendation, status, priority })
    }
  }, [editItem])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { item, recommendation, status, priority } = values
    if (item && recommendation) {
      editSingleItem(id, { item, recommendation, status, priority })
    }
  }
  if (isLoading && !editItem) {
    return (
      <div className='w-[6rem] h-[6rem] border-solid border-2 border-gray-400 rounded-md border-t-sky-700 m-auto animate-spin'></div>
    )
  }

  return (
    <>
      <SectionContainer>
        {!user && <Navigate to='/' />}
        <Navbar />
        <div className='mx-[3rem] my-12'>
          <Link
            to='/dashboard'
            className='cursor-pointer text-center text-white bg-sky-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-md capitalize inline-block md:w-fit w-[100%]'
          >
            Dashboard
          </Link>
        </div>
        <form
          className='max-w-[1120px] w-[90vw] bg-white rounded-md shadow-md p-[2.5rem] mx-auto my-auto'
          onSubmit={handleSubmit}
        >
          <p className='text-sky-700'>{editComplete && 'Success!'}</p>
          <h4 className='text-center font-bold text-xl text-gray-600 mb-4'>
            Edit SEO Item
          </h4>
          <div>
            <FormRow
              type='name'
              name='item'
              value={values.item}
              handleChange={handleChange}
            />
            <FormRow
              type='name'
              name='recommendation'
              value={values.recommendation}
              handleChange={handleChange}
            />
            <div className='mb-4'>
              <label htmlFor='priority' className='mr-4'>
                Priority:
              </label>
              <select
                name='priority'
                value={values.priority}
                onChange={handleChange}
                className='bg-gray-100 rounded-md border-transparent p-[0.25rem] capitalize'
              >
                <option value='high'>high</option>
                <option value='medium'>medium</option>
                <option value='useful'>useful</option>
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor='status' className='mr-4'>
                Status:
              </label>
              <select
                name='status'
                value={values.status}
                onChange={handleChange}
                className='bg-gray-100 rounded-md border-transparent p-[0.25rem] capitalize'
              >
                <option value='done'>done</option>
                <option value='pending'>pending</option>
              </select>
            </div>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='pointer text-white bg-sky-900 border-transparent rounded-md py-[0.5rem] px-[2rem] shadow-md capitalize hover:bg-gray-200 hover:text-sky-700'
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </SectionContainer>
    </>
  )
}

export default Edit

import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/appContext'
import FormRow from '../components/FormRow'
import Navbar from '../components/Navbar'
import Items from '../components/Items'
import Footer from '../components/Footer'
import SectionContainer from '../components/SectionContainer'
const Dashboard = () => {
  const [values, setValues] = useState({ item: '', recommendation: '' })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const { isLoading, showAlert, fetchItems, createItem } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const { item, recommendation } = values
    if (item && recommendation) {
      createItem(values)
      setValues({ item: '', recommendation: '' })
    }
  }
  useEffect(() => {
    fetchItems()
  }, [])
  return (
    <>
      <SectionContainer>
        <Navbar />
        <div>
          {showAlert && (
            <div className='py-[0.375rem] px-[0.75rem] m-auto border-transparent rounded-md w-[500px] max-w-[1120px] text-center capitalize text-red-800 bg-red-200'>
              There was an error, please try again
            </div>
          )}
          <form
            className='bg-white grid gap-y-[1rem] gap-x-[0.5rem] items-center mb-[3rem] rounded-md p-[1.5rem]'
            onSubmit={handleSubmit}
          >
            <FormRow
              type='name'
              name='item'
              value={values.item}
              handleChange={handleChange}
              horizontal
              placeholder='SEO Item'
            />
            <FormRow
              type='name'
              name='recommendation'
              value={values.recommendation}
              handleChange={handleChange}
              horizontal
              placeholder='Recommendation'
            />

            <button
              type='submit'
              className='mt-4 cursor-pointer text-white bg-sky-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-md capitalize inline-block w-[100%] mb-4'
            >
              {isLoading ? 'Adding new item' : 'Add item'}
            </button>
          </form>
          <Items />
        </div>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default Dashboard

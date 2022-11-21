import React from 'react'
import { useGlobalContext } from '../context/appContext'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import moment from 'moment'
import ItemCols from './ItemCols'
const Items = () => {
  const { items, isLoading, deleteItem } = useGlobalContext()
  if (isLoading) {
    return (
      <div className='w-[6rem] h-[6rem] border-solid border-2 border-gray-400 rounded-md border-t-sky-700 m-auto animate-spin'></div>
    )
  }
  if (items.length < 1) {
    return (
      <div className='text-center'>
        <h5>
          Currently, you have no{' '}
          <span className='text-sky-700 font-semibold'>ITEMS</span> to display.
        </h5>
      </div>
    )
  }
  return (
    <>
      <ItemCols />
      <div>
        {items.map((i) => {
          const {
            _id: id,
            item,
            recommendation,
            priority,
            status,
            createdAt,
          } = i
          let date = moment(createdAt)
          date = date.format('MMMM Do, YYYY')
          return (
            <article
              key={id}
              className='bg-white rounded-md mb-[2rem] grid lg:grid-cols-5 px-[2rem] py-[1rem] lg:justify-center lg:items-center'
            >
              <span className='lg:pr-8 text-gray-600 text-center max-w-[375px] lg:text-left mb-2 break-words font-semibold'>
                {item}
              </span>
              <span className='font-thin lg:pr-8 text-gray-600 text-center max-w-[280px] lg:text-left mb-2 break-words'>
                {recommendation}
              </span>
              <span
                className={
                  priority === 'high'
                    ? 'rounded-md capitalize w-[100px] bg-amber-200 text-center text-red-800 font-medium mx-auto mb-2'
                    : 'rounded-md capitalize w-[100px] bg-amber-200 text-center text-green-800 font-medium mx-auto mb-2'
                }
              >
                {priority}
              </span>
              <span
                className={
                  status === 'pending'
                    ? 'rounded-md capitalize w-[100px] bg-amber-200 text-center text-red-800 font-medium mx-auto mb-2'
                    : 'rounded-md capitalize w-[100px] bg-white text-center text-gray-800 font-medium mx-auto mb-2'
                }
              >
                {status}
              </span>
              <div className='mx-auto'>
                <Link
                  to={`/edit/${id}`}
                  type='button'
                  className='mx-2 text-green-800'
                >
                  <FaEdit />
                </Link>
                <button
                  type='button'
                  onClick={() => deleteItem(id)}
                  className='text-red-800'
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Items

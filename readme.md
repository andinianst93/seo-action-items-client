if (!editItem || error) {
return (
<>
{!user && <Navigate to='/' />}
<SectionContainer>
<div className='flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
<div className='space-x-2 pt-6 pb-8 md:space-y-5'>
<h5 className='text-xl font-extrabold tracking-tight text-gray-900 sm:text-lg md:border-r-2 md:px-6 md:text-2xl mb-4 lg:mb-0 md:mb-0'>
There was an error, please double check your item ID
</h5>
<Link
                to='/dashboard'
                className='inline-block pointer text-white bg-sky-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-md capitalize hover:bg-gray-200 hover:text-sky-700'
              >
Dashboard
</Link>
</div>
</div>
</SectionContainer>
</>
)
}

import React from 'react'
import { Link } from 'react-router-dom'

import ResultTable from './ResultTable'

const Result = () => {

  const handleRestart = () => {
    console.log('handle restart')
  }

  return (
    <div  className="flex flex-col gap-10 items-center justify-center w-11/12 sm:w-10/12 md:w-3/4 lg:w-1/2 h-screen border-2 mx-auto">
      <h1 className="font-bold text-3xl">Results</h1>
      <div className='flex flex-col w-9/12 gap-2'>
        <div className='flex items-center justify-between bg-sky-300 px-4 py-2 rounded-full gap-2'>
          <span className='font-bold'>Username: </span>
          <span className='font-semibold italic'>Kiril</span>
        </div>
        <div className='flex items-center justify-between bg-sky-300 px-4 py-2 rounded-full gap-2'>
          <span className='font-bold'>Total points: </span>
          <span className='font-semibold italic'>50 points</span>
        </div>
        <div className='flex items-center justify-between bg-sky-300 px-4 py-2 rounded-full gap-2'>
          <span className='font-bold'>Questions: </span>
          <span className='font-semibold italic'>5 questions</span>
        </div>
        <div className='flex items-center justify-between bg-sky-300 px-4 py-2 rounded-full gap-2'>
          <span className='font-bold'>Attempts: </span>
          <span className='font-semibold italic'>3 attempts</span>
        </div>
        <div className='flex items-center justify-between bg-sky-300 px-4 py-2 rounded-full gap-2'>
          <span className='font-bold'>Points: </span>
          <span className='font-semibold italic'>30 points</span>
        </div>
        <div className='flex items-center justify-between bg-sky-300 px-4 py-2 rounded-full gap-2'>
          <span className='font-bold'>Result: </span>
          <span className='font-semibold italic'>Passed</span>
        </div>
      </div>
      <button>
        <Link to={'/'} onClick={handleRestart}  className='bg-sky-500 px-10 py-3 rounded-full text-white font-semibold text-xl'>Restart</Link>
      </button>
      <div>
        <ResultTable/>
      </div>
    </div>
  )
}

export default Result
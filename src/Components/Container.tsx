import React from 'react'

const Container = ({children}:any) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      {children}
    </div>
  )
}

export default Container

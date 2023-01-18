import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'


export const Navbar = () => {
  return (
    <div className='bg-sky-700 h-[80px] min-h-[80px] items-center justify-evenly flex flex-row lg:flex-col  lg:p-10 lg:gap-20 lg:h-auto'>
        <LinkComponent to='/home' linkName='Home' />
        <LinkComponent to='/about' linkName='About'/>
        <LinkComponent to='/profile' linkName='Profile'/>
        <LinkComponent to='/contact' linkName='Contact'/>
    </div>
  )
}


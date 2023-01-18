import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'


export const Navbar = () => {
  return (
    <div className='flex flex-col bg-custom-hex h-screen min-h-[250px] w-1/6 justify-around items-center text-black '>
        <LinkComponent to='/home' linkName='Home' />
        <LinkComponent to='/about' linkName='About'/>
        <LinkComponent to='/profile' linkName='Profile'/>
        <LinkComponent to='/contact' linkName='Contact'/>
    </div>
  )
}


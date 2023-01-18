import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'


export const Navbar = () => {
  return (
    <div className='bg-sky-700 h-auto flex flex-col gap-20'>
        <LinkComponent to='/home' linkName='Home' />
        <LinkComponent to='/about' linkName='About'/>
        <LinkComponent to='/profile' linkName='Profile'/>
        <LinkComponent to='/contact' linkName='Contact'/>
    </div>
  )
}


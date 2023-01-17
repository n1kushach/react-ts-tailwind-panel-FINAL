import React from 'react'
import {Link} from 'react-router-dom'

interface Props {
    to: string;
    linkName: string;
}


const LinkComponent = ({to, linkName} : Props) => {
  return (
    <Link to={to} className='h-[50px] w-[150px] bg-custom-hex2 flex justify-center items-center hover:opacity-80'>{linkName}</Link>
  )
}

export default LinkComponent
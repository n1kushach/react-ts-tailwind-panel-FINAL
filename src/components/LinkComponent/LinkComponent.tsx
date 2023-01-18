import React from 'react'
import {Link} from 'react-router-dom'

interface Props {
    to: string;
    linkName: string;
}


const LinkComponent = ({to, linkName} : Props) => {
  return (
    <Link to={to} className=' bg-sky-100 p-3 flex text-sm justify-center items-center hover:opacity-80 rounded-lg'>{linkName}</Link>
  )
}

export default LinkComponent
import React from 'react'
import Link from "next/link"

const links = [
  {
    label: "Inicio",
    href:"/productos/all"
  },
  {
    label: "Frescos",
    href:"/productos/frescos"
  },
  {
    label: "Secos",
    href:"/productos/secos"
  },
  {
    label: "Conservas",
    href:"/productos/conservas"
  },
  {
    label: "Semillas",
    href:"/productos/semillas"
  }

]

const Navbar = () => {
  return (
    <nav className='w-full h-24 shadow-xl bg-white'>
      <div className='flex justify-between items-center h-full w-full px-4 2x1:px-16'>
        <Link href={"/"}>
        <div className="flex">
        <img
              alt="Logo"
              src="/favicon.png"
              width="30"
              height=""
              className="cursor-pointer"
        />
        <span className='px-4'>María Bárbara</span>
        </div>
        </Link>
        <div>
          {/* <ul className='flex'>
            <li className='ml-10 uppercase hover:border-b text-xl'>Inicio</li>
            <li className='ml-10 uppercase hover:border-b text-xl'>Frescos</li>
            <li className='ml-10 uppercase hover:border-b text-xl'>Secos</li>
            <li className='ml-10 uppercase hover:border-b text-xl'>Conservas</li>
            <li className='ml-10 uppercase hover:border-b text-xl'>Semilla</li>
          </ul> */}
          {
            links.map(link =>{
              return <Link 
              key={link.label}
              href={link.href}
              className={"ml-10 uppercase hover:border-b text-xl"}
              >
              {link.label}
              </Link>
            })
          }
        </div>
      </div>

    </nav>
  )
}

export default Navbar
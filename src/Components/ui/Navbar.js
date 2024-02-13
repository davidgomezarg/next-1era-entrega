import React from 'react'
import Link from "next/link"
import Image from 'next/image'

const links = [
  {
    label: "Inicio",
    href:"/"
  },
  {
    label: "Productos",
    href:"/productos/all"
  },
  {
    label: "Nosotros",
    href:"/nosotros"
  },
  {
    label: "Laboratorio",
    href:"/laboratorio"
  },
  {
    label: "Contacto",
    href:"/contacto"
  }

]

const Navbar = () => {
  return (
    <nav className='w-full h-16 shadow-xl bg-white'>
      <div className='flex justify-around items-center h-full w-full px-10 2x1:px-16'>
        <Link href={"/"}>
        <div className="flex">
        <Image
              alt="Logo"
              src="/favicon.png"
              width="30"
              height="30"
              className="cursor-pointer"
        />
        <span className='px-4'>María Bárbara</span>
        </div>
        </Link>
        <div>
          {
            links.map(link =>{
              return <Link 
              key={link.label}
              href={link.href}
              className={"ml-10 hover:border-b text-xl"}
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
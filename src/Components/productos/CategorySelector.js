"use client"
import React, { useState } from 'react'
import {ChevronDownIcon,ChevronUpIcon} from "@heroicons/react/24/outline"

function CategorySelector() {
    const [isOpen,setIsOpen] = useState(false);

    const change = ()=>{
        console.log("El valor es: ",isOpen)
        setIsOpen(!isOpen)
    }
  return (
    <div className='flex flex-col items-center w-[340px] rounded-lg '>
        <button type="button" onClick={change} className='bg-gray-200 shadow-lg p-2 m-4 w-full flex items-center justify-between
        font-bold text-lg rounded-lg tracking-wider border-4 border-transparent'>
            Categoria
            {!isOpen ? <ChevronDownIcon className= "h-4"/>:<ChevronUpIcon className='h-4'/>}
        </button>

        {isOpen && (
        <div className='bg-gray-200 font-bold top-40 flex flex-col items-start rounded-lg p-2 w-[340px] absolute'>
            <div className='flex flex-col w-full justify-between'>
                <a href="/productos/all">Todos</a>
                <a href="/productos/frescos">Frescos</a>
                <a href="/productos/secos">Secos</a>
                <a href="/productos/conservas">Conservas</a>
                <a href="/productos/semillas">Semilla</a>
            </div>
        </div>)}
    </div>
  )
}

export default CategorySelector
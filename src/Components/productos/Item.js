import React from 'react'
import Link from 'next/link'

function Item({ id, image, name, price, category }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
      <img className="w-full h-64" src="" alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/productos/detail/${id}`}>
        <button type="button"className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Detalles</button>
        </Link>
      </div>
    </div>
  )
}

export default Item
import Image from 'next/image';
import React from 'react'

interface carType {
    image: string;
    title: string;
    price: string;
    year: string;
    fuel: string;
    gear: string;
    color: string;
}

interface CardPropInterface {
    carDetails: carType
}

const CarCard = ({carDetails}: CardPropInterface) => {
  return (
    <div className='rounded-xl overflow-hidden border border-zinc-700 flex flex-col relative w-fit pb-3'>
        <Image src={carDetails.image} alt='Car Image' width={300} height={220} className='object-cover w-full'/>
        <div className='px-4 py-4 flex flex-col gap-1'>
            <h2 className='font-bold text-xl truncate'>{carDetails.title}</h2>
            <h3 className='text-[#FFD35B] font-semibold text-lg'>{carDetails.price}</h3>
            <div className='flex items-center gap-6 text-gray-400 text-sm'>
                <p>• {carDetails.year}</p>
                <p>• {carDetails.fuel}</p>
                <p>• {carDetails.gear}</p>
            </div>
            <p className='font-medium'>{carDetails.color}</p>
        </div>
    </div>
  )
}

export default CarCard
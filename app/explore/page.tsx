import { CarCard } from '@/components/index'
import Layout from '@/components/Layout'
import React from 'react'

const carDetails = {
  image: '/dodgeChallenger.jpg',
  title: "Dodge Challenger 2023",
  price: "£ 100,000",
  year: "2023",
  fuel: "Diesel",
  gear: "Auto",
  color: "Gray"
}

const Explore = () => {
  return (
    <Layout>
      <div className='h-screen overflow-y-scroll'>
        <div className='grid md:px-10 px-3 py-5 gap-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:flex flex-col w-full'>
          <CarCard carDetails={carDetails} />
          <CarCard carDetails={carDetails} />
          <CarCard carDetails={carDetails} />
          <CarCard carDetails={carDetails} />
          <CarCard carDetails={carDetails} />
          <CarCard carDetails={carDetails} />
        </div>
      </div>
    </Layout>
  )
}

export default Explore
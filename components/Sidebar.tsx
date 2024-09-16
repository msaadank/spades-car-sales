import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import CustomButton from './CustomButton'
import { ChevronFirst } from 'lucide-react' 
import { SidebarType } from '@/types'


const Sidebar = () => {
  return (
    <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-black shadow-sm'>
            <div className='p-4 pb2 flex justify-between'>
                <Image src={logo} alt='logo' />
                <ChevronFirst />
            </div>

            <ul className='flex-1 px-3'></ul>
        </nav>
    </aside>
  )
}

export const SidebarItem = ({text, active, alert}: SidebarType) => {
    return (
        <li>
            <span>{text}</span>
        </li>
    )
}

export default Sidebar
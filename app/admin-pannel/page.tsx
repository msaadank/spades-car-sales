"use client"

import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const AdminPannel = () => {

  const {data: session} = useSession()

  useEffect(() => {
    if(!session || !session.user){
      return
    }
  }, [])

  if(!session || !session.user){
    return (
      <div>
        Please login First
      </div>
    )
  }
  if(session.user.role !== 'admin') {
    return (
      <div>You are not an Admin! Unauthorized access</div>
    )
  }
  return (
    <div>AdminPannel</div>
  )
}

export default AdminPannel
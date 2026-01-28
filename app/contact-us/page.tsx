import MainLayout from '@/layout/main/Index'
import SayHelloPage from '@/views/SayHelloPage'
import React from 'react'

const page = () => {
  return (
    <MainLayout>
      <SayHelloPage />
    </MainLayout>
  )
}

export default page
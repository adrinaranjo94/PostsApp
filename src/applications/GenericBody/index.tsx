import Body from '@shared/UI/Body'
import Footer from '@shared/UI/Footer'
import NavBar from '@shared/UI/NavBar'
import React from 'react'

interface GenericBodyProps {
  children: React.ReactNode
}
const GenericBody = ({ children }: GenericBodyProps) => {
  return (
    <>
      <NavBar />
      <Body withNavBar>{children}</Body>
      <Footer />
    </>
  )
}

export default GenericBody

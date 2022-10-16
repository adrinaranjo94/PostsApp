import { ReactNode } from 'react'
import './style.scss'

interface BodyProps {
  withNavBar: boolean
  children: ReactNode
}
const Body = ({ withNavBar, children }: BodyProps) => {
  return <div className={`body${withNavBar ? ' body--navbar' : ''}`}>{children}</div>
}

export default Body

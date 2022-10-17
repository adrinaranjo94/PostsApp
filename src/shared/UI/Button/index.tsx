import { MouseEvent, ReactNode } from 'react'
import './style.scss'

interface ButtonProps {
  value?: string | number
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
const Button = ({ value, children, onClick }: ButtonProps) => {
  return (
    <button type='button' value={value} onClick={onClick} className='button'>
      {children}
    </button>
  )
}

export default Button

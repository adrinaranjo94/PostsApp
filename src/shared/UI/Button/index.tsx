import { MouseEvent, ReactNode } from 'react'
import './style.scss'

interface ButtonProps {
  value?: string | number
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  classes?: string[]
}
const Button = ({ value, children, onClick, classes }: ButtonProps) => {
  return (
    <button type='button' value={value} onClick={onClick} className={`button ${classes?.join(' ') || ''}`}>
      {children}
    </button>
  )
}

export default Button

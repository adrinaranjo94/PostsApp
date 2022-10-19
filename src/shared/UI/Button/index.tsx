import { MouseEvent, ReactNode } from 'react'
import './style.scss'

interface ButtonProps {
  value?: string | number
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  classes?: string[]
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}
const Button = ({ value, children, onClick, classes, disabled, type }: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      value={value}
      onClick={onClick}
      className={`button ${classes?.join(' ') || ''}`}
    >
      {children}
    </button>
  )
}

export default Button

import { MouseEventHandler, ReactNode } from 'react'
import './style.scss'

interface RowProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLTableRowElement>
}

const Row = ({ children, onClick }: RowProps) => {
  return (
    <tr onClick={onClick} className={`${onClick ? 'row--hover' : ''}`}>
      {children}
    </tr>
  )
}

export default Row

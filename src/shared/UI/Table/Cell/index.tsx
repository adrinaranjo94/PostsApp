import { ReactNode } from 'react'

interface CellProps {
  children: ReactNode
}

const Cell = ({ children }: CellProps) => {
  return <td>{children}</td>
}

export default Cell

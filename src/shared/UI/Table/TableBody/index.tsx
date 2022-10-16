import { ReactNode } from 'react'

interface TableBodyProps {
  children: ReactNode
}

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>
}

export default TableBody

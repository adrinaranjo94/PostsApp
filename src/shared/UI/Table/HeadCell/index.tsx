import { ReactNode } from 'react'

interface HeadCellProps {
  children: ReactNode
}

const HeadCell = ({ children }: HeadCellProps) => {
  return <th>{children}</th>
}

export default HeadCell

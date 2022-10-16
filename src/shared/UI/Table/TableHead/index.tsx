import { ReactNode } from 'react'

interface TableHeadProps {
  children: ReactNode
}
const TableHead = ({ children }: TableHeadProps) => {
  return <thead>{children}</thead>
}

export default TableHead

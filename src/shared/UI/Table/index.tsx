import { ReactNode } from 'react'
import './style.scss'

interface TableProps {
  children: ReactNode
}
const Table = ({ children }: TableProps) => {
  return <table>{children}</table>
}

export default Table

export { default as Body } from './TableBody'
export { default as Head } from './TableHead'
export { default as Row } from './Row'
export { default as Cell } from './Cell'

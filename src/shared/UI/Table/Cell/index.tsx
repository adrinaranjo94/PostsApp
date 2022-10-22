import { ReactNode } from 'react'
import './style.scss'

interface CellProps {
  children: ReactNode
  dataLabel?: string
  alignCenter?: boolean
}

const Cell = ({ children, dataLabel, alignCenter }: CellProps) => {
  return (
    <td data-label={dataLabel} className={alignCenter ? 'cell--alignCenter' : undefined}>
      {children}
    </td>
  )
}

export default Cell

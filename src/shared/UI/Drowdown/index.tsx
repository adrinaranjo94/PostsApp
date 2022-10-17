import Button from '../Button'
import './style.scss'

interface DropdownProps {
  optionSelected?: number | null
  options: number[]
  selectOption: (id: number | null) => void
  emptyOption: { key: number | null; textValue: string }
  name: string
}

const Dropdown = ({ optionSelected, options, selectOption, emptyOption, name }: DropdownProps) => {
  return (
    <div className='dropdown'>
      <Button>{optionSelected || emptyOption.textValue}</Button>
      <div className='dropdown__content'>
        {[emptyOption.key, ...options].map((option) => (
          <p key={`dropdown-${name}-item-${option || 'null'}`} onClick={() => selectOption(option)}>
            {option || emptyOption.textValue}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Dropdown

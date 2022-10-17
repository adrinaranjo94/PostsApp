import Button from '../Button'
import './style.scss'

export interface DropdownOption {
  key: number | null
  text: string
}

interface DropdownProps {
  optionSelected: number | null
  options: DropdownOption[]
  selectOption: (option: DropdownOption) => void
  name: string
}

const Dropdown = ({ optionSelected, options, selectOption, name }: DropdownProps) => {
  return (
    <div className='dropdown'>
      <Button>{options.find((option) => option.key === optionSelected)?.text}</Button>
      <div className='dropdown__content'>
        {[...options].map((option) => (
          <p key={`dropdown-${name}-item-${option.key || 'null'}`} onClick={() => selectOption(option)}>
            {option.text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Dropdown

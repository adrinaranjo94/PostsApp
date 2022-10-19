import './style.scss'

interface InputProps {
  type: React.HTMLInputTypeAttribute
  value: string
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({ type, name, value, onChange }: InputProps) => {
  return <input type={type} name={name} value={value} onChange={onChange} />
}

export default Input

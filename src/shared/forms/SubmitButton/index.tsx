import Button from '@shared/UI/Button'
import { ReactNode } from 'react'

interface SubmitButtonProps {
  disabled: boolean
  children: ReactNode
}

const SubmitButton = ({ disabled, children }: SubmitButtonProps) => {
  return (
    <Button type='submit' disabled={disabled}>
      {children}
    </Button>
  )
}

export default SubmitButton

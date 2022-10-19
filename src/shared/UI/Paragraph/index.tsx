import './style.scss'

interface ParagraphProps {
  children: string
  charsLimit?: number
}
const Paragraph = ({ children, charsLimit }: ParagraphProps) => {
  return <p>{charsLimit === undefined ? children : `${children.substring(0, charsLimit)}...`}</p>
}

export default Paragraph

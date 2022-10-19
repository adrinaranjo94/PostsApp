import usePostForm from '@domains/post/hooks/usePostForm'
import Input from '@shared/forms/Input'
import SubmitButton from '@shared/forms/SubmitButton'
import { usePostContext } from '../../hooks/usePostContext'

const FormPost = () => {
  const {
    state: { post, isLoading },
    editPost,
  } = usePostContext()
  const { values, onChangeInput, onSubmit } = usePostForm(post, editPost)
  return (
    <form onSubmit={onSubmit}>
      <label>Titulo</label>
      <Input type={'text'} name={'title'} value={values.title} onChange={onChangeInput} />
      <label>Cuerpo</label>
      <Input type={'text'} name={'body'} value={values.body} onChange={onChangeInput} />
      <SubmitButton disabled={isLoading}>Editar Post</SubmitButton>
    </form>
  )
}

export default FormPost

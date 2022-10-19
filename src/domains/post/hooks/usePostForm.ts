import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Post } from '../models/Post'

interface usePostFormResponse {
  values: Post
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const usePostForm = (initialValues: Post, cb: (post: Post) => void): usePostFormResponse => {
  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  const onChangeInput = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    cb(values)
  }

  return {
    values,
    onChangeInput,
    onSubmit,
  }
}

export default usePostForm

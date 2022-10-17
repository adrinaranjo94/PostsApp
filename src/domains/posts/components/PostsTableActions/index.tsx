import { useContext, useState } from 'react'
import { PostsContext } from '@domains/posts/contexts/PostsContext'
import Dropdown from '@shared/UI/Drowdown'

const PostsTableActions = () => {
  const {
    state: { users, userSelected },
    filterByUserId,
  } = useContext(PostsContext)

  const [userOptions] = useState(users)

  const selectOptionDropdownFilterByUserId = (userId: number | null) => {
    filterByUserId(userId)
  }
  return (
    <>
      <Dropdown
        name='userId'
        optionSelected={userSelected}
        options={userOptions}
        selectOption={selectOptionDropdownFilterByUserId}
        emptyOption={{ key: null, textValue: 'Sin filtrar' }}
      />
    </>
  )
}

export default PostsTableActions

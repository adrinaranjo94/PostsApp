import { ReactNode, useCallback, useState } from 'react'
import Dropdown from '@shared/UI/Drowdown'
import { usePostsContext } from '../../hooks/usePostsContext'

import './style.scss'
import PostsTable from '../PostsTable'
import { usePagination } from '@domains/posts/hooks/usePagination'
import { Post } from '../../models/Post'
import Button from '@shared/UI/Button'
import { createOptionsFromUsersId, defaultNumItemsPerPage, typesOfNumItemsPerPage } from './utils'
import { DropdownOption } from '@shared/UI/Drowdown/index'

const PostsTableActions = () => {
  const {
    state: { users, userSelected, isLoading, posts },
    filterByUserId,
  } = usePostsContext()

  const {
    itemsToShow,
    numPages,
    currentPage,
    itemsPerPage,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    changeNumItemsPerPage,
  } = usePagination<Post>(posts, defaultNumItemsPerPage)

  const [userOptions] = useState(createOptionsFromUsersId(users))

  const selectOptionDropdownFilterByUserId = (option: DropdownOption) => {
    filterByUserId(option.key)
  }

  const selectOptionDropdownItemsPerPage = (option: DropdownOption) => {
    changeNumItemsPerPage(option.key || defaultNumItemsPerPage)
  }

  const createListNumPages = useCallback(
    () =>
      [...Array(numPages).keys()]
        // Create arr pages
        .map((k) => k + 1)
        // Create button pages
        .map((page) => (
          <Button
            key={`page-${page}`}
            onClick={() => goToPage(page)}
            classes={[page === currentPage ? 'button--active' : '']}
          >
            {page}
          </Button>
        )),
    [numPages, goToPage, currentPage]
  )

  return (
    <>
      <div className='postsTableActions'>
        <div className='postsTableActions__filter'>
          <Dropdown
            name='userId'
            optionSelected={userSelected}
            options={userOptions}
            selectOption={selectOptionDropdownFilterByUserId}
          />
        </div>
      </div>
      {!isLoading && <PostsTable posts={itemsToShow} />}
      <div className='postsTablePagination'>
        <Button onClick={goToPreviousPage}>{'<'}</Button>
        {createListNumPages()}
        <Button onClick={goToNextPage}>{'>'}</Button>
        <Dropdown
          name='page'
          optionSelected={itemsPerPage}
          options={typesOfNumItemsPerPage}
          selectOption={selectOptionDropdownItemsPerPage}
        />
      </div>
    </>
  )
}

export default PostsTableActions

import { useCallback, useState } from 'react'
import Dropdown from '@shared/UI/Drowdown'
import { usePostsContext } from '../../hooks/usePostsContext'

import './style.scss'
import PostsTable from '../PostsTable'
import { usePagination } from '@domains/posts/hooks/usePagination'
import { Post } from '../../models/Post'
import Button from '@shared/UI/Button'
import {
  createArrPages,
  createOptionsFromUsersId,
  defaultNumItemsPerPage,
  typesOfNumItemsPerPage,
  keyTitleAsc,
  keyTitleDesc,
  keyUserIdAsc,
  keyUserIdDesc,
} from './utils'
import { DropdownOption } from '@shared/UI/Drowdown/index'
import { useSortPosts } from '@domains/posts/hooks/useSortPosts'

const PostsTableActions = () => {
  const {
    state: { users, userSelected, isLoading, posts },
    filterByUserId,
  } = usePostsContext()

  const { arrSorted, keySelected, selectKeyToSort } = useSortPosts(null, posts)
  const { itemsToShow, numPages, currentPage, itemsPerPage, actions } = usePagination<Post>(
    arrSorted,
    defaultNumItemsPerPage
  )

  const [userOptions] = useState(createOptionsFromUsersId(users))

  const selectOptionDropdownFilterByUserId = (option: DropdownOption) => {
    filterByUserId(option.key)
  }

  const selectOptionDropdownItemsPerPage = (option: DropdownOption) => {
    actions.changeNumItemsPerPage(option.key || defaultNumItemsPerPage)
  }

  const createListNumPages = useCallback(
    () =>
      createArrPages(numPages).map((page) => (
        <Button
          key={`page-${page}`}
          onClick={() => actions.goToPage(page)}
          classes={[page === currentPage ? 'button--active' : '']}
        >
          {page}
        </Button>
      )),
    [numPages, actions, currentPage]
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
        <div className='postsTableActions__sorts'>
          <div className='postsTableActions__sortsContent'>
            <Button
              onClick={() => selectKeyToSort(keyTitleAsc)}
              classes={[keyTitleAsc === keySelected ? 'button--active' : '']}
            >
              Ordenar titulo asc
            </Button>
            <Button
              onClick={() => selectKeyToSort(keyTitleDesc)}
              classes={[keyTitleDesc === keySelected ? 'button--active' : '']}
            >
              Ordenar titulo desc
            </Button>
            <Button
              onClick={() => selectKeyToSort(keyUserIdAsc)}
              classes={[keyUserIdAsc === keySelected ? 'button--active' : '']}
            >
              Ordenar ID usuario asc
            </Button>
            <Button
              onClick={() => selectKeyToSort(keyUserIdDesc)}
              classes={[keyUserIdDesc === keySelected ? 'button--active' : '']}
            >
              Ordenar ID usuario desc
            </Button>
          </div>
        </div>
      </div>
      {!isLoading && <PostsTable posts={itemsToShow} />}
      <div className='postsTablePagination'>
        <Button onClick={actions.goToPreviousPage}>{'<'}</Button>
        {createListNumPages()}
        <Button onClick={actions.goToNextPage}>{'>'}</Button>
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

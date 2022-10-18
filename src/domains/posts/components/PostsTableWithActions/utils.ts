import { DropdownOption } from '@shared/UI/Drowdown/index'
import { KeyToSort, sortDirection, typeVar } from '../../hooks/useSortPosts'

export const typesOfNumItemsPerPage: DropdownOption[] = [
  { key: 5, text: '5' },
  { key: 10, text: '10' },
  { key: 20, text: '20' },
  { key: 50, text: '50' },
  { key: 100, text: '100' },
]

export const defaultNumItemsPerPage = 20

export const createOptionsFromUsersId = (users: number[]): DropdownOption[] => {
  return [{ key: null, text: 'Sin filtrar' }, ...users.map((user) => ({ key: user, text: `${user}` }))]
}

export const createArrPages = (numPages: number) => {
  return (
    [...Array(numPages).keys()]
      // Create arr pages
      .map((k) => k + 1)
  )
}

export const keyTitleAsc: KeyToSort = { key: 'title', direction: sortDirection.asc, type: typeVar.string }
export const keyTitleDesc: KeyToSort = { key: 'title', direction: sortDirection.desc, type: typeVar.string }

export const keyUserIdAsc: KeyToSort = { key: 'userId', direction: sortDirection.asc, type: typeVar.number }
export const keyUserIdDesc: KeyToSort = { key: 'userId', direction: sortDirection.desc, type: typeVar.number }

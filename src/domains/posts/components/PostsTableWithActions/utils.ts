import { DropdownOption } from '@shared/UI/Drowdown/index'

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

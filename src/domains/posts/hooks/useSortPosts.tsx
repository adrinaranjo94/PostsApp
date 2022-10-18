import { useCallback, useEffect, useState } from 'react'
import { Post } from '../models/Post'

interface useSortPostsResponse {
  arrSorted: Post[]
  selectKeyToSort: (key: KeyToSort) => void
  keySelected: KeyToSort | null
}

export interface KeyToSort {
  key: keyof Post
  type: typeVar
  direction: sortDirection
}

export enum typeVar {
  'string',
  'number',
}

export enum sortDirection {
  'asc',
  'desc',
}

function useSortPosts(keyToSort: KeyToSort | null, arr: Post[]): useSortPostsResponse {
  const [arrayToSort, setArrayToSort] = useState(arr)
  const [arrSorted, setArrSorted] = useState(arr)
  const [keySelected, setKeySelected] = useState(keyToSort)

  useEffect(() => {
    setArrayToSort(arr)
  }, [arr])

  const selectKeyToSort = (key: KeyToSort | null) => {
    setKeySelected(key)
  }

  const sortArrByKey = useCallback(
    (keyToSort: KeyToSort) => {
      return arrayToSort.slice().sort((a, b) => {
        if (keyToSort.type === typeVar.string) {
          // asc
          return keyToSort.direction === sortDirection.asc
            ? (a[keyToSort.key] as string).toLowerCase() > (b[keyToSort.key] as string).toLowerCase()
              ? 1
              : -1
            : (a[keyToSort.key] as string).toLowerCase() > (b[keyToSort.key] as string).toLowerCase()
            ? -1
            : 1
        } else if (keyToSort.type === typeVar.number) {
          return keyToSort.direction === sortDirection.asc
            ? (a[keyToSort.key] as number) - (b[keyToSort.key] as number)
            : (b[keyToSort.key] as number) - (a[keyToSort.key] as number)
        }
        return 0
      })
    },
    [arrayToSort]
  )

  useEffect(() => {
    if (keySelected) {
      setArrSorted(sortArrByKey(keySelected))
    } else {
      setArrSorted(arrayToSort)
    }
  }, [keySelected, sortArrByKey, arrayToSort])

  return { arrSorted, selectKeyToSort, keySelected }
}

export { useSortPosts }

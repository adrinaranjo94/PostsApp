import { useCallback, useEffect, useState } from 'react'

interface usePaginationResponse<T> {
  itemsToShow: T[]
  numPages: number
  currentPage: number
  itemsPerPage: number
  goToNextPage: () => void
  goToPreviousPage: () => void
  goToPage: (page: number) => void
  changeNumItemsPerPage: (numItems: number) => void
}

function usePagination<T>(items: T[], numItemsPerPage: number): usePaginationResponse<T> {
  const [totalItems, setTotalItems] = useState(items)
  const [itemsToShow, setItemsToShow] = useState(items)
  const [itemsPerPage, setItemsPerPage] = useState(numItemsPerPage)
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const getNumPages = useCallback(
    (_items: T[]) => {
      return Math.ceil(_items.length / itemsPerPage)
    },
    [itemsPerPage]
  )

  const createItemsPerPage = useCallback(() => {
    const initialPositionItem = (currentPage - 1) * itemsPerPage
    const finalPositionItem = currentPage - 1 < numPages ? currentPage * itemsPerPage : undefined

    return totalItems.slice(initialPositionItem, finalPositionItem)
  }, [currentPage, itemsPerPage, numPages, totalItems])

  useEffect(() => {
    setTotalItems(items)
    setNumPages(getNumPages(items))
    setCurrentPage(1)
  }, [items, getNumPages])

  useEffect(() => {
    setItemsToShow(createItemsPerPage())
  }, [numPages, currentPage, createItemsPerPage])

  const goToNextPage = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToPage = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= numPages) {
      setCurrentPage(page)
    }
  }

  const changeNumItemsPerPage = (numItems: number) => {
    setItemsPerPage(numItems)
  }

  return {
    itemsToShow,
    numPages,
    currentPage,
    itemsPerPage,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    changeNumItemsPerPage,
  }
}

export { usePagination }

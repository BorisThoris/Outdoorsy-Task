import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border-radius: 8px;
  border: 1.9px double darkgray;
`

interface SearchBarProps {
  refetchRentals: (searchValue: string) => void
}

export const SearchBar = ({ refetchRentals }: SearchBarProps) => {
  const [search, setSearch] = useState('')
  const debouncedRefetch = useCallback(
    _.debounce((val) => refetchRentals(val), 1500),
    [refetchRentals],
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      debouncedRefetch(e.target.value.toLowerCase())
    },
    [debouncedRefetch],
  )

  return (
    <SearchInput
      data-test-id="search-input"
      onChange={handleChange}
      value={search}
    />
  )
}

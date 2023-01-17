import React, { useState } from 'react'
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
  const debouncedRefetch = _.debounce((val) => refetchRentals(val), 1500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedRefetch(e.target.value)
  }

  return <SearchInput onChange={handleChange} />
}

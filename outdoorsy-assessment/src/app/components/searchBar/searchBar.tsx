import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
  width: 100%;
  height: 40px;

  padding-left: 10px;
  border-radius: 8px;

  border: 1.9px double darkgray;
`

export const SearchBar = () => {
  return <SearchInput />
}

import React from 'react'
import styled from 'styled-components'

const RvCard = styled.div`
  background-color: red;
`

interface Image {
  id: number
  url: string
}

interface Rental {
  id: number
  name: string
  description: string
  images: Image[]
}

const RvPreview = ({ rental }: { rental: Rental }) => {
  return (
    <RvCard>
      <img width="200" height="180" src={rental.images[0].url} />
      <div>{rental.description}</div>
    </RvCard>
  )
}

export default RvPreview

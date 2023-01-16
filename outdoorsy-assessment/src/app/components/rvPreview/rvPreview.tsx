import React from 'react'
import styled from 'styled-components'
import { Rental } from '../../sharedTypes/rental'

const RvCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4%;
`
interface ImageProps {
  background: string
}

const RvImage = styled.div<ImageProps>`
  min-width: 160px;
  height: 110px;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: round;
  border-radius: 5%;
  margin-right: 1%;
`

const RvDesc = styled.div`
  color: darkgray;
  width: 280px;
`

interface RvImage {
  url: string
}

const RvPreview = ({ rental }: { rental: Rental }) => {
  return (
    <RvCard>
      <RvImage background={rental.images[0].url} />
      <RvDesc>{rental.name}</RvDesc>
    </RvCard>
  )
}

export default RvPreview

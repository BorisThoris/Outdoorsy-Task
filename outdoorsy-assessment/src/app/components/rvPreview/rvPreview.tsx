import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { Rental } from '../../sharedTypes/rental'
import { brokenUrl } from '../../../constants'

const RvCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8%;
`
interface ImageProps {
  background: string
}

const RvImage = styled.div<ImageProps>`
  min-width: 40%;
  height: 10vh;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: round;
  border-radius: 5%;
  margin-right: 1%;
`

const RvDesc = styled.div`
  color: darkslategray;
  width: 280px;

  font-size: 60%;
`

interface RvImage {
  url: string
}

export const RvPreview = ({ rental }: { rental: Rental }) => {
  const imageUrl = _.get(rental, 'images[0].url', brokenUrl)

  return (
    <RvCard>
      <RvImage data-test-id="preview-image" background={`${imageUrl}`} />
      <RvDesc data-test-id="preview-name">{rental.name}</RvDesc>
    </RvCard>
  )
}

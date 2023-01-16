import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { Rental } from '../../sharedTypes/rental'
import { brokenUrl } from '../../../constants'

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

export const RvPreview = ({ rental }: { rental: Rental }) => {
  const imageUrl = _.get(rental, 'images[0].url', brokenUrl)

  return (
    <RvCard>
      <RvImage data-test-id="preview-image" background={`${imageUrl}`} />
      <RvDesc data-test-id="preview-name">{rental.name}</RvDesc>
    </RvCard>
  )
}

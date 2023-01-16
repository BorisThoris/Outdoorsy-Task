import React from 'react'

import { shallow, configure } from 'enzyme'
import '../../../setupTests'

import RvPreview from './rvPreview'

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

describe('RvPreview', () => {
  it('should render the rental name', () => {
    const rental: Rental = {
      id: 1,
      name: 'Test Rental',
      description: '',
      images: [],
    }
    const wrapper = shallow(<RvPreview rental={rental} />)

    expect(wrapper.find('div').text()).toBe(rental.name)
  })
})

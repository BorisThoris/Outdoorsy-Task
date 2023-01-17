import React from 'react'
import { shallow } from 'enzyme'

import '../../../setupTests'

import { RvPreview } from './index'
import { Rental } from '../../sharedTypes/rental'
import { brokenUrl } from '../../../constants'

describe('RvPreview', () => {
  it('should render the rental name', () => {
    const rental: Rental = {
      id: 1,
      name: 'Test Rental',
      description: '',
      images: [],
    }
    const wrapper = shallow(<RvPreview rental={rental} />)
    expect(wrapper.find({ 'data-test-id': 'preview-name' }).text()).toBe(
      rental.name,
    )
  })

  it('should render the rental image if present', () => {
    const rental: Rental = {
      id: 1,
      name: 'Test Rental',
      description: '',
      images: [{ id: 1, url: 'test.jpg' }],
    }

    const wrapper = shallow(<RvPreview rental={rental} />)
    const previewImage = wrapper.find({ 'data-test-id': 'preview-image' })
    expect(previewImage.props().background).toBe(rental.images[0].url)
  })

  it('should not render the rental image if missing', () => {
    const rental: Rental = {
      id: 1,
      name: 'Test Rental',
      description: '',
      images: [],
    }

    const wrapper = shallow(<RvPreview rental={rental} />)
    const previewImage = wrapper.find({ 'data-test-id': 'preview-image' })
    expect(previewImage.props().background).toBe(brokenUrl)
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'
import '../../../setupTests'

import { SearchBar } from './index'

jest.mock('lodash', () => {
  return {
    debounce: jest.fn((fn) => fn),
  }
})

describe('SearchBar', () => {
  const mockRefetch = jest.fn()

  it('should render the input element', () => {
    const wrapper = shallow(<SearchBar refetchRentals={mockRefetch} />)

    expect(wrapper.find({ 'data-test-id': 'search-input' }).length).toBe(1)
  })

  it('should call refetchRentals when the input value changes', async () => {
    const wrapper = shallow(<SearchBar refetchRentals={mockRefetch} />)
    const input = wrapper.find({ 'data-test-id': 'search-input' })

    input.simulate('change', { target: { value: 'test' } })
    await new Promise((resolve) => setTimeout(resolve, 1500)) // wait for debounce to finish

    expect(mockRefetch).toHaveBeenCalledWith('test')
  })
})

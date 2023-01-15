import React from 'react'

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

const RvPreview = (rental: Rental) => {
  console.log('curr rental')
  console.log(rental)
  console.log('image')
  console.log(rental.images[0].url)
  console.log('   ')

  return (
    <div>
      <img width="200" height="180" src={rental.images[0].url} />
      <div>{rental.name}</div>
    </div>
  )
}

export default RvPreview

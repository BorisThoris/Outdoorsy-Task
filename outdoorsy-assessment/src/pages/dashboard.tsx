import { useState, useEffect } from 'react'
import _ from 'lodash'
import { useFetchRentals } from '@/app/hooks/useFetchRental'

interface Rental {
  id: number
  name: string
}

const Dashboard = () => {
  const { rentals, error, loading } = useFetchRentals()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (_.isEmpty(rentals)) return <p>No Data</p>

  return (
    <div>
      {rentals?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}

export default Dashboard

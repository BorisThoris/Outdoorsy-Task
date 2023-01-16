import React from 'react'
import _ from 'lodash'

import { useFetchRentals } from '@/app/hooks/useFetchRental'
import { RvPreview } from '@/app/components/rvPreview/rvPreview'

import SearchBar from '@/app/components/searchBar/searchBar'

const Dashboard = () => {
  const { rentals, error, loading } = useFetchRentals()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (_.isEmpty(rentals)) return <p>No Data</p>

  return (
    <div>
      <SearchBar />

      {rentals?.map((item) => (
        <RvPreview key={item.id} rental={item} />
      ))}
    </div>
  )
}

export default Dashboard

import React from 'react'
import _ from 'lodash'

import { useFetchRentals } from '../app/hooks/useFetchRental'
import { RvPreview } from '../app/components/rvPreview'
import { SearchBar } from '../app/components/searchBar'

import { Rental } from '@/app/sharedTypes/rental'

const Dashboard = () => {
  const { rentals, error, loading, refetchRentals } = useFetchRentals()

  if (error) return <p>Error: {error.message}</p>
  if (_.isEmpty(rentals)) return <p>No Data</p>

  return (
    <div>
      <SearchBar refetchRentals={refetchRentals} />

      {!loading ? (
        rentals?.map((item: Rental) => (
          <RvPreview key={item.id} rental={item} />
        ))
      ) : (
        <div>Rentals loading</div>
      )}
    </div>
  )
}

export default Dashboard

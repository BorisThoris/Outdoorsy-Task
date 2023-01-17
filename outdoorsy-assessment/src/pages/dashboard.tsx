import React from 'react'
import _ from 'lodash'

import { useFetchRentals } from '../app/hooks/useFetchRental'
import { RvPreview } from '../app/components/rvPreview'
import { SearchBar } from '../app/components/searchBar'

const Dashboard = () => {
  const { rentals, error, loading, refetchRentals } = useFetchRentals()

  if (error) return <p>Error: {error.message}</p>
  if (_.isEmpty(rentals)) return <p>No Data</p>

  return (
    <div>
      <SearchBar refetchRentals={refetchRentals} />

      {!loading ? (
        rentals?.map((item) => <RvPreview key={item.id} rental={item} />)
      ) : (
        <div>Rentals loading</div>
      )}
    </div>
  )
}

export default Dashboard

import _ from 'lodash'
import { useFetchRentals } from '@/app/hooks/useFetchRental'

import SearchBar from '@/app/components/searchBar/searchBar'
import RvPreview from '@/app/components/rvPreview/rvPreview'

const Dashboard = () => {
  const { rentals, error, loading } = useFetchRentals()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (_.isEmpty(rentals)) return <p>No Data</p>

  console.log('here')
  console.log(rentals)

  return (
    <div>
      <SearchBar />

      {rentals?.map((item) => (
        <RvPreview key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Dashboard

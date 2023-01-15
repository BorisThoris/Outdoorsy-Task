import { useState, useEffect } from 'react'
import _ from 'lodash'

interface Rental {
  id: number
  name: string
}

interface Data {
  rentals: Rental[] | null
  error: Error | null
  loading: boolean
}

export const useFetchRentals = (): Data => {
    const [rentals, setRentals] = useState<Rental[] | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const res = await fetch(
            'https://search.outdoorsy.com/rentals?raw_json=true&seo_links=true&education=true&average_daily_pricing=true&bounds[ne]=48.98092525847389%2C-78.96109168750172&bounds[sw]=-8.694261853521098%2C-94.03274245586124&currency=USD&filter[exclude_type]=utility-trailer%2Ctow-vehicle%2Cother&locale=en-us&page[limit]=24&page[offset]=0&suggested=true',
          )
          const json = await res.json()
          setRentals(_.get(json, 'data'))
          setLoading(false)
        } catch (err) {
          setError(err)
          setLoading(false)
        }
      }
      fetchData()
    }, [])
  
    return { rentals, error, loading }
  }
  
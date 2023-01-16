import { useState, useEffect } from 'react'
import _ from 'lodash'

import { Rental } from '../sharedTypes/rental'

interface Data {
  rentals: Rental[] | null
  error: any
  loading: boolean
}

export const useFetchRentals = (): Data => {
    const [rentals, setRentals] = useState<Rental[] | null>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const res = await fetch(
            'https://search.outdoorsy.com/rentals?raw_json=true&seo_links=true&education=true&average_daily_pricing=true&bounds[ne]=48.98092525847389%2C-78.96109168750172&bounds[sw]=-8.694261853521098%2C-94.03274245586124&currency=USD&filter[exclude_type]=utility-trailer%2Ctow-vehicle%2Cother&locale=en-us&page[limit]=24&page[offset]=0&suggested=true',
          )
          const json = await res.json()
          setRentals(json.data.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              images: item.images.map((img: any) => {
                return {
                  id: img.id,
                  url: img.url
                }
              })
            }
          }))
          setLoading(false)
        } catch (error) {
          setError(error)
          setLoading(false)
        }
      }
      fetchData()
    }, [])
  
    return { rentals, error, loading }
  }

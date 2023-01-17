import { useState, useEffect } from 'react'
import _ from 'lodash'

import { Rental } from '../sharedTypes/rental'

interface Data {
  rentals: Rental[] | null;
  error: any;
  loading: boolean;
  refetchRentals: (type?: string) => Promise<void>;
}

export const useFetchRentals = (type?:string): Data => {
    const [rentals, setRentals] = useState<Rental[] | null>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    const refetch = async (type?:string) => {
        setLoading(true)
        try {
          const fetchType = _.isUndefined(type) ? 'utility-trailer,tow-vehicle,other' : type
          const res = await fetch(
            `https://search.outdoorsy.com/rentals?raw_json=true&seo_links=true&education=true&average_daily_pricing=true&bounds[ne]=48.98092525847389%2C-78.96109168750172&bounds[sw]=-8.694261853521098%2C-94.03274245586124&currency=USD&filter[type]=${fetchType}&locale=en-us&page[limit]=24&page[offset]=0&suggested=true`,
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

    useEffect(() => {
      refetch(type)
    }, [type])
  
    return { rentals, error, loading, refetchRentals:refetch }
  }

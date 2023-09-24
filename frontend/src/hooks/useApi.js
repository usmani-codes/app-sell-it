import { useState } from 'react'

const useApi = (apiFunc) => {
  const [data, setListings] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async () => {
    try {
      setLoading(true)
      const res = await apiFunc()
      setLoading(false)

      if (!res.ok) return setError(true)

      setError(false)
      setListings(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return { data, error, loading, request }
}

export default useApi

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SearchUser(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setUsers([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: '/api/users',
      params: { query, pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setUsers(prevUsers => {
        return [...prevUsers, ...res.data.users]
      })
      setHasMore(res.data.users.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, users, hasMore }
}
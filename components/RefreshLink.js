'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const RefreshLink = ({ href, children }) => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const router = useRouter()

  const refreshPage = () => {
    router.replace(router.asPath) // This triggers a refresh of the current page
    setIsRefreshing(true)
  }

  useEffect(() => {
    setIsRefreshing(false)
  }, [])

  return (
    <Link href={href} as={href} onClick={refreshPage}>
      {children}
    </Link>
  )
}

export default RefreshLink

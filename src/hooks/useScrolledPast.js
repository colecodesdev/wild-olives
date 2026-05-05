import { useEffect, useState } from 'react'

export default function useScrolledPast(threshold = 80) {
  const [isPast, setIsPast] = useState(() =>
    typeof window !== 'undefined' && window.scrollY > threshold
  )

  useEffect(() => {
    const onScroll = () => setIsPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isPast
}

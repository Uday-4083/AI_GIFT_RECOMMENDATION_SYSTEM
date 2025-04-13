"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the LandingPage component
const LandingPage = dynamic(() => import('@/components/LandingPage'), {
  loading: () => <div>Loading...</div>,
})

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage />
    </Suspense>
  )
}
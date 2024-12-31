'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './index'

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)
  console.log("store provideor",storeRef)
  if (!storeRef.current) {
  console.log("store provideor2",storeRef)

    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  console.log("store provideor2",storeRef)

  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
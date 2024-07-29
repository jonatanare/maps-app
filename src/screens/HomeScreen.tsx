import React from 'react'
import { BtnMyLocation, MapView, LogoView, SearchBar } from '../components'

export const HomeScreen = () => {
  return (
    <div>
        <MapView />
        <BtnMyLocation />
        <LogoView />
        <SearchBar />
    </div>
  )
}

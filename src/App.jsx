import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'

function App() {
  return (
    <>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  )
}

export default App

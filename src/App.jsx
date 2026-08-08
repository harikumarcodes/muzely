import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'

function App() {
  return (
    <>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  )
}

export default App

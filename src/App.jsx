import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'

const tracks = [
  {
    id: 1,
    name: 'Beat It',
    artist: 'Michael Jackson',
    album: 'Thiller'
  },
  {
    id: 2,
    name: 'Smooth Criminal',
    artist: 'Michael Jackson',
    album: 'Bad'
  },
  {
    id: 3,
    name: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thiller'
  },
]

function App() {
  return (
    <>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults tracks={tracks} />
      <Playlist tracks={tracks} />
    </>
  )
}

export default App

function Track({isInPlaylist}) {
  return (
    <>
      <h3>Track Title</h3>
      <p>Artist | Album</p>
      <button>{isInPlaylist ? '-' : '+'}</button>
    </>
  )
}

export default Track

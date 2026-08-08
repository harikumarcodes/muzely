function Track({ track, isInPlaylist }) {
  return (
    <>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      <button>{isInPlaylist ? '-' : '+'}</button>
    </>
  )
}

export default Track

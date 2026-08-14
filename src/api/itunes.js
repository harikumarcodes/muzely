const BASE_URL = "https://itunes.apple.com/search"

const itunes = {
  async search(term, limit=10) {
    const params = new URLSearchParams({
      media: 'music',
      term,
      limit,
    })

    const url = `${BASE_URL}?${params}`

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`iTunes API request failed: ${response.status}`)
      }

      const json = await response.json()
      return json.results
    } catch(e) {
      console.error(e)
    }
  }
}

export default itunes

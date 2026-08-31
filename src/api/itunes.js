const API_URL = "/api/search"

const itunes = {
  async search(term, limit=10) {
    const params = new URLSearchParams({
      media: 'music',
      term,
      limit,
    })

    const url = `${API_URL}?${params}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`iTunes API request failed: ${response.status}`)
    }

    const json = await response.json()
    return json.results
  }
}

export default itunes

const BASE_URL = "https://itunes.apple.com/search" 

export default {
	async fetch(request) {
		const url = new URL(request.url)

		if (url.pathname === "/api/search") {
      const searchUrl = `${BASE_URL}?${url.searchParams}`

      return fetch(searchUrl)
		}

		return new Response(null, { status: 404 })
	},
}

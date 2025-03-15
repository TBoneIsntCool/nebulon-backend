addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Fetch the server status data
  const serverData = await fetchServerData()

  // Optionally, you can store the data in a GitHub repository using GitHub API
  // We'll skip the GitHub API interaction for now

  // Return the server data as JSON to the client
  return new Response(JSON.stringify(serverData), {
    headers: { 'Content-Type': 'application/json' }
  })
}

async function fetchServerData() {
  const url = 'https://astroservercheck.joejoetv.de/api/check?url=147.185.221.16:23237'  // Example URL, replace with your actual server URL
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error('Error fetching server data')
  }

  const data = await response.json()

  // Here you can choose to update your GitHub repository with the fetched data (if you want to store it)
  // Example using GitHub API (not included in this code snippet, requires authentication)

  return {
    onlinePlayers: data.server.onlinePlayers,
    maxPlayers: data.server.maxPlayers,
    serverName: data.server.serverName,
    status: data.server.network ? 'Online' : 'Offline'
  }
}

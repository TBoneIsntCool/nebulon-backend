addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    const serverData = await fetchServerData()
    
    return new Response(JSON.stringify(serverData), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow any origin
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allow these methods
        'Access-Control-Allow-Headers': 'Content-Type', // Allow the Content-Type header
      }
    })
  } catch (error) {
    return new Response('Error occurred: ' + error.message, { status: 500 })
  }
}

async function fetchServerData() {
  const response = await fetch('https://astroservercheck.joejoetv.de/api/check?url=147.185.221.16:23237')
  const data = await response.json()
  return data.server // You can adjust this based on the data you want to return
}

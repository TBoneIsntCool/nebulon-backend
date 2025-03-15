addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const apiUrl = 'https://astroservercheck.joejoetv.de/api/check?url=147.185.221.16:23237'; // Your API URL
  try {
    const apiResponse = await fetch(apiUrl);
    if (!apiResponse.ok) {
      return new Response('Error fetching data from the API', { status: 500 });
    }
    const data = await apiResponse.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response('Error with the worker request', { status: 500 });
  }
}

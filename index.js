addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const apiUrl = 'https://astroservercheck.joejoetv.de/api/check';
  
  const data = { url: "147.185.221.16:23237" };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  return new Response(JSON.stringify(json), {
    headers: { 'Content-Type': 'application/json' }
  });
}

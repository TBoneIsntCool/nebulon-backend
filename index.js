addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Fetch the external page
  const response = await fetch('https://astroservercheck.joejoetv.de/?url=147.185.221.16:23237');
  const html = await response.text();

  let playerCount = "Not found";
  // Regular expression to find the table row with "Players" and extract the next cell's content
  const regex = /<tr>\s*<td[^>]*>\s*Players\s*<\/td>\s*<td[^>]*>\s*(.*?)\s*<\/td>/i;
  const match = regex.exec(html);
  if (match) {
    playerCount = match[1].trim();
  }

  return new Response(JSON.stringify({ playerCount }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

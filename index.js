addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch('https://www.nvunheard.org/shop', {
    headers: {
      'User-Agent': request.headers.get('User-Agent'),
      'Accept': request.headers.get('Accept'),
      'Cookie': request.headers.get('Cookie') || ''
    }
  })

  return new Response(await response.text(), {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'cache-control': 'public, max-age=3600'
    }
  })
}

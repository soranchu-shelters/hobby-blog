addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  if (url.pathname.startsWith('/photo/') || url.pathname === '/photo') {
    handleWebsite(event, url)
  } else {
    event.respondWith(fetch(event.request))
  }
  event.respondWith(handleRequest(event.request))
})

async function handleWebsite(event, url) {
  const originUrl = url.toString().replace(
    'https://soratabi.nekohack.me/photo',
    'https://hobby-blog-aer.pages.dev'
  )
  event.respondWith(fetch(originUrl))
}

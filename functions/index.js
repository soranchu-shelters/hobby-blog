addEventListener('fetch', event => {
  event.respondWith(handleWebsite(event.request))
})

async function handleWebsite(request) {
  const redirectMap = new Map([
    ['/', 'https://soratabi.nekohack.me/photo'],
  ])
  const redirectHttpCode = 301
  Response.redirect(redirectMap.get((new URL(request.url)).pathname), redirectHttpCode)
}

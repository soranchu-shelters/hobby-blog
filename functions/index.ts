/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  	const { url } = request
    const domain = 'soratabi.nekohack.me'
	  const { search, pathname, protocol } = new URL(url)

  	if (pathname.indexOf('/contents') === 0) {
      const req = new Request(`${protocol}//${domain}${pathname}${search}`, {
	      body: request.body,
	      headers: request.headers,
		    method: request.method,
		    redirect: request.redirect,
  	  })
	    return fetch(req)
    }

    throw new Response('Not match', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    })
  },
}

/**
 * Global Energy Intelligence Hub Worker
 * 
 * This Worker serves the interactive energy intelligence hub with static assets.
 * 
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		// Handle static assets
		try {
			// Try to get the asset from the static assets
			const asset = await env.ASSETS.fetch(request);

			// If asset is found, return it
			if (asset.status !== 404) {
				return asset;
			}
		} catch (error) {
			console.error('Error fetching asset:', error);
		}

		// Handle specific routes
		switch (url.pathname) {
			case '/':
				// Serve the main intelligence hub
				try {
					return await env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
				} catch {
					return new Response('Intelligence Hub not found', { status: 404 });
				}

			case '/health':
				return new Response('Energy Intelligence Hub is running!', {
					status: 200,
					headers: { 'Content-Type': 'text/plain' }
				});

			case '/api/info':
				return new Response(JSON.stringify({
					name: 'Global Energy Intelligence Hub',
					version: '2.0.0',
					description: 'Interactive hub for monitoring global energy supply with source attribution',
					features: [
						'Supply capacity monitoring',
						'Monthly time series',
						'Period-over-period comparisons',
						'Source attribution',
						'Global aggregates'
					]
				}), {
					headers: { 'Content-Type': 'application/json' }
				});

			default:
				return new Response('Not Found', { status: 404 });
		}
	},
} satisfies ExportedHandler<Env>;

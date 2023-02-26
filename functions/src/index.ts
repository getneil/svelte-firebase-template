import * as functions from 'firebase-functions/v2';

// @ts-ignore add as global to reduce loading/require delay
let ssrServerServer: any;
export const server = functions.https.onRequest({ cors: true }, async (request, response) => {
	if (!ssrServerServer) {
		functions.logger.info('Initialising SvelteKit SSR entry');
		// @ts-ignore ssrServer index is generated on build time
		ssrServerServer = require('./ssrServer/index').default;
		functions.logger.info('SvelteKit SSR entry initialised!');
	}
	functions.logger.info('Requested resource: ' + request.originalUrl);
	return ssrServerServer(request, response);
});

import * as functions from 'firebase-functions';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info('Hello logs!', { structuredData: true });
	response.send('Hello from Firebase!');
});

// @ts-ignore add as global to reduce loading/require delay
let serverServer: any;
export const server = functions.region('us-central1').https.onRequest(async (request, response) => {
	if (!serverServer) {
		functions.logger.info('Initialising SvelteKit SSR entry');
		// @ts-ignore ssrServer index is generated on build time
		serverServer = require('./ssrServer/index').default;
		functions.logger.info('SvelteKit SSR entry initialised!');
	}
	functions.logger.info('Requested resource: ' + request.originalUrl);
	return serverServer(request, response);
});

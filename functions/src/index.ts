import * as functions from 'firebase-functions';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info('Hello logs!', { structuredData: true });
	response.send('Hello from Firebase!');
});

let ssrServerServer: any;
export const ssrServer = functions
	.region('us-central1')
	.https.onRequest(async (request, response) => {
		if (!ssrServerServer) {
			functions.logger.info('Initialising SvelteKit SSR entry');
			ssrServerServer = require('./ssrServer/index').default;
			functions.logger.info('SvelteKit SSR entry initialised!');
		}
		functions.logger.info('Requested resource: ' + request.originalUrl);
		return ssrServerServer(request, response);
	});

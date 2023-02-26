import * as functions from 'firebase-functions';
import * as cors from 'cors';

const corsHandler = cors({ origin: true });

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
// 	functions.logger.info('Hello logs!', { structuredData: true });
// 	response.send('Hello from Firebase!');
// });

// @ts-ignore add as global to reduce loading/require delay
let serverServer: any;

// Go to https://console.cloud.google.com/functions/details/us-central1/server
// enable public access: click +grand access -> allUsers w/ Cloud Functions Invoker
export const server = functions.region('us-central1').https.onRequest((request, response) => {
	corsHandler(request, response, async () => {
		if (!serverServer) {
			functions.logger.info('Initialising SvelteKit SSR entry');
			// @ts-ignore ssrServer index is generated on build time
			serverServer = require('./ssrServer/index').default;
			functions.logger.info('SvelteKit SSR entry initialised!');
		}
		functions.logger.info('Requested resource: ' + request.originalUrl);
		return serverServer(request, response);
	});
});

// import adapter from '@sveltejs/adapter-auto';
import firebase from 'svelte-adapter-firebase';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: firebase({
			firebaseJsonPath: '../firebase.json',
			// the "target" value here should be the {{domain}}.web.app / {{domain}}.firebaseapp.com
			// in the firebase console hosting page
			// update also the firebase.json:hosting.site to be equal to the {{domain}}
			target: 'freedive-superhome'
		})
	}
};

export default config;

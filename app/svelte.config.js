// import adapter from '@sveltejs/adapter-auto';
import firebase from "svelte-adapter-firebase";
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: firebase({
			firebaseJsonPath: "../firebase.json",
      target: "ssrServer",
		})
	}
};

export default config;

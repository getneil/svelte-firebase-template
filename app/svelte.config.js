import firebase from "svelte-adapter-firebase";

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: firebase({
      target: "svelte-func-single-site",
      esbuildBuildOptions(defaultOptions) {
        return {
          ...defaultOptions,
          target: "esm",
          plugins: [],
        };
      },
    })
  },
};
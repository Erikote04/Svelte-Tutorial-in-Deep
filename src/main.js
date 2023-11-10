import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    adjective: "great",
  },
});

export default app;

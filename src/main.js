import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    adjective: "good",
  },
});

export default app;

import solid from "solid-start/vite";
import { defineConfig } from "vite";
// import staticAdapter from "solid-start-static";

export default defineConfig({
  plugins: [solid({ ssr: false })],
  // plugins: [solid({ ssr: true, adapter: staticAdapter() })],
  // base: "/zstuid-soild/",
});

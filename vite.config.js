import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Target ES2019 so esbuild transpiles optional chaining (?.) and
    // nullish coalescing (??) — react-snap bundles Chrome 76 which predates
    // those operators. Modern browsers still load the same bundle fine.
    target: 'es2019',
  },
})

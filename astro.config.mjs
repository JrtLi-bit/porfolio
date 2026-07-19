import { defineConfig } from 'astro/config';

// Vercel serves this site at the domain root, while GitHub Pages serves it
// under the /porfolio/ repo-name subpath — so the base must differ per target.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  site: isVercel ? undefined : 'https://jrtli-bit.github.io',
  base: isVercel ? '/' : '/porfolio/',
});

// tailwind.config.mjs (ESM)
import daisyui from 'daisyui';
import { themes as daisyThemes } from 'daisyui/src/colors/themes.js';

export default {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,mdx,md}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: daisyThemes['[data-theme=dark]'],
      },
    ],
    darkTheme: 'dark',
    defaultTheme: 'dark',
  },
};

// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Rubik',
            cssVariable: '--font-rubik',
            styles: ['normal', 'italic'],
            weights: ['400', '500', '600', '700'],
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});

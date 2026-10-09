import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = import.meta.dirname;

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        smarttraffic: resolve(root, 'pages/smarttraffic.html'),
        sentiment: resolve(root, 'pages/sentiment.html'),
        hotelPrice: resolve(root, 'pages/hotel-price.html'),
      },
    },
  },
});

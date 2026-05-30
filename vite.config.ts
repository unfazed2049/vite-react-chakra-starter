/// <reference types="vitest" />
import { ValidateEnv } from '@julr/vite-plugin-validate-env';
import babel from '@rolldown/plugin-babel';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import type { VitePWAOptions } from 'vite-plugin-pwa';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

const pwaOptions: Partial<VitePWAOptions> = {
  // TODO: enable if you want to enable PWA service worker
  disable: true,
  registerType: 'autoUpdate',
  manifest: {
    short_name: 'vite-react-chakra-starter',
    name: 'Vite React App Template',
    lang: 'en',
    start_url: '/',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    dir: 'ltr',
    display: 'standalone',
    prefer_related_applications: false,
  },
  pwaAssets: {
    disabled: false,
    config: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isCheckDisabled = mode === 'production' || !!process.env.VITEST;
  const env = loadEnv(mode, process.cwd(), '');
  const isReactCompilerEnabled = env.ENABLE_PLUGIN_REACT_COMPILER === 'true';

  return {
    plugins: [
      tsconfigPaths(),
      ValidateEnv(),
      react(),
      ...(isReactCompilerEnabled
        ? [
            babel({
              plugins: [['babel-plugin-react-compiler', {}]],
            }),
          ]
        : []),
      ...(isCheckDisabled
        ? []
        : [
            checker({
              typescript: true,
            }),
          ]),
      visualizer({ template: 'sunburst' }) as unknown as PluginOption,
      VitePWA(pwaOptions),
    ],
    server: {
      port: 3000,
      open: true,
    },
    test: {
      coverage: {
        include: ['src/lib/utils/**/**.{ts,tsx,js,jsx}'],
      },
    },
  };
});

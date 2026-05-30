const APP_NAME = 'vite-react-chakra-starter';
const APP_TITLE = 'Vite React Chakra Starter';
const APP_DESCRIPTION = 'app starter template';
const APP_URL = 'https://vite-react-chakra-starter.sznm.dev';
const OG_IMG_URL =
  'https://og.sznm.dev/api/generate?heading=vite-react-chakra-starter&text=React+vite+template+with+Chakra+UI+and+TypeScript+setup.&template=color';

export const Meta = () => (
  <>
    <title>{APP_TITLE}</title>
    <meta content={APP_DESCRIPTION} name="description" />

    {/* Primary Meta Tags */}
    <meta content={APP_NAME} name="application-name" />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="default" name="apple-mobile-web-app-status-bar-style" />
    <meta content={APP_NAME} name="apple-mobile-web-app-title" />
    <meta content="telephone=no" name="format-detection" />
    <meta content="yes" name="mobile-web-app-capable" />
    <meta content="#FFFFFF" name="theme-color" />

    {/* Open Graph */}
    <meta content="website" property="og:type" />
    <meta content={APP_URL} property="og:url" />
    <meta content={APP_TITLE} property="og:title" />
    <meta content={APP_DESCRIPTION} property="og:description" />
    <meta content={OG_IMG_URL} property="og:image" />

    {/* Twitter */}
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={APP_URL} name="twitter:url" />
    <meta content={APP_TITLE} name="twitter:title" />
    <meta content={APP_DESCRIPTION} name="twitter:description" />
    <meta content={OG_IMG_URL} name="twitter:image" />

    {/* Links */}
    <link href="/favicon.svg" rel="shortcut icon" />
    <link href="/favicon.ico" rel="icon" />
    <link href="/apple-touch-icon-180x180.png" rel="apple-touch-icon" />
    <link href="/manifest.webmanifest" rel="manifest" />
  </>
);

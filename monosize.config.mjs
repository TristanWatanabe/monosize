import webpackBundler from './dist/packages/monosize-bundler-webpack/src/index.mjs';
import createAzureStorage from './dist/packages/monosize-storage-azure/src/index.mjs';

/** @type {import('monosize').MonoSizeConfig} */
const config = {
  repository: 'https://github.com/microsoft/monosize',
  bundler: webpackBundler(config => {
    return config;
  }),
  storage: createAzureStorage({ endpoint: 'https://bundle-size-testing-env.azurewebsites.net/api/latest' }),
};

export default config;

import { Configuration } from 'webpack';

export function getWebpackOptions(
  config: Cypress.PluginConfigOptions
): Configuration {
  return {
    module: {
      rules: [
        {
          exclude: [/node_modules/],
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.feature$/,
          use: [
            {
              loader: '@badeball/cypress-cucumber-preprocessor/webpack',
              options: config,
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  };
}

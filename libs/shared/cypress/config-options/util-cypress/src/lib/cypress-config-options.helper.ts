export function getCypressOptions(application: string): object {
  return {
    chromeWebSecurity: false,
    downloadsFolder: `../../dist/cypress/apps/${application}-e2e/downloads`,
    experimentalSessionAndOrigin: true,
    retries: 0,
    screenshotsFolder: `../../dist/cypress/apps/${application}-e2e/screenshots`,
    specPattern: 'src/e2e/**/*.feature',
    supportFile: 'src/support/e2e.ts',
    video: true,
    videosFolder: `../../dist/cypress/apps/${application}-e2e/videos`,
    viewportHeight: 1080,
    viewportWidth: 1920,
  };
}

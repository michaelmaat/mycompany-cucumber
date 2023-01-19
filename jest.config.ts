/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [...getJestProjects()],
};

export function sharedJestConfig(
  offsetFromRoot: string
): Record<
  string,
  | string
  | string[]
  | Record<string, string>
  | Record<string, Record<string, string>>
> {
  return {
    globals: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'ts-jest': {
        stringifyContentPathRegex: '\\.(html|svg)$',
        tsconfig: 'tsconfig.spec.json',
      },
    },
    preset: `${offsetFromRoot}jest.preset.js`,
    setupFilesAfterEnv: [`${offsetFromRoot}test-setup.ts`],
    snapshotSerializers: [
      'jest-preset-angular/build/serializers/no-ng-attributes',
      'jest-preset-angular/build/serializers/ng-snapshot',
      'jest-preset-angular/build/serializers/html-comment',
    ],
    transform: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  };
}

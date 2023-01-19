const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  coverageReporters: ['lcov', ['text', { skipFull: true }]],
  moduleFileExtensions: ['ts', 'js', 'html'],
  resolver: '@nrwl/jest/plugins/resolver',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
};

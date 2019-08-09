const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: '/src/tsconfig.json',
    },
  },
  testEnvironment: 'node',
  verbose: true,
  transform: {
    ...tsjPreset.transform,
  },
  roots: ['<rootDir>/src/', '<rootDir>/src/test'],
  setupFiles: [
    '<rootDir>/src/test/__mocks__/localStorage.ts',
    '<rootDir>/src/test/__mocks__/sessionStorage.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
};

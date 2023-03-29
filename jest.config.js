module.exports = {
  'roots': [
    '<rootDir>',
    '<rootDir>/test'
  ],
  'testMatch': [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  'transform': {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  'testTimeout': 1000000
}

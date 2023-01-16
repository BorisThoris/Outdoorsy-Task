module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts', '**/*.test.tsx'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.ts?$': 'ts-jest',
    },
  };
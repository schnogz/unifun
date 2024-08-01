module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.*',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!./src/constants/**',
    '!./src/styles/**',
    '!./src/types/**',
  ],
  coverageReporters: ['json', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/providers(.*)$': '<rootDir>/src/providers$1',
    '^@/styles(.*)$': '<rootDir>/src/styles$1',
    '^@/types(.*)$': '<rootDir>/src/types$1',
    '^@/utils(.*)$': '<rootDir>/src/utils$1',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.[jt]sx?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
}

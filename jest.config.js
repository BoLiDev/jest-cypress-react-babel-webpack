module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '.(css|scss)$': require.resolve('./test/mock-css.js'),
  },
}

export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|ts|tsx)$': 'babel-jest',  // Make sure Babel is used for transformation
  },
};
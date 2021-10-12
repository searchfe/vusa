module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**'],
    projects: [
        {
            testEnvironment: 'node',
            testMatch: ['<rootDir>/test/spec/compiler/*.spec.js'],
        },
        {
            testEnvironment: 'jsdom',
            testMatch: ['<rootDir>/test/spec/runtime/**/*.spec.js'],
        },
    ],
};

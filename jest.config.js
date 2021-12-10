module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**',
        '!<rootDir>/src/runtime/bind-data.js',
        '!<rootDir>/src/runtime/bind-data-proxy.js',
        '!<rootDir>/src/runtime/calc-computed-observe.js',
        '!<rootDir>/src/global-api/extend.js'
    ],
    testTimeout: 30000,
    projects: [
        {
            testEnvironment: 'node',
            testMatch: [
                '<rootDir>/test/spec/compiler/*.spec.js',
                '<rootDir>/test/ssr/*.spec.js',
            ],
        },
        {
            testEnvironment: 'jsdom',
            testMatch: ['<rootDir>/test/spec/runtime/**/*.spec.js'],
            setupFilesAfterEnv: [
                '<rootDir>/test/helpers/wait-for-update.js',
                '<rootDir>/test/helpers/trigger-event.js',
                '<rootDir>/test/helpers/to-have-been-warned.js',
            ],
        },
    ],
};

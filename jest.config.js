module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            diagnostics: true,
        },
    },
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/**/*.stories.tsx', '!src/index.ts'],
    setupFiles: [],
    coveragePathIgnorePatterns: ['./src/*/*.types.{ts,tsx}'],
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
    coverageThreshold: {
        global: {
            statements: 75,
            branches: 75,
            lines: 75,
            functions: 65,
        },
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
    automock: false,
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    },
    modulePaths: [],
    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '\\.(css|less)$': '<rootDir>/config/jest/styleMock.js',
        'src/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

module.exports = {
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/testMocks/fileMock.js',
    },
    verbose: true,
    globals: {
        NODE_ENV: 'test',
        BABEL_ENV: 'test'
    },
    moduleFileExtensions: ['js', 'json', 'jsx'],
    rootDir: './',
    testURL: 'https://localhost:8011'
};

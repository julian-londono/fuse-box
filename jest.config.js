process.env.FUSEBOX_DIST_ROOT = __dirname;

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: 'src/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },

  testRegex: '(/(__tests__|tests)/.*|(\\.|/))\\.test\\.tsx?$',
  modulePathIgnorePatterns: ['/modules', '/_modules'],
  testPathIgnorePatterns: [
    '.fusebox/',
    '/lib/',
    'node_modules/',
    'modules',
    '_playground/',
    'dist/',
    '.dev/',
    'website',
  ],
  maxConcurrency: 1,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'json'],
  //coverageDirectory: 'build/logs/',
  //collectCoverage: true,
};

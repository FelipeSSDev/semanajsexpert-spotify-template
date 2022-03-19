const defaultConfig = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  maxWorkers: "50%",
  watchPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules"],
};

export default {
  projects: [
    {
      ...defaultConfig,
      testEnvironment: "node",
      displayName: "backend",
      collectCoverageFrom: ["app/", "!app/index.js"],
      transformIgnorePatterns: [
        ...defaultConfig.transformIgnorePatterns,
        "public",
      ],
      testMatch: ["**/__tests__/**/app/**/*.spec.js"],
    },
    {
      ...defaultConfig,
      testEnvironment: "jsdom",
      displayName: "frontend",
      collectCoverageFrom: ["public/"],
      transformIgnorePatterns: [
        ...defaultConfig.transformIgnorePatterns,
        "server",
      ],
      testMatch: ["**/__tests__/**/public/**/*.spec.js"],
    },
  ],
};

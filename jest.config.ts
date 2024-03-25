declare var module: any;

module.exports = {
  testEnvironment: "jest-environment-node",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

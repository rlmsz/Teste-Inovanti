/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  automock: false,
  testEnvironment: "jsdom", 
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  setupFilesAfterEnv: ['jest-fetch-mock'], 
};
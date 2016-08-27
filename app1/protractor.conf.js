exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  specs: [
    'spec/end2end/*.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 60000
  },
  baseUrl: 'http://localhost:8080/index.html'
};
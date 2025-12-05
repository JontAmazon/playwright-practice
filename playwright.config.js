module.exports = {
  retries: 3,
  expect: {
    timeout: 10000,
  },
  use: {
    trace: 'retain-on-failure', // 'on'
  },
};

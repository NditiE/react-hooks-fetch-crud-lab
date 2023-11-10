module.exports = {
    // ... other webpack configuration options
  
    resolve: {
      fallback: {
        timers: require.resolve('timers-browserify'),
        os: require.resolve('os-browserify/browser'),
        tty: require.resolve('tty-browserify'),
        util: require.resolve('util/'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        assert: require.resolve('assert/'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
        constants: require.resolve('constants-browserify'),
        vm: require.resolve('vm-browserify'),
        url: require.resolve('url/'),
        crypto: require.resolve('crypto-browserify'),
        domain: require.resolve('domain-browser'),
      },
    },
  };
  
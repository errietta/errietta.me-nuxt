module.exports = {
  apps: [{
    name: 'errietta.me',
    script: 'server/index.js',

    instances: 0,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      HOST: '127.0.0.1',
      API_URL: 'https://www.errietta.me'
    }
  }]
}

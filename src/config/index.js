const config = {

    production: {
        PORT: 5000,
        DB_URI: 'mongodb://127.0.0.1:27017/Crypto_trade',
        SECRET: "MySecret"
    },
    development: {
        PORT: 3000,
        DB_URI: 'mongodb://127.0.0.1:27017/Crypto_trade',
        SECRET: "MySecret"
    }
}

module.exports = config[process.env.node_env || "development"]
module.exports = {
  // ! Public config
  publicRuntimeConfig: {
    // * Number o crypto keys
    N_CRYPTO_KEYS: 4,
    // * Character set
    USE_SET: {
      upper: true,
      lower: true,
      symbol: true,
      number: true,
    },
    SET: {
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lower: "abcdefghijklmnopqrstuvwxyz",
      symbol: `!#$%&*?@^~-`,
      number: "0123456789",
    },
    // * Front matter
    AUTHOR: "Diego Inácio",
    TITLE: "Personal Encrypted Information",
  },
  // ! Env Tokens
  // * You must declare them in .env file
  env: {
    AUTH_TOKEN_01: process.env.AUTH_TOKEN_01,
    AUTH_TOKEN_02: process.env.AUTH_TOKEN_02,
    AUTH_TOKEN_03: process.env.AUTH_TOKEN_03,
    AUTH_TOKEN_04: process.env.AUTH_TOKEN_04,
  },
};

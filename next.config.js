module.exports = {
  // ! Public config
  publicRuntimeConfig: {
    // * Number o crypto keys
    N_CRYPTO_KEYS: 4,
    // * Character set
    SET: {
      upper: true,
      lower: true,
      symbol: true,
      number: true,
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

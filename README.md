# Encrypted Information Application

This is a very simple application using [Next.js](https://nextjs.org/) and [React.js](https://reactjs.org/), which the main purpose is to provide access to personal encrypted information. The authentication is done with the _Auth Tokens_ and the encryption/decryption processes are elaborated by the use of multiple _Crypto Keys_.

## Live Demo

I chose [Vercel](https://vercel.com/) to host a [live demo](https://encrypted-info-app.vercel.app/) of this application. If you want to take a look, just visit the link below.

[![run application](https://github.com/diegoinacio/encrypted-info-app/blob/master/_source/run_application.svg)](https://encrypted-info-app.vercel.app/)

To make this experience a little bit more fun, I will give some tips to find out how to interact with the app on your own.

### Auth Tokens

There are 4 _Auth Tokens_ that switch on the content accessability and visibility. The _Crypto Token_ form and all the information will be shown when all the tokens are filled rightly.

![run application](https://github.com/diegoinacio/encrypted-info-app/blob/master/_source/auth_tokens.gif)

To find out what are the 4 auth tokens I registered for this demo, just run the code snippet below.

```javascript
const ABREV = ["st", "nd", "rd", "th"];
for (let i = 0; i < 4; i++) {
  const index = String(i + 1).padStart(4, "0");
  console.log(`${i + 1}${ABREV[i]} auth token: ${index}`);
}
```

### Crypto Keys

The _Crypto Keys_ are the base for decryption logic of the information. As you put down the values in its form, you will notice that the content changes.

![run application](https://github.com/diegoinacio/encrypted-info-app/blob/master/_source/crypto_keys.gif)

To figure out what are the 4 crypto keys I used to encrypt this demo, just find the answers the following sentences.

- **1° crypto key**: the first four letter of the lowercase alphabet;
- **2° crypto key**: the first five decimal digits of pi;
- **3° crypto key**: the value in lowercase words obtained by adding nine and five;
- **4° crypto key**: my first name capitalized.

### Show the key values

If you have already found the crypto keys you actually decrypted this demo information. You may have noticed that all values are hidden despite being accessible by the copy button. To show them up just click on the happiest part of the page.

![run application](https://github.com/diegoinacio/encrypted-info-app/blob/master/_source/show_values.gif)

## Customizing the application

First of all, clone this repository.

```shell
git clone https://github.com/diegoinacio/encrypted-info-app
cd encrypted-info-app
```

Install all the dependencies. (you are supposed to already have NodeJS installed)

```shell
npm install
```

There are 3 files you have to edit to customize this application.

### .local.env file

Firstly, rename this file or create a new one called `.env`. Fill in the 4 _Auth Tokens_ as you want. Something like that:

```
AUTH_TOKEN_01="any token you want here"
AUTH_TOKEN_02=####
AUTH_TOKEN_03=####
AUTH_TOKEN_04=####
```

Don't change the environment variables names. It must be just like in the `.local.env` file.

If you want to publish your own version, please remember to check if the `.env` file is properly ignored by your deployment process. This information must be secret!

### next.config.js file

This file you have all the public runtime configuration so you can set before running the application.

```javascript
{
  publicRuntimeConfig: {
    // Number o crypto keys used to encrypt/decrypt
    N_CRYPTO_KEYS: 4,
    // * Character set for crypto keys
    SET: {
      upper: true,
      lower: true,
      symbol: true,
      number: true,
    },
    AUTHOR: "Your name here",
    TITLE: "Application title",
  }
  // ...
};
```

### \_data.example.json file

This is the most important file. In it you will include all the actual information you want to encrypt. This file is located in `assets\data\_data.example.json` and you have to rename this to `_data.json` before encrypting.

The structure of the data is divided by sections. Each section can have one or more contents and each content can have one or more values. For example, consider you want to store your social media account information. You can have multiple contents for this, so you can include multiple information like _password_ and _secret recovery words_. In your `_data.json` it would contain:

```json
[
  ...,
  {
    "section": "Social Media Name",
    "content": [
      {
        "name": "Password",
        "values": ["passwordOfSocialMedia"]
      },
      {
        "name": "Secret Recovery Words",
        "values": ["panda", "knife", "butter", "apple", ...]
      }
    ]
  },
  ...
]
```

As you can imagine, the `_data.json` has all your sensitive information so keep it safe and remember to ignore it in your deployment process.

## Encrypting your own information

Having completed your `_data.json` it's time to encrypt this information. To encrypt your information just run:

```shell
npm run crypto
```

Select `Encrypt data` and include all the _Crypto Keys_ (memorize all of them). This process will change `data.json` in the `assets\data` directory. The `data.json` file contains the encrypted data used by the application.

To run the application locally, run:

```shell
npm run dev
```

If you get any doubt, you can contact me 😄

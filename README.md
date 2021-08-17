# Encrypted Information

This is a very simple application using [Next.js](https://nextjs.org/) and [React.js](https://reactjs.org/), which the main purpose is to provide access to personal encrypted information. The authentication is done with the _Auth Tokens_ and the encryption/decryption processes are elaborated by the use of multiple _Crypto Keys_.

## Live Demo

I chose [Vercel](https://vercel.com/) to host a [live demo](https://encrypted-info-app.vercel.app/) of this application. If you want to take a look, just visit the link below.

[![run application](_source\run_application.svg)](https://encrypted-info-app.vercel.app/)

To make this experience a little bit more fun, I will give some tips to find out how to interact with the app on your own.

### Auth Tokens

There are 4 _Auth Tokens_ that switch on the content accessability and visibility. The _Crypto Token_ form and all the information will be shown when all the tokens are filled rightly.

![run application](_source\auth_tokens.gif)

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

![run application](_source\crypto_keys.gif)

To figure out what are the 4 crypto keys I used to encrypt this demo, just find the answers the following sentences.

- **1° crypto key**: the first four letter of the lowercase alphabet;
- **2° crypto key**: the first five decimal digits of pi;
- **3° crypto key**: the value in lowercase words obtained by adding nine and five;
- **4° crypto key**: my first name capitalized.

### Show the key values

If you have already found the crypto keys you actually decrypted this demo information. You may have noticed that all values are hidden despite being accessible by the copy button. To show them up just click on the happiest part of the page.

![run application](_source\show_values.gif)

import getConfig from "next/config";

const { publicRuntimeConfig: prc } = getConfig();

// ! Global Variables
// * Character set
let SET = " ";
SET += prc.SET.upper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
SET += prc.SET.lower ? "abcdefghijklmnopqrstuvwxyz" : "";
SET += prc.SET.symbol ? `!#$%&*?@^~` : "";
SET += prc.SET.number ? "0123456789" : "";
const N_SET = SET.length;

function encrypt(word, key, step) {
  // ! Encrypt word
  const n_key = key.length;
  if (!n_key) {
    return word;
  }

  // * Encrypt each character
  return [].map
    .call(word, (e, i) => {
      let key_e = key[i % n_key];
      let indexA = SET.indexOf(e);
      let indexB = SET.indexOf(key_e) + 1;
      let indexC = (indexA + indexB + step) % N_SET;
      return SET[indexC];
    })
    .join("");
}

function decrypt(word, key, step) {
  // ! Decrypt word
  const n_key = key.length;
  if (!n_key) {
    return word;
  }

  // * Decrypt each character
  return [].map
    .call(word, (e, i) => {
      let key_e = key[i % n_key];
      let indexA = SET.indexOf(e);
      let indexB = SET.indexOf(key_e) + 1;
      let indexC = indexA - indexB - step;
      indexC = indexC < 0 ? N_SET + indexC : indexC;
      return SET[indexC];
    })
    .join("");
}

function funcSelect(word, key, func, step) {
  // ! Encryption/Decryption switch
  if (func == "decrypt") {
    return decrypt(word, key, step);
  }
  return encrypt(word, key, step);
}

function TransformObject(data, func, KEYS) {
  // ! Deep transformation of the input data
  // * copy data without reference
  let dataCopy = JSON.parse(JSON.stringify(data));

  // * Loop through all the levels
  KEYS.forEach((key) => {
    for (const [i, e1] of dataCopy.entries()) {
      e1.section = funcSelect(e1.section, key, func, i + 1);
      for (const [j, e2] of e1.content.entries()) {
        e2.name = funcSelect(e2.name, key, func, i + j + 1);
        for (let k = 0; k < e2.values.length; k++) {
          e2.values[k] = funcSelect(e2.values[k], key, func, i + j + k + 1);
        }
      }
    }
  });

  return dataCopy;
}

export default TransformObject;

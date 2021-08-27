import getConfig from "next/config";
import { useContext } from "react";
import { Context } from "../data/globalState";
import data from "../data/data.json";
import TransformObject from "../modules/cryptography";

function Form() {
  const { publicRuntimeConfig: prc } = getConfig();
  const [dataState, setDataState] = useContext(Context);

  function _handleInput(element) {
    const form = element.target.form;

    const VALUES = Object.values(form.children).map((e) => e.value);
    let KEYS = VALUES.slice();

    let dataState_ = data;

    while (KEYS.length) {
      dataState_ = TransformObject(dataState_, "decrypt", KEYS);
      KEYS.pop();
      const NV = VALUES.length;
      const NK = KEYS.length;
      KEYS = KEYS.map((e, i) =>
        VALUES.slice(i, i + 1 + NV - NK)
          .reverse()
          .join("")
      );
    }

    setDataState(dataState_);
  }

  return (
    <div>
      <p>Crypto Keys</p>
      <form key="key-form" onInput={_handleInput}>
        {Array(prc.N_CRYPTO_KEYS)
          .fill(0)
          .map((e, i) => {
            const key = `keyInput${i}`;
            return (
              <input type="password" autoComplete="off" id={key} key={key} />
            );
          })}
      </form>
    </div>
  );
}

export default Form;

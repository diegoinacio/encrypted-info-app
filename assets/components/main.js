import getConfig from "next/config";
import { useState } from "react";
import ShowPass, { VisibilityGlobalState } from "./showPass";
import _Head from "./head";
import Auth from "./auth";
import Form from "./form";
import Body from "./body";

function Main() {
  const { publicRuntimeConfig: prc } = getConfig();
  const [authState, setAuthState] = useState(false);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <_Head>{prc.TITLE}</_Head>
      <VisibilityGlobalState>
        <div id="main" key="main">
          <div id="header">
            <h1>
              {prc.TITLE} <ShowPass />
            </h1>
            <div className="author">{prc.AUTHOR}</div>
          </div>
          <div id="forms">
            <Auth key="auth" setAuthState={setAuthState} />
            {authState && <Form key="form" />}
          </div>
          {authState && <Body key="body" />}
          <div id="footer">{`© ${year} ${prc.AUTHOR}`}</div>
        </div>
      </VisibilityGlobalState>
    </div>
  );
}

export default Main;

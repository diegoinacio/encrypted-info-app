function Auth(props) {
  function _handleState(element) {
    const form = element.target.form;
    props.setAuthState(
      [
        form.children[0].value === process.env.AUTH_TOKEN_00,
        form.children[1].value === process.env.AUTH_TOKEN_01,
        form.children[2].value === process.env.AUTH_TOKEN_02,
        form.children[3].value === process.env.AUTH_TOKEN_03,
      ].every((e) => e)
    );
  }

  return (
    <div>
      <p>Auth Tokens</p>
      <form key="auth-form" onInput={_handleState}>
        <input type="password" id="keyAuth01" autoComplete="off" />
        <input type="password" id="keyAuth02" autoComplete="off" />
        <input type="password" id="keyAuth03" autoComplete="off" />
        <input type="password" id="keyAuth04" autoComplete="off" />
      </form>
    </div>
  );
}

export default Auth;

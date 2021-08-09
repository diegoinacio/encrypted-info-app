import Head from "next/head";

function _Head(props) {
  return (
    <div>
      <Head>
        <title>{props.children}</title>
      </Head>
    </div>
  );
}

export default _Head;

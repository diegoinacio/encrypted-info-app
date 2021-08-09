import { useContext } from "react";
import { VisibilityContext } from "./showPass";

function CopyElement(props) {
  const [visibilityState, setVisibilityState] = useContext(VisibilityContext);

  function _visibility(value) {
    if (!visibilityState) {
      return [].map.call(value, (e) => {
        return "*";
      });
    }
    return value;
  }

  function _copyClipboard() {
    // * Copy password to the clipboard
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = props.value;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  return (
    <div id={props.value} className="key-div">
      <button className="key-button" onClick={_copyClipboard}>
        copy
      </button>
      <span className="key-value">{_visibility(props.value)}</span>
    </div>
  );
}

export default CopyElement;

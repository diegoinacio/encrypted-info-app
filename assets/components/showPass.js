import React, { useState, useContext } from "react";

export const VisibilityContext = React.createContext();

export const VisibilityGlobalState = ({ children }) => {
  const [visibilityState, setVisibilityState] = useState(false);

  return (
    <VisibilityContext.Provider value={[visibilityState, setVisibilityState]}>
      {children}
    </VisibilityContext.Provider>
  );
};

function ShowPass() {
  const [visibilityState, setVisibilityState] = useContext(VisibilityContext);

  function _handleClick(e) {
    const visibility = e.target.getAttribute("visibility");
    if (visibility == "hide") {
      e.target.setAttribute("visibility", "show");
      e.target.innerText = "😃";
      setVisibilityState(true);
    } else {
      e.target.setAttribute("visibility", "hide");
      e.target.innerText = "😄";
      setVisibilityState(false);
    }
  }

  return (
    <span
      onClick={_handleClick}
      visibility={"hide"}
      style={{ cursor: "pointer" }}
    >
      😄
    </span>
  );
}

export default ShowPass;

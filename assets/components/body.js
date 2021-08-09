import { useContext } from "react";
import Section from "./section";
import { Context } from "../data/globalState";

function Body() {
  const [dataState, setDataState] = useContext(Context);

  return (
    <div id="body" key="body">
      {dataState.map((e) => (
        <Section name={`${e.section}`} key={`${e.section}`} />
      ))}
    </div>
  );
}

export default Body;

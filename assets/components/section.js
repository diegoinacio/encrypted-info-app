import { useContext } from "react";
import CopyElement from "./copyElement";
import { Context } from "../data/globalState";

function Section(props) {
  const [dataState, setDataState] = useContext(Context);
  const index = dataState.findIndex((e) => e.section == props.name);

  function _listItems(data, name) {
    return (
      <div
        key={`${name}-${data.name}`}
        id={`${name}-${data.name}`}
        className="key-list"
      >
        {data.values.map((e) => {
          return <CopyElement value={e} key={`${name}-${data.name}-${e}`} />;
        })}
      </div>
    );
  }

  return (
    <section id={props.name}>
      <h2>{props.name}</h2>
      {dataState[index].content.map((e) => {
        return (
          <div
            key={`${props.name}-${e.name}`}
            id={`${props.name}-${e.name}`}
            className="key-type"
          >
            <h3>{e.name}</h3>
            {_listItems(e, props.name)}
          </div>
        );
      })}
    </section>
  );
}

export default Section;

import Main from "../assets/components/main";
import DataGlobalState from "../assets/data/globalState";

function Index() {
  return (
    <DataGlobalState>
      <div id="wrapper" key="wrapper">
        <Main key="main" />
      </div>
    </DataGlobalState>
  );
}

export default Index;

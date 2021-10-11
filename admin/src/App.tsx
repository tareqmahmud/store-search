import { Refine } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import simpleRestDataProvider from "@pankod/refine-simple-rest";

function App() {
  const API_URL = "https://api.fake-rest.refine.dev";
  const dataProvider = simpleRestDataProvider(API_URL);
  return <Refine dataProvider={dataProvider}></Refine>;
}

export default App;

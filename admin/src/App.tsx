import { Refine, Resource } from "@pankod/refine";
import "@pankod/refine/dist/styles.min.css";
import authProvider from "./providers/auth-provider";
import dataProvider from "./providers/data-provider";
import Login from "./pages/login";
import StoreList from "./pages/stores/store-list";
import StoreShow from "./pages/stores/store-show";
import StoreEdit from "./pages/stores/store-edit";
import StoreCreate from "./pages/stores/store-create";
import CustomTitle from "./components/app/custom-title";

function App() {
  return (
    <Refine
      dataProvider={dataProvider()}
      authProvider={authProvider}
      LoginPage={Login}
      Title={CustomTitle}
    >
      <Resource
        name="posts"
        list={StoreList}
        show={StoreShow}
        edit={StoreEdit}
        create={StoreCreate}
      />
    </Refine>
  );
}

export default App;

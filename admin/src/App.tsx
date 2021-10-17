import { Refine, Resource } from "@pankod/refine";
import "@pankod/refine/dist/styles.min.css";
import authProvider from "./providers/auth-provider";
import dataProvider from "./providers/data-provider";
import Login from "./pages/login";
import ShopList from "./pages/shops/shop-list";
import CustomTitle from "./components/app/custom-title";
import ShopShow from "./pages/shops/shop-show";
import ShopCreate from "./pages/shops/shop-create";
import TagList from "./pages/tags/tag-list";
import TagCreate from "./pages/tags/tag-create";

function App() {
  return (
    <Refine
      dataProvider={dataProvider()}
      authProvider={authProvider}
      LoginPage={Login}
      Title={CustomTitle}
    >
      <Resource
        name="shops"
        list={ShopList}
        show={ShopShow}
        create={ShopCreate}
      />

      <Resource name="tags" list={TagList} create={TagCreate} />
    </Refine>
  );
}

export default App;

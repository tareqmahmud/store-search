import { Refine, Resource } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import simpleRestDataProvider from "@pankod/refine-simple-rest";
import { PostList } from "./pages/posts/post-list";
import PostShow from "./pages/posts/post-show";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";

function App() {
  const API_URL = "https://api.fake-rest.refine.dev";
  const dataProvider = simpleRestDataProvider(API_URL);
  return (
    <Refine dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        show={PostShow}
        edit={PostEdit}
        create={PostCreate}
      />
    </Refine>
  );
}

export default App;

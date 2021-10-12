import { AuthProvider, Refine, Resource } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import { PostList } from "./pages/posts/post-list";
import PostShow from "./pages/posts/post-show";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";
import authProvider from "./providers/auth-provider";
import dataProvider from "./providers/data-provider";
import Login from "./pages/login";

function App() {
  return (
    <Refine
      dataProvider={dataProvider()}
      authProvider={authProvider}
      LoginPage={Login}
    >
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

import simpleRestDataProvider from "@pankod/refine-simple-rest";

const dataProvider = () => {
  const API_URL = "https://api.fake-rest.refine.dev";
  return simpleRestDataProvider(API_URL);
};

export default dataProvider;

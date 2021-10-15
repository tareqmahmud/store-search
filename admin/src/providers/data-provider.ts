import nestJsCrudDataProvider from "@pankod/refine-nestjsx-crud";

const dataProvider = () => {
  const API_URL = "http://localhost:3000";
  return nestJsCrudDataProvider(API_URL);
};

export default dataProvider;

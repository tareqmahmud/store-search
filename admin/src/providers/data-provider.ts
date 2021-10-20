import nestJsCrudDataProvider from "@pankod/refine-nestjsx-crud";

const dataProvider = () => {
  const API_URL = process.env.REACT_APP_REST_API_URI as string;
  return nestJsCrudDataProvider(API_URL);
};

export default dataProvider;

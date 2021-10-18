import { CoreApi } from '@framework/rest/utils/api/core-api';
import { API_ENDPOINTS } from '@framework/rest/utils/api/api-endpoints';
import { useQuery } from 'react-query';

const ShopsService = new CoreApi(API_ENDPOINTS.SHOPS);

export const fetchShops = async ({ queryKey }: any) => {
  const [_key, params] = queryKey;

  const { data } = await ShopsService.find(params);

  return data;
};

export const useShopsQuery = (options: any) => {
  return useQuery<any, Error>([API_ENDPOINTS.SHOPS, options], fetchShops);
};

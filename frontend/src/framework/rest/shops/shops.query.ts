import { CoreApi } from '@framework/rest/utils/api/core-api';
import { API_ENDPOINTS } from '@framework/rest/utils/api/api-endpoints';
import { useQuery } from 'react-query';

const ShopsService = new CoreApi(API_ENDPOINTS.SHOPS);

export const fetchShops = async () => {
  const { data } = await ShopsService.findAll();

  return data;
};

export const useShopsQuery = () => {
  return useQuery<any, Error>(API_ENDPOINTS.SHOPS, fetchShops);
};

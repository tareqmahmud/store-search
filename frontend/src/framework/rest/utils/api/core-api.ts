import http from '@framework/rest/utils/api/http';

type NumberOrString = number | string;

export type ParamsType = {
  search?: string;
  enableAlgolia?: boolean;
};

export class CoreApi {
  private request = http;

  constructor(public _basePath: string) {}

  find(params: ParamsType) {
    let enableAlgolia = params?.enableAlgolia ?? false;
    const queryString = `?search=${params?.search}&enableAlgolia=${enableAlgolia}`;
    return this.request.get(this._basePath + queryString);
  }

  findAll() {
    return this.request.get(this._basePath);
  }

  fetchUrl(url: string) {
    return this.request.get(url);
  }

  postUrl(url: string, data: any) {
    return this.request.post(url, data);
  }

  findOne(id: NumberOrString) {
    return this.request.get(`${this._basePath}/${id}`);
  }

  create(data: any, options?: any) {
    return this.request
      .post(this._basePath, data, options)
      .then((res) => res.data);
  }

  update(id: NumberOrString, data: any, options?: any) {
    return this.request
      .put(`${this._basePath}/${id}`, data, options)
      .then((res) => res.data);
  }

  delete(id: NumberOrString) {
    return this.request.delete(`${this._basePath}/${id}`);
  }
}

import http from "./http";

type NumberOrString = Number | String;

type ParamsType = {};

class CoreApi {
  http = http;

  constructor(public _base_path: string) {}

  find(params: ParamsType) {
    const {} = params;

    const queryString = ``;

    return this.http.get(this._base_path + queryString);
  }

  findAll() {
    return this.http.get(this._base_path);
  }

  fetchUrl(url: string) {
    return this.http.get(url);
  }

  postUrl(url: string, data: any) {
    return this.http.post(url, data);
  }

  findOne(id: NumberOrString) {
    return this.http.get(`${this._base_path}/${id}`);
  }

  create(data: any, options?: any) {
    return this.http
      .post(this._base_path, data, options)
      .then((res) => res.data);
  }

  update(id: NumberOrString, data: any, options?: any) {
    return this.http
      .put(`${this._base_path}/${id}`, data, options)
      .then((res) => res.data);
  }

  delete(id: NumberOrString) {
    return this.http.delete(`${this._base_path}/${id}`);
  }
}

export default CoreApi;

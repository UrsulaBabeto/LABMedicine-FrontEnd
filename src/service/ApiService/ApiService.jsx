const BASE_URL = "http://localhost:3000/RESOURCE";

 export default class ApiService {
  apiUrl;
  headers = {
    "Content-type": "application/JSON",
  };

  constructor(endpoint) {
    this.apiUrl = BASE_URL.replace("RESOURCE", endpoint);
  }

  _getJsonData = async (response) => {
    return await response.json();
  };

  Get = async () => {
    const response = await fetch(this.apiUrl);
    return this._getJsonData(response);
  };

  Show = async (id) => {
    const response = await fetch(`${this.apiUrl}/${id}`);
    return this._getJsonData(response);
  };

  Create = async (body) => {
    const data = JSON.stringify(body);
    const response = await fetch(this.apiUrl, {
      method: "POST",
      body: data,
      headers: this.headers,
    });
    return this._getJsonData(response);
  };

  Update = async (id, body) => {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: "PUT",
      body,
      headers: this.headers,
    });
    return this._getJsonData(response);
  };

  Delete = async (id) => {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: "DELETE",
    });
    return this._getJsonData(response);
  };
}

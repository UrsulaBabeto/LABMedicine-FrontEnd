const BASE_URL = "viacep.com.br/ws/RESOURCE/json/";

export class ApiViaCep {
  apiUrl;
  headers = {
    "Content-type": "application/JSON",
  };

  constructor(endpoint) {
    this.apiUrl = BASE_URL.replace("RESOURCE", endpoint);
  }

  Get = async () => {
    const response = await fetch(this.apiUrl);
    const res = async (response) => {
      await response.json();
      return res;
    };
  };
}

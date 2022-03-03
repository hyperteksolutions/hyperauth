const axios = require("axios");

module.exports = class HyperAuth {
  constructor(api_key, api_secret) {
    this.api_key = api_key;
    this.api_secret = api_secret;
    this.instance = axios.create({
      baseURL: "https://api.hyperauth.app/",
      timeout: 15000,
      headers: { key: this.api_key, secret: this.api_secret },
    });
  }
  createTenant = async (phoneNumber, email) => {
    if (this.api_key === "" || this.api_secret === "") {
      return Promise.reject("API key and secret are required");
    } else {
      try {
        let x = await this.instance.get("/api/createTenant", {
          phoneNumber,
          email,
        });
        return Promise.resolve(x.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
  enrollmentSMS = async (tenantId) => {
    if (this.api_key === "" || this.api_secret === "") {
      return Promise.reject("API key and secret are required");
    } else {
      try {
        let x = await this.instance.post("/api/smsEnroll", { tenantId });
        return Promise.resolve(x.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
  authenticate = async (method, tenantId) => {
    if (this.api_key === "" || this.api_secret === "") {
      return Promise.reject("API key and secret are required");
    } else {
      try {
        let x = await this.instance.post("/api/authTenant", {
          method,
          tenantId,
        });
        return Promise.resolve(x.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
  authStatus = async (requestId) => {
    if (this.api_key === "" || this.api_secret === "") {
      return Promise.reject("API key and secret are required");
    } else {
      try {
        let x = await this.instance.post("/api/checkAuth", { requestId });
        return Promise.resolve(x.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
  smsCode = async (requestId, token) => {
    if (this.api_key === "" || this.api_secret === "") {
      return Promise.reject("API key and secret are required");
    } else {
      try {
        let x = await this.instance.post("/api/smsAuth", { requestId, token });
        return Promise.resolve(x.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
};

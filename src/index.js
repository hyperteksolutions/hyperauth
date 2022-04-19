const axios = require("axios");

class HyperAuth {
  constructor(key, secret) {
    this.key = key;
    this.secret = secret;
    this.instance = axios.create({
      baseURL: "https://api.hyperauth.app/",
      timeout: 15000,
      headers: { key: this.key, secret: this.secret },
    });
  }
  checkHealth = async () => {
    try {
      let x = await this.instance.get("/api/check");
      return Promise.resolve(x.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  createTenant = async (phoneNumber, email) => {
    try {
      let x = await this.instance.post("/api/createTenant", {
        phoneNumber,
        email,
      });
      return Promise.resolve(x.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  enrollmentSMS = async (tenantId) => {
    try {
      let x = await this.instance.post("/api/smsEnroll", { tenantId });
      return Promise.resolve(x.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  authenticate = async (method, tenantId) => {
    try {
      let x = await this.instance.post("/api/authTenant", {
        method,
        tenantId,
      });
      return Promise.resolve(x.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  authStatus = async (requestId) => {
    try {
      let x = await this.instance.post("/api/checkAuth", { requestId });
      return Promise.resolve(x.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  smsCode = async (requestId, token) => {
    try {
      let x = await this.instance.post("/api/smsAuth", { requestId, token });
      return Promise.resolve(x.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  getNewHyperlink = async (tenantId) => {
    try {
      let x = await this.instance.post("/api/getHyperlink", { tenantId });
      return Promise.resolve(x.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  verifyOTP = async (tenantId, otp) => {
    try {
      let x = await this.instance.post("/api/verifyOTPCode", {
        tenantId,
        token: otp,
      });
      return Promise.resolve(x.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  createPrompt = async (sourceURLs, callbackURL, hyperDomain) => {
    try {
      let x = await this.instance.post("/api/createPrompt", {
        sourceURLs,
        callbackURL,
        hyperDomain,
      });
      return Promise.resolve(x.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  createPromptSession = async (tenantId, token) => {
    try {
      let x = await this.instance.post("/api/newPromptSession", {
        tenantId,
        token,
      });
      return Promise.resolve(x.data);
    } catch (e) {
      next(e);
    }
  };
  getPromptSession = async (requestId) => {
    try {
      let x = await this.instance.post("/api/getPromptSession", {
        requestId,
      });
      return Promise.resolve(x.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var _old = HyperAuth;
HyperAuth = function (...args) {
  return new _old(...args);
};

module.exports = HyperAuth;
module.exports.default = HyperAuth;

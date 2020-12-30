const electron = window.require("electron");
const exec = electron.remote.require("child_process").execSync;
const xml2js = electron.remote.require("xml2js").parseStringPromise;
const os = electron.remote.require("os");
const fs = electron.remote.require("fs");
const si = electron.remote.require("systeminformation");

module.exports = class ElectronSystem {
  constructor() {
    this.nvidiaSmiPath = null;
  }

  _error(message) {
    let promise = new Promise((resolve, reject) => {
      reject(`ERROR: ${message}`);
    });
    return promise;
  }

  _resolve(data) {
    let promise = new Promise((resolve, reject) => {
      resolve(data);
    });
    return promise;
  }

  _getNvidiaSmi() {
    if (this.nvidiaSmiPath) {
      return this.nvidiaSmiPath;
    }
    let _nvidiaSmiPath;

    try {
      const basePath = "C:\\Windows\\System32\\DriverStore\\FileRepository";
      const dirContent = fs.readdirSync(basePath);
      const candidateDirs = dirContent.filter((dir) => dir.startsWith("nv"));
      const targetDir = candidateDirs.find((dir) => {
        const content = fs.readdirSync([basePath, dir].join("/"));
        return content.includes("nvidia-smi.exe");
      });

      if (targetDir) {
        _nvidiaSmiPath = [basePath, targetDir, "nvidia-smi.exe"].join("/");
      }
    } catch (e) {
      console.log(e);
      return this._error("Could not find nvidia-smi");
    }

    this.nvidiaSmiPath = _nvidiaSmiPath;
    return this.nvidiaSmiPath;
  }

  async getSystemInfo() {
    const result = await si.getStaticData();
    return this._resolve(result);
  }

  async smi() {
    if (os.platform() === "win32") {
      try {
        const pathToSMI = this._getNvidiaSmi();
        const data = exec(`"${pathToSMI}" -q -x`);
        if (!data) return this._error("No Data");
        const options = {
          explicitArray: false,
          trim: true,
        };
        const result = await xml2js(data, options);
        if (!result) return this._error("xml2js Failed");
        return this._resolve(result.nvidia_smi_log);
      } catch (error) {
        return this._error(error);
      }
    }
    try {
      const data = exec("nvidia-smi -q -x");
      if (!data) this._error("No Data");
      const options = {
        explicitArray: false,
        trim: true,
      };
      const result = await xml2js(data, options);
      if (!result) this._error("xml2js Failed");
      return this._resolve(result.nvidia_smi_log);
    } catch (error) {
      return this._error(error);
    }
  }
};

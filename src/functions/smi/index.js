// Original code written by chrisallenlane
// I have modified to support Windows 10 Pro & aSync support
// https://www.npmjs.com/package/node-nvidia-smi

const exec = require("child_process").execSync;
const xml2js = require("xml2js").parseStringPromise;
const os = require("os");

module.exports = async () => {
  if (os.platform() === "win32") {
    try {
      const data = exec(
        '"C:/Windows/System32/DriverStore/FileRepository/nv_dispi.inf_amd64_ccad5caddc3a3d35/nvidia-smi.exe" -q -x'
      );
      if (!data) throw Error("No Data");
      const options = {
        explicitArray: false,
        trim: true,
      };
      const result = await xml2js(data, options);
      if (!result) throw Error("xml2js Failed");
      return result;
    } catch (error) {
      return error;
    }
  }
  try {
    const data = exec("nvidia-smi.exe -q -x");
    if (!data) throw Error("No Data");
    const options = {
      explicitArray: false,
      trim: true,
    };
    const result = await xml2js(data, options);
    if (!result) throw Error("xml2js Failed");
    return result;
  } catch (error) {
    return error;
  }
};

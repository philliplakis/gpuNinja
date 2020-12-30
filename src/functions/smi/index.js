// Original code written by chrisallenlane
// I have modified to support Windows 10 Pro & aSync support
// https://www.npmjs.com/package/node-nvidia-smi

const exec = require("child_process").execSync;
const xml2js = require("xml2js").parseStringPromise;
const os = require("os");
const fs = require("fs");

let _nvidiaSmiPath = null;

function getNvidiaSmi() {
  if (_nvidiaSmiPath) {
    return _nvidiaSmiPath;
  }

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
  }

  return _nvidiaSmiPath;
}

module.exports = async () => {
  if (os.platform() === "win32") {
    try {
      const pathToSMI = getNvidiaSmi();
      const data = exec(`"${pathToSMI}" -q -x`);
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

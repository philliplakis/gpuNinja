const si = require("systeminformation");

// promises style - new since version 3
// si.baseboard()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.cpu()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.cpuCurrentspeed()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.cpuTemperature()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.mem()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.battery()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.graphics()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.osInfo()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.diskLayout()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.networkInterfaces()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.getStaticData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const nvidiaSMI = require("./src/functions/smi");

nvidiaSMI().then((data) => console.log(data.nvidia_smi_log));

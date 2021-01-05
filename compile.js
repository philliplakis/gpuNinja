const rimraf = require("rimraf");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const Dist_Directory = path.join(__dirname, "/dist");
const Build_Directory = path.join(__dirname, "/build");

const newBuild = path.join(__dirname, "/src/electron-starter.js");
const moveTo = path.join(__dirname, "/public/electron.js");

const Run_React_Build = () => {
  return new Promise((resolve, reject) => {
    console.log(`Starting Yarn run build`);
    exec(`yarn run build`, (err, stdout, stderr) => {
      console.log(`Completed Yarn run build`);
      return err ? reject(err) : resolve(true);
    });
  });
};

const Run_Electron_Build = () => {
  return new Promise((resolve, reject) => {
    console.log(`Starting electron-builder`);
    exec(`yarn run electron-pack`, (err, stdout, stderr) => {
      console.log(`Completed electron-builder`);
      return err ? reject(err) : resolve(true);
    });
  });
};

async function build() {
  console.log(`Starting........`);
  try {
    if (fs.existsSync(Dist_Directory)) {
      console.log(`Removing ${Dist_Directory}`);
      rimraf.sync(Dist_Directory);
    }

    if (fs.existsSync(Build_Directory)) {
      console.log(`Removing ${Build_Directory}`);
      rimraf.sync(Build_Directory);
    }

    if (fs.existsSync(moveTo)) {
      console.log(`Removing ${moveTo}`);
      rimraf.sync(moveTo);
      console.log(`Copying ${newBuild} over to /public`);
      fs.createReadStream(newBuild).pipe(fs.createWriteStream(moveTo));
    }

    await Run_React_Build();
    await Run_Electron_Build();
  } catch (e) {
    console.log(`ERROR`);
    console.log(e);
    process.exit();
  }

  console.log(`DONE`);
}

build();

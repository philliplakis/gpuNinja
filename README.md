<img src="https://raw.githubusercontent.com/philliplakis/gpuNinja/master/public/gpuninja_logo.png" width="100">

# GPU Ninja

#### [Download Released App](https://github.com/philliplakis/gpuNinja/releases)

# -

![GitHub release (latest by date)](https://img.shields.io/github/v/release/philliplakis/gpuNinja)
![GitHub release (latest by date)](https://img.shields.io/github/downloads/philliplakis/gpuNinja/latest/total)
![GitHub repo size](https://img.shields.io/github/repo-size/philliplakis/gpuNinja)

![image](https://i.imgur.com/Kh83CBHl.png)

### How?

You can see how i pull nvidia data from [here](https://github.com/philliplakis/gpuNinja/blob/master/src/classes/index.js), But in short I query `nvidia-smi` for the data as `XML` then parse it into `JSON`.

```JS
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
```

> Original code written by chrisallenlane [here](https://www.npmjs.com/package/node-nvidia-smi), I have modified to support Windows 10 & Async/Await.

## How To Use

To clone and run this repository you'll need [Git](https://git-scm.com), [Yarn](https://yarnpkg.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

> Swap Yarn commands for npm if you do not have Yarn installed

```bash
# Clone this repository
git clone https://github.com/philliplakis/gpuNinja
# Go into the repository
cd gpuNinja
# Install dependencies and run the app
yarn
# First you need to start React:
yarn start
# & (after your React-App displays in your browser)
yarn electron
```

To pack into an app, simply type:

```shell
node compile.js
```

All files will be found in `./dist/*`

There are already pre built executables in the release section: [Download Released App](https://github.com/philliplakis/gpuNinja/releases)

### Contribute

Want to contribute? Great! Open a PR with your changes.

### Todos

- Write Tests
- Add theme options
- Let the user define update time frame

## License

---

#### MIT

Copyright 2021 @philliplakis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**Free Software, Hell Yeah!**

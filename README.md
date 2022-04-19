![](https://i.imgur.com/akqOTpn.png)

<h1 style="text-align:center">
HyperAuth Node.JS Server Library
</h1>

<div style="display: flex; justify-content: space-between; align-items: center;">
![](https://img.shields.io/github/stars/hyperteksolutions/hyperauth.svg) ![](https://img.shields.io/github/forks/hyperteksolutions/hyperauth.svg) ![](https://img.shields.io/github/tag/hyperteksolutions/hyperauth.svg) ![](https://img.shields.io/github/release/hyperteksolutions/hyperauth.svg) ![](https://img.shields.io/github/issues/hyperteksolutions/hyperauth.svg)
</div>

---

<div style="display: flex; justify-content: space-between; align-items: center;">
[![Npm package version](https://badgen.net/npm/v/hyperauth)](https://npmjs.com/package/hyperauth)
[![NPM Package Downloads](https://badgen.net/npm/dt/hyperauth)](https://npmjs.com/package/hyperauth)
[![Try on RunKit](https://badge.runkitcdn.com/hyperauth.svg)](https://runkit.com/npm/hyperauth)
[![License](https://img.shields.io/github/license/hyperteksolutions/hyperauth)](https://github.com/Hypertek-Solutions/hyperauth/blob/master/LICENSE)
[![Dashboard](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://hyperauth.app/)
</div>

---

The HyperAuth Node library allows for easy integration of HyperAuth APIs for applications written in server-side JavaScript.

## Documentation

See the [API Docs](https://hyperauth.app/docs)

## Requirements

Node 16 or higher.

## Installation

Install the package with:

```sh
npm install hyperauth --save
# or
yarn add hyperauth
```

## Usage

The package requires configuration with your API key and Secret Key, which are available in the [HyperAuth Dashboard](https://dash.hyperauth.app/).

```javascript
const hyperauth = require("hyperauth")("API_KEY", "API_SECRET");
```

## Questions / Suggestions

For all questions and suggestions, please create a new issue [here](https://github.com/hyperteksolutions/hyperauth/issues/new) or contact [contact@hypertek.dev](mailto:contact@hypertek.dev).

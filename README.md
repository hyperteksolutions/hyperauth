# Node.js HyperAuth Library

[![Version](https://badge.fury.io/js/hyperauth.svg)](https://www.npmjs.org/package/hyperauth)
[![Downloads](https://img.shields.io/npm/dm/hyperauth.svg)](https://www.npmjs.com/package/hyperauth)
[![Try on RunKit](https://badge.runkitcdn.com/hyperauth.svg)](https://runkit.com/npm/hyperauth)
[![License](https://img.shields.io/github/license/Hypertek-Solutions/hyperauth)](https://github.com/Hypertek-Solutions/hyperauth/blob/master/LICENSE)

The HyperAuth Node library allows for easy integration of HyperAuth APIs for applications written in server-side JavaScript.

## Documentation

See the [API Docs](https://hyperauth.app/docs)

## Requirements

Node 8, 10 or higher.

## Installation

Install the package with:

```sh
npm install hyperauth --save
# or
yarn add hyperauth
```

## Usage

The package requires configuration with your API key and Secret Key, which are available in the [TaxHype Dashboard](https://dashboard.hyperauth.app/).

```javascript
const hyperauth = require("hyperauth");
const client = new hyperauth("API_KEY", "SECRET_KEY");
```

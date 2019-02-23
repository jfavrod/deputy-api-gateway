deputy-api-gateway
==================
[![Build Status](https://travis-ci.com/jfavrod/deputy-api-gateway.svg?branch=master)](https://travis-ci.com/jfavrod/deputy-api-gateway)
![Bundle Size](https://img.shields.io/bundlephobia/min/deputy-api-gateway.svg?style=flat)
[![Requirements Status](https://requires.io/github/jfavrod/deputy-api-gateway/requirements.svg?branch=master)](https://requires.io/github/jfavrod/deputy-api-gateway/requirements/?branch=master)

A Gateway to the Deputy.com API.

Works with the current version (v1) of the API.

The module provides a class for executing HTTP requests against the
[Deputy.com](https://www.deputy.com/api-doc/API) API.

Installation
------------
### npm
```
npm i deputy-api-gateway
```

### Git
```
git clone https://github.com/jfavrod/deputy-api-gateway.git
```

Usage
-----
To use the DeputyGateway class, provide the constructor with your
company's Deputy.com subdomain and your
[permanent access token](https://www.deputy.com/api-doc/API/Authentication).

```javascript
const deputy = new DeputyGateway('mycompany.na.deputy.com',
    process.env.DEPUTY_TOKEN);

deputy.get('my/location')
.then(data => console.log(data);
```

### TypeScript

```typescript
import DeputyGateway from "deputy-api-gateway";
import { } from "deputy-api-gateway";

const deputy = new DeputyGateway('mycompany.na.deputy.com',
    process.env.DEPUTY_TOKEN);

deputy.get('my/location')
.then(data => console.log(data);
```

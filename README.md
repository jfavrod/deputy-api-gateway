deputy-api-gateway
==================
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

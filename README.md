DeputyGateway
=============
A Gateway to the Deputy.com API.

The module provides a class for executing HTTP requests against the
[Deputy.com](https://www.deputy.com/api-doc/API) API.

Usage
-----
To use the DeputyGateway class, provide the constructor with your API
[permanent access token](https://www.deputy.com/api-doc/API/Authentication).

```javascript
const deputy = new DeputyGateway(process.env.DEPUTY_TOKEN);

deputy.get('my/location')
.then(data => console.log(data);
```

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

### Get Request
```javascript
const deputy = new DeputyGateway('mycompany.na.deputy.com',
    process.env.DEPUTY_TOKEN);

deputy.get('my/location')
.then(data => console.log(data);
```
#### Response
```javascript
{
    "Id": 4,
    "Portfolio": null,
    "Code": "ZCF",
    "Active": true,
    "ParentCompany": 0,
    "CompanyName": "Zen Coffee",
    "TradingName": null,
    "BusinessNumber": null,
    "CompanyNumber": null,
    "IsWorkplace": true,
    "IsPayrollEntity": true,
    "PayrollExportCode": null,
    "Address": 53,
    "Contact": null,
    "Creator": 69,
    "Created": "2012-12-21T11:19:30+11:00",
    "Modified": "2016-05-27T04:14:27+10:00",
    "_DPMetaData": {
	"System": "Company",
	"CreatorInfo": {
	    "Id": 69,
	    "DisplayName": "Ashik Ahmed",
	    "EmployeeProfile": 69,
	    "Employee": 69,
	    "Photo": "https://d1m66yh0amo3la.cloudfront.net/deputec_my_deputy/-135x135_eea8be7cebad8d1cf7b924f8d18a5545.jpg?Expires=1550994802&Key-Pair-Id=APKAINP5UVPK4IGBHXOQ&Signature=EkeOr48op2d94BTaY2zY7G2CIBH4l~SgnFWuji~zuM8A5Gew0RHhUqKnVJmClA3w6mvJ7iEzYEdKiOMfjCDPavn3XkXOMVcPKooXSiKySEZfoHwCMKfGekO5cu93mmfkmjvOUw2ZNuh8jk85mhS~mq4l2VRKXOXfbmFygfyqNmA_"
	},
	"AddressObject": {
	    "Id": 53,
	    "ContactName": null,
	    "UnitNo": null,
	    "StreetNo": null,
	    "SuiteNo": null,
	    "PoBox": null,
	    "Street1": "43 Kembla St ,Wollongong",
	    "Street2": null,
	    "City": null,
	    "State": "150",
	    "Postcode": null,
	    "Country": 13,
	    "Phone": null,
	    "Notes": "Used for AppStore testing! Don't remove",
	    "Format": null,
	    "Saved": null,
	    "Creator": 34,
	    "Created": "2016-04-13T08:06:35+10:00",
	    "Modified": "2016-04-13T08:06:35+10:00",
	    "Print": "43 Kembla St ,Wollongong\n"
	},
	"Geo": {
	    "Id": 1081,
	    "Orm": "DeputecCompany",
	    "RecId": 4,
	    "Longitude": 150.89800956273,
	    "Latitude": -34.422948808035,
	    "No": null,
	    "Street": null,
	    "Suburb": null,
	    "State": null,
	    "Postcode": null,
	    "Country": null,
	    "Creator": 69,
	    "Created": "2016-05-27T05:30:42+10:00",
	    "Modified": "2016-05-27T05:30:42+10:00"
	},
	"CustomData": {
	    "GooglePlaceId": null
	}
    }
}
```

### POST Request

```javascript
const deputy = new DeputyGateway('mycompany.na.deputy.com',
    process.env.DEPUTY_TOKEN);

deputy.post('/resource/Employee/10', {"Active": false})
.then(data => console.log(data);
```

#### Response
```javascript
 {
   "Id": 10,
   "Company": 1,
   "FirstName": "Employee",
   "LastName": "Ten",
   "DisplayName": "Employee Ten",
   "OtherName": null,
   "Salutation": null,
   "MainAddress": null,
   "PostalAddress": null,
   "Contact": 1176,
   "EmergencyAddress": null,
   "DateOfBirth": null,
   "Gender": 1,
   "Photo": 931,
   "UserId": 1,
   "JobAppId": null,
   "Active": false,
   "StartDate": "2017-11-07T00:00:00-08:00",
   "TerminationDate": null,
   "StressProfile": 6,
   "Position": null,
   "HigherDuty": null,
   "Role": 1,
   "AllowAppraisal": true,
   "HistoryId": 5233,
   "CustomFieldData": null,
   "Creator": 1,
   "Created": "2017-11-06T12:04:00-08:00",
   "Modified": "2019-01-21T11:33:28-08:00"
 }
```

### TypeScript

```typescript
import DeputyGateway from "deputy-api-gateway";

const deputy = new DeputyGateway('mycompany.na.deputy.com',
    process.env.DEPUTY_TOKEN);

deputy.get('my/location')
.then(data => console.log(data);
```

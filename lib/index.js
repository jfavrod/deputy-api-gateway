const rp = require('request-promise'),

/**
 * Cleanse, i.e. trim and remove leading & trailing whitespace,
 * the given method.
 * @memberof DeputyGateway
 * @private
 * @param {string} method An method to "clean".
 * @returns {string} A cleaned method
 */
cleanMethod = method => method.trim().replace(/^\//,'').replace(/\/$/,'');

var
/** The firm specific URL for Deputy.com. @private */
api_url,

/** The permanent token for access to the API. @private */
api_token;


/**
 * A Gateway to the Deputy.com API.
 * @see https://www.deputy.com/api-doc/API
 */
module.exports = class DeputyGateway
{
    /**
     * Create a DeputyGateway.
     * @param {string} url The firm specific subdomain URL for Deputy.com.
     * @param {string} token An API token for the Deputy.com API.
     */
    constructor(url, token, version='/api/v1') {
        api_url = url.trim().toLowerCase().replace(/\/$/,'')+version;
        api_token = token.trim();
    }

    /**
     * Perform a GET request to the Deputy.com API.
     * @param {string} method The desired method.
     * @example
     * deputyGateway.get('/me').then(res => {
     *     console.log(res);
     * });
     * @example Response:
     * {
     * 	"Login": "ademo",
     * 	"Name": "API Demo",
     * 	"LastName": "Demo",
     * 	"FirstName": "API",
     * 	"Company": 8,
     * 	"CompanyObject": {
     * 		"Id": 8,
     * 		"Portfolio": null,
     * 		"Code": "ALP",
     * 		"Active": true,
     * 		"ParentCompany": 0,
     * 		"CompanyName": "Alpharetta",
     * 		"TradingName": null,
     * 		"BusinessNumber": null,
     * 		"CompanyNumber": null,
     * 		"IsWorkplace": true,
     * 		"IsPayrollEntity": true,
     * 		"PayrollExportCode": null,
     * 		"Address": 52,
     * 		"Contact": null,
     * 		"Creator": 69,
     * 		"Created": "2015-03-30T12:30:18+11:00",
     * 		"Modified": "2015-11-21T08:02:35+11:00"
     * 	},
     * 	"Portfolio": "Organic Fruits",
     * 	"DeputyVersion": "3.0.7",
     * 	"UserId": 194,
     * 	"EmployeeId": 194,
     * 	"PrimaryEmail": null,
     * 	"PrimaryPhone": null,
     * 	"Permissions": [
     * 		"Can_Manage_Announcements",
     * 		"Can_View_Roster_Cost",
     * 		"Can_Roster_All_Departments",
     * 		"Can_Toggle_Recommendations",
     * 		"Can_Approve_Timesheet_Hours",
     * 		"Can_Approve_Pay_Conditions",
     * 		"Can_ApproveTS_All_Departments",
     * 		"Can_ApproveTS_Outside_Period",
     * 		"Can_Approve_Leave",
     * 		"Can_View_Businesses",
     * 		"Can_View_Departments",
     * 		"Can_View_Employees",
     * 		"Can_Manage_Employees",
     * 		"Can_Access_Staff_Log",
     * 		"Can_Roster_Manage",
     * 		"Can_Manage_Kpi",
     * 		"Can_Approve_All_Roles",
     * 		"Can_Run_Kpi_Report",
     * 		"Allow_Roster_Shift_Outsite_Templ",
     * 		"Can_Enter_Own_Timesheet",
     * 		"Can_Approve_Leave_Pay_Lines",
     * 		"Can_Bump_Own_Timesheet",
     * 		"Can_Bump_Kiosk_Without_Photo",
     * 		"ALL"
     * 	],
     * 	"JournalCategories": [],
     * 	"InProgressTS": null,
     * 	"UserSince": "2016-04-10T06:05:13+10:00",
     * 	"UserObjectForAPI": {
     * 		"Id": 194,
     * 		"DisplayName": "API Demo",
     * 		"Employee": 194,
     * 		"Photo": "https://d1m66yh0amo3la.cloudfront.net/deputec_my_deputy/-135x135_7ef6aa484b5bc3ece5b391656fbcd66e.jpg?Expires=1551010600&Key-Pair-Id=APKAINP5UVPK4IGBHXOQ&Signature=FzbvJ~tab6v9fPlNDroqIp10meiTkekMt5IH4J4g5OijEdUw6nD2TloUfalbdeeXq7~DT2OhP8uYVqLF10897zQDAzgnA8W03QY7CPgpBOU-gnFGdgg59luU~CUwz5TQZN25FH7caVG3Cy~foZfPwV04sjimVlUz3hf4e6ck-5w_"
     * 	},
     * 	"OPS": [],
     * 	"MemosToConfirm": []
     * }
     */
    get(method) {
        let res;
        
        try {
            res = rp.get({
                uri: `${api_url}/${cleanMethod(method)}`,
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'OAuth ' + api_token,
                    'dp-meta-option': 'none'
                },
                followRedirect: true,
                followAllRedirects: true
            });
        }
        catch(err) {
            res = err;
        }

        return res;
    };

    /**
     * Perform a POST request to the Deputy.com API.
     * @param {string} method The desired method.
     * @param {Object} body The body of the post request.
     * @example
     * deputyGateway.post('/resource/Employee/10', {"Active": false})
     * .then(res => console.log(res));
     * @example Response
     * {
     *   "Id": 10,
     *   "Company": 1,
     *   "FirstName": "Employee",
     *   "LastName": "Ten",
     *   "DisplayName": "Employee Ten",
     *   "OtherName": null,
     *   "Salutation": null,
     *   "MainAddress": null,
     *   "PostalAddress": null,
     *   "Contact": 1176,
     *   "EmergencyAddress": null,
     *   "DateOfBirth": null,
     *   "Gender": 1,
     *   "Photo": 931,
     *   "UserId": 1,
     *   "JobAppId": null,
     *   "Active": false,
     *   "StartDate": "2017-11-07T00:00:00-08:00",
     *   "TerminationDate": null,
     *   "StressProfile": 6,
     *   "Position": null,
     *   "HigherDuty": null,
     *   "Role": 1,
     *   "AllowAppraisal": true,
     *   "HistoryId": 5233,
     *   "CustomFieldData": null,
     *   "Creator": 1,
     *   "Created": "2017-11-06T12:04:00-08:00",
     *   "Modified": "2019-01-21T11:33:28-08:00"
     * }
     */
    post(method, body) {
        let res;

        try {
            res = rp.post({
                uri: `${api_url}/${cleanMethod(method)}`,
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'OAuth ' + api_token,
                    'dp-meta-option': 'none'
                },
                body: JSON.stringify(body),
                followRedirect: true,
                followAllRedirects: true
            })
        }
        catch (err) {
            res = err;
        }

        return res;
    }
};

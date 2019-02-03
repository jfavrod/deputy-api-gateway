const rp = require('request-promise'),

/**
 * Cleanse, i.e. trim and remove leading & trailing whitespace,
 * the given endpoint.
 * @memberof DeputyGateway
 * @private
 * @param {string} ep An endpoint to "clean".
 * @returns {string} A cleaned endpoint
 */
cleanEp = ep => ep.trim().replace(/^\//,'').replace(/\/$/,'');

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
     * @param {string} subdomain The firm specific subdomain for Deputy.com.
     * @param {string} token An API token for the Deputy.com API.
     */
    constructor(subdomain, token) {
        api_url = 'https://'+subdomain.trim().toLowerCase().replace(/\/$/,'')+'/api/v1';
        api_token = token.trim();
    }

    /**
     * Perform a GET request to the Deputy.com API.
     * @param {string} endpoint The desired endpoint.
     */
    get(endpoint) {
        let res;
        
        try {
            res = rp.get({
                uri: `${api_url}/${cleanEp(endpoint)}`,
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
        finally {
            return res;
        }
    }
};

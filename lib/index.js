const
rp = require('request-promise'),
API_URL = 'https://offthewaffle.na.deputy.com/api/v1',

/**
 * Cleanse, i.e. trim and remove leading & trailing whitespace,
 * the given endpoint.
 * @memberof DeputyGateway
 * @private
 * @param {string} ep An endpoint to "clean".
 * @returns {string} A cleaned endpoint
 */
cleanEp = ep => ep.trim().replace(/^\//,'').replace(/\/$/,'');


/**
 * A Gateway to the Deputy.com API.
 * @see https://www.deputy.com/api-doc/API
 */
module.exports = class DeputyGateway
{
    /**
     * Create a DeputyGateway.
     * @param {string} token An API token for the Deputy.com API.
     */
    constructor(token) {
        this.token = token;
    }

    /**
     * Perform a GET request to the Deputy.com API.
     * @param {string} endpoint The desired endpoint.
     */
    get(endpoint) {
        return rp.get({
            uri: `${API_URL}/${cleanEp(endpoint)}`,
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'OAuth ' + this.token,
                'dp-meta-option': 'none'
            },
            followRedirect: true,
            followAllRedirects: true
        })
    }
};

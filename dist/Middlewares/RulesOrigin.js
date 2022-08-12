"use strict";
exports.__esModule = true;
var domainsPermissions = [process.env.ORIGIN_URL];
function origin(origin, callback) {
    console.log(origin);
    if (domainsPermissions.indexOf(origin || '') !== -1) {
        callback(null, true);
    }
    else {
        callback(new Error('Domain not allowed'));
    }
}
exports["default"] = origin;

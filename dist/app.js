"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_1 = require("@pnp/sp");
var nodejs_1 = require("@pnp/nodejs");
var webs_1 = require("./webs");
var settings = require("../config/settings.js");
sp_1.sp.setup({
    sp: {
        fetchClientFactory: function () {
            return new nodejs_1.SPFetchClient(settings.sp.url, settings.sp.id, settings.sp.secret);
        },
    },
});
var w = new webs_1.default();
w.getwebinfo();

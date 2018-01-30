"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_1 = require("@pnp/sp");
var webs = /** @class */ (function () {
    function webs() {
    }
    webs.prototype.getwebinfo = function () {
        sp_1.sp.web.select("Id", "Title", "Description").get().then(function (w) {
            console.log("Web Id: " + w.Id);
            console.log("Web Title: " + w.Title);
            console.log("Web Description: " + w.Description);
        }).catch(function (e) {
            console.log(e);
        });
    };
    return webs;
}());
exports.default = webs;

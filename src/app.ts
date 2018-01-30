declare var require: (s: string) => any;

import { sp } from "@pnp/sp";
import { SPFetchClient } from "@pnp/nodejs";
import  webs  from "./webs";
const settings = require("../config/settings.js");
sp.setup({
    sp: {
        fetchClientFactory: () => {
            return new SPFetchClient(settings.sp.url, settings.sp.id, settings.sp.secret);
        },
    },
});

let w = new webs();
w.getwebinfo();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = exports.Auth = exports.Admin = exports.Client = exports.FetchError = void 0;
var admin_1 = require("./admin");
var auth_1 = require("./auth");
var client_1 = require("./client");
var store_1 = require("./store");
var Medusa = /** @class */ (function () {
    function Medusa(config) {
        this.client = new client_1.Client(config);
        this.admin = new admin_1.Admin(this.client);
        this.store = new store_1.Store(this.client);
        this.auth = new auth_1.Auth(this.client, config);
    }
    return Medusa;
}());
exports.default = Medusa;
var client_2 = require("./client");
Object.defineProperty(exports, "FetchError", { enumerable: true, get: function () { return client_2.FetchError; } });
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_2.Client; } });
var admin_2 = require("./admin");
Object.defineProperty(exports, "Admin", { enumerable: true, get: function () { return admin_2.Admin; } });
var auth_2 = require("./auth");
Object.defineProperty(exports, "Auth", { enumerable: true, get: function () { return auth_2.Auth; } });
var store_2 = require("./store");
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return store_2.Store; } });

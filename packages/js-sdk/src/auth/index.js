"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var Auth = /** @class */ (function () {
    function Auth(client, config) {
        var _this = this;
        /**
         * This method is used to retrieve a registration JWT token for a user, customer, or custom actor type. It sends a request to the
         * [Retrieve Registration Token API route](https://docs.medusajs.com/api/store#auth_postactor_typeauth_provider_register).
         *
         * Then, it stores the returned token and passes it in the header of subsequent requests. So, you can call the
         * [store.customer.create](https://docs.medusajs.com/resources/references/js-sdk/store/customer#create) method,
         * for example, after calling this method.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `emailpass` or `google`.
         * @param payload - The data to pass in the request's body for authentication. When using the `emailpass` provider,
         * you pass the email and password.
         * @returns The JWT token used for registration later.
         *
         * @tags auth
         *
         * @example
         * await sdk.auth.register(
         *   "customer",
         *   "emailpass",
         *   {
         *     email: "customer@gmail.com",
         *     password: "supersecret"
         *   }
         * )
         *
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.create({
         *   email: "customer@gmail.com",
         *   password: "supersecret"
         * })
         */
        this.register = function (actor, method, payload) { return __awaiter(_this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/auth/".concat(actor, "/").concat(method, "/register"), {
                            method: "POST",
                            body: payload,
                        })];
                    case 1:
                        token = (_a.sent()).token;
                        this.client.setToken(token);
                        return [2 /*return*/, token];
                }
            });
        }); };
        /**
         * This method retrieves the JWT authenticated token for an admin user, customer, or custom
         * actor type. It sends a request to the [Authenticate API Route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_provider).
         *
         * ### Third-Party Authentication
         *
         * If the API route returns a `location` property, it means that the authentication requires additional steps,
         * typically in a third-party service. The `location` property is returned so that you
         * can redirect the user to the appropriate page.
         *
         * :::note
         *
         * For an example of implementing third-party authentication, refer to the
         * [Third-Party Login in Storefront](https://docs.medusajs.com/resources/storefront-development/customers/third-party-login) guide.
         *
         * :::
         *
         * ### Session Authentication
         *
         * If the `auth.type` of the SDK is set to `session`, this method will also send a request to the
         * [Set Authentication Session API route](https://docs.medusajs.com/api/admin#auth_postsession).
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * ### Automatic Authentication
         *
         * If the authentication was successful, subsequent requests using the SDK will automatically have the necessary authentication headers / session
         * set, based on your JS SDK authentication configurations.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `emailpass` or `google`.
         * @param payload - The data to pass in the request's body for authentication. When using the `emailpass` provider,
         * you pass the email and password.
         * @returns The authentication JWT token
         *
         * @tags auth
         *
         * @example
         * const result = await sdk.auth.login(
         *   "customer",
         *   "emailpass",
         *   {
         *     email: "customer@gmail.com",
         *     password: "supersecret"
         *   }
         * )
         *
         * if (typeof result !== "string") {
         *   alert("Authentication requires additional steps")
         *   // replace with the redirect logic of your application
         *   window.location.href = result.location
         *   return
         * }
         *
         * // customer is now authenticated
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.retrieve()
         */
        this.login = function (actor, method, payload) { return __awaiter(_this, void 0, void 0, function () {
            var _a, token, location;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/auth/".concat(actor, "/").concat(method), {
                            method: "POST",
                            body: payload,
                        })
                        // In the case of an oauth login, we return the redirect location to the caller.
                        // They can decide if they do an immediate redirect or put it in an <a> tag.
                    ];
                    case 1:
                        _a = _b.sent(), token = _a.token, location = _a.location;
                        // In the case of an oauth login, we return the redirect location to the caller.
                        // They can decide if they do an immediate redirect or put it in an <a> tag.
                        if (location) {
                            return [2 /*return*/, { location: location }];
                        }
                        return [4 /*yield*/, this.setToken_(token)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, token];
                }
            });
        }); };
        /**
         * This method is used to validate an Oauth callback from a third-party service, such as Google, for an admin user, customer, or custom actor types.
         * It sends a request to the [Validate Authentication Callback](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providercallback).
         *
         * The method stores the returned token and passes it in the header of subsequent requests. So, you can call the
         * [store.customer.create](https://docs.medusajs.com/resources/references/js-sdk/store/customer#create) or {@link refresh} methods,
         * for example, after calling this method.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `google`.
         * @param query - The query parameters from the Oauth callback, which should be passed to the API route. This includes query parameters like
         * `code` and `state`.
         * @returns The authentication JWT token
         *
         * @tags auth
         *
         * @example
         * await sdk.auth.callback(
         *   "customer",
         *   "google",
         *   {
         *     code: "123",
         *     state: "456"
         *   }
         * )
         *
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.create({
         *   email: "customer@gmail.com",
         *   password: "supersecret"
         * })
         *
         * @privateRemarks
         * The callback expects all query parameters from the Oauth callback to be passed to
         * the backend, and the provider is in charge of parsing and validating them
         */
        this.callback = function (actor, method, query) { return __awaiter(_this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/auth/".concat(actor, "/").concat(method, "/callback"), {
                            method: "GET",
                            query: query,
                        })];
                    case 1:
                        token = (_a.sent()).token;
                        return [4 /*yield*/, this.setToken_(token)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, token];
                }
            });
        }); };
        /**
         * This method refreshes a JWT authentication token, which is useful after validating the Oauth callback
         * with {@link callback}. It sends a request to the [Refresh Authentication Token API route](https://docs.medusajs.com/api/admin#auth_postadminauthtokenrefresh).
         *
         * The method stores the returned token and passes it in the header of subsequent requests. So, you can call other
         * methods that require authentication after calling this method.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * For an example of implementing third-party authentication, refer to the
         * [Third-Party Login in Storefront](https://docs.medusajs.com/resources/storefront-development/customers/third-party-login) guide.
         *
         *
         * @returns The refreshed JWT authentication token.
         *
         * @tags auth
         *
         * @example
         * const token = await sdk.auth.refresh()
         *
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.retrieve()
         */
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/auth/token/refresh", {
                            method: "POST",
                        })
                        // Putting the token in session after refreshing is only useful when the new token has updated info (eg. actor_id).
                        // Ideally we don't use the full JWT in session as key, but just store a pseudorandom key that keeps the rest of the auth context as value.
                    ];
                    case 1:
                        token = (_a.sent()).token;
                        // Putting the token in session after refreshing is only useful when the new token has updated info (eg. actor_id).
                        // Ideally we don't use the full JWT in session as key, but just store a pseudorandom key that keeps the rest of the auth context as value.
                        return [4 /*yield*/, this.setToken_(token)];
                    case 2:
                        // Putting the token in session after refreshing is only useful when the new token has updated info (eg. actor_id).
                        // Ideally we don't use the full JWT in session as key, but just store a pseudorandom key that keeps the rest of the auth context as value.
                        _a.sent();
                        return [2 /*return*/, token];
                }
            });
        }); };
        /**
         * This method logs out the currently authenticated user based on your JS SDK authentication configurations.
         *
         * If the `auth.type` of the SDK is set to `session`, this method will also send a request to the
         * [Delete Authentication Session API route](https://docs.medusajs.com/api/admin#auth_deletesession).
         *
         * The method also clears any stored tokens or sessions, based on your JS SDK authentication configurations.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @tags auth
         *
         * @example
         * await sdk.auth.logout()
         *
         * // user is now logged out
         * // you can't send any requests that require authentication
         */
        this.logout = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.client.fetch("/auth/session", {
                                method: "DELETE",
                            })];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        this.client.clearToken();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * This method requests a reset password token for an admin user, customer, or custom actor type.
         * It sends a request to the [Generate Reset Password Token API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerresetpassword).
         *
         * To reset the password later using the token delivered to the user, use the {@link updateProvider} method.
         *
         * Related guide: [How to allow customers to reset their passwords in a storefront](https://docs.medusajs.com/resources/storefront-development/customers/reset-password).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param provider - The authentication provider to use. For example, `emailpass`.
         * @param body - The data required to identify the user.
         *
         * @tags auth
         *
         * @example
         * sdk.auth.resetPassword(
         *   "customer",
         *   "emailpass",
         *   {
         *     identifier: "customer@gmail.com"
         *   }
         * )
         * .then(() => {
         *   // user receives token
         * })
         */
        this.resetPassword = function (actor, provider, body) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/auth/".concat(actor, "/").concat(provider, "/reset-password"), {
                            method: "POST",
                            body: body,
                            headers: { accept: "text/plain" }, // 201 Created response
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * This method is used to update user-related data authentication data.
         *
         * More specifically, use this method when updating the password of an admin user, customer, or
         * custom actor type after requesting to reset their password with {@link resetPassword}.
         *
         * This method sends a request to [this API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerupdate).
         *
         * Related guide: [How to allow customers to reset their passwords in a storefront](https://docs.medusajs.com/resources/storefront-development/customers/reset-password).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param provider - The authentication provider to use. For example, `emailpass`.
         * @param body - The data necessary to update the user's authentication data. When resetting the user's password,
         * send the `password` property.
         *
         * @tags auth
         *
         * @example
         * sdk.auth.updateProvider(
         *   "customer",
         *   "emailpass",
         *   {
         *     password: "supersecret"
         *   },
         *   token
         * )
         * .then(() => {
         *   // password updated
         * })
         */
        this.updateProvider = function (actor, provider, body, token) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/auth/".concat(actor, "/").concat(provider, "/update"), {
                            method: "POST",
                            body: body,
                            headers: { Authorization: "Bearer ".concat(token) },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @ignore
         */
        this.setToken_ = function (token) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.client.fetch("/auth/session", {
                                method: "POST",
                                headers: { Authorization: "Bearer ".concat(token) },
                            })];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.client.setToken(token);
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.client = client;
        this.config = config;
    }
    return Auth;
}());
exports.Auth = Auth;

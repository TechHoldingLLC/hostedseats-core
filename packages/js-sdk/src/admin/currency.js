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
exports.Currency = void 0;
var Currency = /** @class */ (function () {
    /**
     * @ignore
     */
    function Currency(client) {
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of currencies. It sends a request to the
     * [List Currencies](https://docs.medusajs.com/api/admin#currencies_getcurrencies)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of currencies.
     *
     * @example
     * To retrieve the list of currencies:
     *
     * ```ts
     * sdk.admin.currency.list()
     * .then(({ currencies, count, limit, offset }) => {
     *   console.log(currencies)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.currency.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ currencies, count, limit, offset }) => {
     *   console.log(currencies)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each currency:
     *
     * ```ts
     * sdk.admin.currency.list({
     *   fields: "code,symbol"
     * })
     * .then(({ currencies, count, limit, offset }) => {
     *   console.log(currencies)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Currency.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/currencies", {
                        headers: headers,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method retrieves a currency by its code. It sends a request to the
     * [Get Currency](https://docs.medusajs.com/api/admin#currencies_getcurrenciescode) API route.
     *
     * @param code - The currency's code.
     * @param query - Configure the fields to retrieve in the currency.
     * @param headers - Headers to pass in the request
     * @returns The currency's details.
     *
     * @example
     * To retrieve a currency by its code:
     *
     * ```ts
     * sdk.admin.currency.retrieve("usd")
     * .then(({ currency }) => {
     *   console.log(currency)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.currency.retrieve("usd", {
     *   fields: "code,symbol"
     * })
     * .then(({ currency }) => {
     *   console.log(currency)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Currency.prototype.retrieve = function (code, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/currencies/".concat(code), {
                        headers: headers,
                        query: query,
                    })];
            });
        });
    };
    return Currency;
}());
exports.Currency = Currency;

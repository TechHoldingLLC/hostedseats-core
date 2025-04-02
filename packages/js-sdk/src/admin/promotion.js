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
exports.Promotion = void 0;
var Promotion = /** @class */ (function () {
    /**
     * @ignore
     */
    function Promotion(client) {
        this.client = client;
    }
    /**
     * This method retrieves a promotion by its ID. It sends a request to the
     * [Retrieve Promotion](https://docs.medusajs.com/api/admin#promotions_getpromotionsid)
     * API route.
     *
     * @param id - The promotion's ID.
     * @param query - Configure the fields to retrieve in the promotion.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * To retrieve a promotion by its ID:
     *
     * ```ts
     * sdk.admin.promotion.retrieve("promo_123")
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.promotion.retrieve("promo_123", {
     *   fields: "id,*application_method"
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Promotion.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/".concat(id), {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a list of promotions. It sends a request to the
     * [List Promotions](https://docs.medusajs.com/api/admin#promotions_getpromotions)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of promotions.
     *
     * @example
     * To retrieve the list of promotions:
     *
     * ```ts
     * sdk.admin.promotion.list()
     * .then(({ promotions, count, limit, offset }) => {
     *   console.log(promotions)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.promotion.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ promotions, count, limit, offset }) => {
     *   console.log(promotions)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each promotion:
     *
     * ```ts
     * sdk.admin.promotion.list({
     *   fields: "id,*application_method"
     * })
     * .then(({ promotions, count, limit, offset }) => {
     *   console.log(promotions)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Promotion.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions", {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a new promotion. It sends a request to the
     * [Create Promotion](https://docs.medusajs.com/api/admin#promotions_postpromotions)
     * API route.
     *
     * @param payload - The promotion to create.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.create({
     *   name: "My Promotion",
     *   description: "This is a test promotion",
     *   code: "PROMO123",
     *   starts_at: "2021-01-01",
     *   ends_at: "2021-01-01",
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */
    Promotion.prototype.create = function (payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions", {
                            method: "POST",
                            headers: headers,
                            body: payload,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates a promotion. It sends a request to the
     * [Update Promotion](https://docs.medusajs.com/api/admin#promotions_postpromotionsid)
     * API route.
     *
     * @param id - The promotion's ID.
     * @param payload - The details to update in the promotion.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.update("promo_123", {
     *   code: "PROMO123",
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */
    Promotion.prototype.update = function (id, payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/".concat(id), {
                            method: "POST",
                            headers: headers,
                            body: payload,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes a promotion. It sends a request to the
     * [Delete Promotion](https://docs.medusajs.com/api/admin#promotions_deletepromotionsid)
     * API route.
     *
     * @param id - The promotion's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deleted promotion's details.
     *
     * @example
     * sdk.admin.promotion.delete("promo_123")
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */
    Promotion.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates and adds rules to a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * - If you set the `ruleType` to `rules`, the method sends a request to the
     * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
     * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
     * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
     * - If you set the `ruleType` to `target-rules`, the method sends a request to the
     * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to create.
     * @param payload - The rules to create.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.addRules("promo_123", "rules", {
     *   rules: [
     *     {
     *       operator: "eq",
     *       attribute: "product_id",
     *       values: ["prod_123"]
     *     }
     *   ]
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */
    Promotion.prototype.addRules = function (id, ruleType, payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/".concat(id, "/").concat(ruleType, "/batch"), {
                            method: "POST",
                            headers: headers,
                            body: { create: payload.rules },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates the rules of a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * - If you set the `ruleType` to `rules`, the method sends a request to the
     * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
     * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
     * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
     * - If you set the `ruleType` to `target-rules`, the method sends a request to the
     * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to update.
     * @param payload - The rules to update.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.updateRules("promo_123", "rules", {
     *   rules: [
     *     {
     *       id: "rule_123",
     *       operator: "ne",
     *     }
     *   ]
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */
    Promotion.prototype.updateRules = function (id, ruleType, payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/".concat(id, "/").concat(ruleType, "/batch"), {
                            method: "POST",
                            headers: headers,
                            body: { update: payload.rules },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method removes rules from a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * - If you set the `ruleType` to `rules`, the method sends a request to the
     * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
     * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
     * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
     * - If you set the `ruleType` to `target-rules`, the method sends a request to the
     * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to remove.
     * @param payload - The rules to remove.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.removeRules("promo_123", "rules", {
     *   rule_ids: ["rule_123"]
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */
    Promotion.prototype.removeRules = function (id, ruleType, payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/".concat(id, "/").concat(ruleType, "/batch"), {
                            method: "POST",
                            headers: headers,
                            body: { delete: payload.rule_ids },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves the rules of a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * This method sends a request to the
     * [List Rules of a Promotion API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsidrule_type)
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to retrieve. Can be `rules`, `buy-rules`, or `target-rules`.
     * @param query - Configure the fields to retrieve in the rules.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's rules.
     *
     * @example
     * sdk.admin.promotion.listRules("promo_123", "rules")
     * .then(({ rules }) => {
     *   console.log(rules)
     * })
     */
    Promotion.prototype.listRules = function (id, ruleType, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/".concat(id, "/").concat(ruleType), {
                            headers: headers,
                            query: query,
                        })];
                    case 1: 
                    // eslint-disable-next-line max-len
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve a list of potential rule attributes for the promotion and application method types specified in the query parameters. Only the attributes of the rule type specified in the path parameter are retrieved:
     *
     * - If `rule_type` is `rules`, the attributes of the promotion's type are retrieved.
     * - If `rule_type` is `target-rules`, the target rules' attributes of the application method's type are retrieved.
     * - If `rule_type` is `buy-rules`, the buy rules' attributes of the application method's type are retrieved.
     *
     * This method sends a request to the
     * [List Rule Attribute Options API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsruleattributeoptionsrule_type)
     *
     * @param ruleType - The type of rules to retrieve the attributes for. Can be `rules`, `buy-rules`, or `target-rules`.
     * @param promotionType - The type of promotion to retrieve the attributes for. It can be `standard` or `buyget`.
     * @param headers - Headers to pass in the request.
     * @returns The list of rule attributes.
     *
     * @example
     * sdk.admin.promotion.listRuleAttributes("rules", "standard")
     * .then(({ attributes }) => {
     *   console.log(attributes)
     * })
     */
    Promotion.prototype.listRuleAttributes = function (ruleType, promotionType, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/rule-attribute-options/".concat(ruleType), {
                            headers: headers,
                            query: { promotion_type: promotionType },
                        })];
                    case 1: 
                    // eslint-disable-next-line max-len
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve all potential values for promotion rules and target and buy rules based on the specified rule attribute and type.
     * For example, if you provide the ID of the `currency_code` rule attribute, and set `rule_type` to rules,
     * a list of currencies are retrieved in label-value pairs.
     *
     * This method sends a request to the
     * [List Rule Values API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsrulevalueoptionsrule_typerule_attribute_id)
     *
     * @param ruleType - The type of rules to retrieve the values for. Can be `rules`, `buy-rules`, or `target-rules`.
     * @param ruleValue - The ID of the rule attribute to retrieve the values for.
     * @param query - Configure the fields to retrieve in the rule values.
     * @param headers - Headers to pass in the request.
     * @returns The list of rule values.
     *
     * @example
     * sdk.admin.promotion.listRuleValues("rules", "attr_123")
     * .then(({ values }) => {
     *   console.log(values)
     * })
     */
    Promotion.prototype.listRuleValues = function (ruleType, ruleValue, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/promotions/rule-value-options/".concat(ruleType, "/").concat(ruleValue), {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Promotion;
}());
exports.Promotion = Promotion;

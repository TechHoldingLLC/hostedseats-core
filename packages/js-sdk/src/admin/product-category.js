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
exports.ProductCategory = void 0;
var ProductCategory = /** @class */ (function () {
    /**
     * @ignore
     */
    function ProductCategory(client) {
        this.client = client;
    }
    /**
     * This method creates a product category. It sends a request to the
     * [Create Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategories)
     * API route.
     *
     * @param body - The details of the category to create.
     * @param query - Configure the fields to retrieve in the category.
     * @param headers - Headers to pass in the request
     * @returns The category's details.
     *
     * @example
     * sdk.admin.productCategory.create({
     *   name: "Shirts"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     */
    ProductCategory.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/product-categories", {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method updates a product category. It sends a request to the
     * [Update Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesid)
     * API route.
     *
     * @param id - The product category's ID.
     * @param body - The data to update in the category.
     * @param query - Configure the fields to retrieve in the category.
     * @param headers - Headers to pass in the request
     * @returns The category's details.
     *
     * @example
     * sdk.admin.productCategory.update("pcat_123", {
     *   name: "Shirts"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     */
    ProductCategory.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/product-categories/".concat(id), {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method retrieves a paginated list of product categories. It sends a request to the
     * [List Product Categories](https://docs.medusajs.com/api/admin#product-categories_getproductcategories) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product categories.
     *
     * @example
     * To retrieve the list of product categories:
     *
     * ```ts
     * sdk.admin.productCategory.list()
     * .then(({ product_categories, count, limit, offset }) => {
     *   console.log(product_categories)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.productCategory.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ product_categories, count, limit, offset }) => {
     *   console.log(product_categories)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product category:
     *
     * ```ts
     * sdk.admin.productCategory.list({
     *   fields: "id,*products"
     * })
     * .then(({ product_categories, count, limit, offset }) => {
     *   console.log(product_categories)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    ProductCategory.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/product-categories", {
                        headers: headers,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method retrieves a product category by its ID. It sends a request to the
     * [Get Product Category](https://docs.medusajs.com/api/admin#product-categories_getproductcategoriesid) API route.
     *
     * @param id - The category's ID.
     * @param query - Configure the fields to retrieve in the product category.
     * @param headers - Headers to pass in the request
     * @returns The product category's details.
     *
     * @example
     * To retrieve a product category by its ID:
     *
     * ```ts
     * sdk.admin.productCategory.retrieve("pcat_123")
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.productCategory.retrieve("pcat_123", {
     *   fields: "id,*products"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    ProductCategory.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/product-categories/".concat(id), {
                        query: query,
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method deletes a product category. It sends a request to the
     * [Delete Product Category](https://docs.medusajs.com/api/admin#product-categories_deleteproductcategoriesid)
     * API route.
     *
     * @param id - The category's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.productCategory.delete("pcat_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    ProductCategory.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/product-categories/".concat(id), {
                        method: "DELETE",
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method manaes the products of a category to add or remove them. It sends a request
     * to the [Manage Products](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesidproducts)
     * API route.
     *
     * @param id - The category's ID.
     * @param body - The products to create or update.
     * @param query - Configure the fields to retrieve in the product category.
     * @param headers - Headers to pass in the request
     * @returns The product category's details.
     *
     * @example
     * sdk.admin.productCategory.updateProducts("pcat_123", {
     *   add: ["prod_123"],
     *   remove: ["prod_321"]
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     */
    ProductCategory.prototype.updateProducts = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/product-categories/".concat(id, "/products"), {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    return ProductCategory;
}());
exports.ProductCategory = ProductCategory;

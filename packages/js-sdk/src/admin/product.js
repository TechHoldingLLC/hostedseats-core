"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Product = void 0;
var Product = /** @class */ (function () {
    /**
     * @ignore
     */
    function Product(client) {
        this.client = client;
    }
    /**
     * This method creates a product import. The products are only imported after
     * the import is confirmed using the {@link confirmImport} method.
     *
     * This method sends a request to the
     * [Create Product Import](https://docs.medusajs.com/api/admin#products_postproductsimport)
     * API route.
     *
     * @param body - The import's details.
     * @param query - Query parameters to pass to the request.
     * @param headers - Headers to pass in the request.
     * @returns The import's details.
     *
     * @example
     * sdk.admin.product.import({
     *   file // uploaded File instance
     * })
     * .then(({ transaction_id }) => {
     *   console.log(transaction_id)
     * })
     */
    Product.prototype.import = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = new FormData();
                        form.append("file", body.file);
                        return [4 /*yield*/, this.client.fetch("/admin/products/import", {
                                method: "POST",
                                headers: __assign(__assign({}, headers), { 
                                    // Let the browser determine the content type.
                                    "content-type": null }),
                                body: form,
                                query: query,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method confirms a product import created using the method {@link import}.
     * It sends a request to the
     * [Confirm Product Import](https://docs.medusajs.com/api/admin#products_postproductsimporttransaction_idconfirm)
     * API route.
     *
     * @param transactionId - The ID of the transaction of the created product import. This is returned
     * by the API route used to create the product import.
     * @param query - Query parameters to pass in the request.
     * @param headers - Headers to pass in the request.
     *
     * @example
     * sdk.admin.product.confirmImport("transaction_123")
     * .then(() => {
     *   console.log("Import confirmed")
     * })
     */
    Product.prototype.confirmImport = function (transactionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/import/".concat(transactionId, "/confirm"), {
                            method: "POST",
                            headers: headers,
                            body: {},
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method starts a product export process to retrieve a CSV of exported products.
     *
     * You'll receive in the response the transaction ID of the workflow generating the CSV file.
     * To check the status of the execution, send a `GET` request to
     * `/admin/workflows-executions/export-products/:transaction-id`.
     *
     * Once the execution finishes successfully, a notification is created for the export.
     * You can retrieve the notifications using the `/admin/notification` API route to
     * retrieve the file's download URL.
     *
     * This method sends a request to the [Export Product](https://docs.medusajs.com/api/admin#products_postproductsexport)
     * API route.
     *
     * @param body - The export's details.
     * @param query - Filters to specify which products to export.
     * @param headers - Headers to pass in the request.
     * @returns The export's details.
     *
     * @example
     * sdk.admin.product.export({})
     * .then(({ transaction_id }) => {
     *   console.log(transaction_id)
     * })
     */
    Product.prototype.export = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/export", {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages products to create, update, or delete them. It sends a request to the
     * [Manage Products](https://docs.medusajs.com/api/admin#products_postproductsbatch)
     * API route.
     *
     * @param body - The products to create, update, or delete.
     * @param query - Configure the fields to retrieve in the products.
     * @param headers - Headers to pass in the request
     * @returns The batch operations details.
     *
     * @example
     * sdk.admin.product.batch({
     *   create: [
     *     {
     *       title: "Shirt",
     *       options: [{
     *         title: "Default",
     *         values: ["Default Option"]
     *       }],
     *       variants: [
     *         {
     *           title: "Default",
     *           options: {
     *             Default: "Default Option"
     *           },
     *           prices: []
     *         }
     *       ]
     *     }
     *   ],
     *   update: [{
     *     id: "prod_123",
     *     title: "Pants"
     *   }],
     *   delete: ["prod_321"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */
    Product.prototype.batch = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/batch", {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a product. It sends a request to the
     * [Create Product](https://docs.medusajs.com/api/admin#products_postproducts)
     * API route.
     *
     * @param body - The product's details.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.create({
     *   title: "Shirt",
     *   options: [{
     *     title: "Default",
     *     values: ["Default Option"]
     *   }],
     *   variants: [
     *     {
     *       title: "Default",
     *       options: {
     *         Default: "Default Option"
     *       },
     *       prices: []
     *     }
     *   ],
     *   shipping_profile_id: "sp_123"
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */
    Product.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products", {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates a product. It sends a request to the
     * [Update Product](https://docs.medusajs.com/api/admin#products_postproductsid)
     * API route.
     *
     * @param id - The product's ID.
     * @param body - The data to update in the product.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.update("prod_123", {
     *   title: "Shirt",
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */
    Product.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(id), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of products. It sends a request to the
     * [List Products](https://docs.medusajs.com/api/admin#products_getproducts) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of products.
     *
     * @example
     * To retrieve the list of products:
     *
     * ```ts
     * sdk.admin.product.list()
     * .then(({ products, count, limit, offset }) => {
     *   console.log(products)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.product.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ products, count, limit, offset }) => {
     *   console.log(products)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each products:
     *
     * ```ts
     * sdk.admin.product.list({
     *   fields: "id,*variants"
     * })
     * .then(({ products, count, limit, offset }) => {
     *   console.log(products)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Product.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products", {
                            headers: headers,
                            query: queryParams,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a product by its ID. It sends a request to the
     * [Get Product](https://docs.medusajs.com/api/admin#products_getproductsid)
     * API route.
     *
     * @param id - The product's ID.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * To retrieve a product by its ID:
     *
     * ```ts
     * sdk.admin.product.retrieve("prod_123")
     * .then(({ product }) => {
     *   console.log(product)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.product.retrieve("prod_123", {
     *   fields: "id,*variants"
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Product.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes a product. It sends a request to the
     * [Delete Product](https://docs.medusajs.com/api/admin#products_deleteproductsid)
     * API route.
     *
     * @param id - The product's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.product.delete("prod_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Product.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages the variants of a product. It sends a request to the
     * [Manage Variants](https://docs.medusajs.com/api/admin#products_postproductsidvariantsbatch)
     * API route.
     *
     * @param productId - The product's ID.
     * @param body - The variants to create, update, or delete.
     * @param query - Configure the fields to retrieve in the product variants.
     * @param headers - Headers to pass in the request
     * @returns The product variants' details.
     *
     * @example
     * sdk.admin.product.batchVariants("prod_123", {
     *   create: [
     *     {
     *       title: "Blue Shirt",
     *       options: {
     *         Color: "Blue"
     *       },
     *       prices: []
     *     }
     *   ],
     *   update: [
     *     {
     *       id: "variant_123",
     *       title: "Pants"
     *     }
     *   ],
     *   delete: ["variant_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */
    Product.prototype.batchVariants = function (productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/variants/batch"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a variant for a product. It sends a request to the
     * [Create Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariants)
     * API route.
     *
     * @param productId - The product's ID.
     * @param body - The variant's details.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.createVariant("prod_123", {
     *   title: "Blue Shirt",
     *   options: {
     *     Color: "Blue"
     *   },
     *   prices: [
     *     {
     *       amount: 10,
     *       currency_code: "usd"
     *     }
     *   ]
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */
    Product.prototype.createVariant = function (productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/variants"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates a variant of a product. It sends a request to the
     * [Update Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariantsvariant_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The variant's ID.
     * @param body - The data to update in the variant.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.updateVariant(
     *   "prod_123",
     *   "variant_123",
     *     {
     *     title: "Blue Shirt",
     *   }
     * )
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */
    Product.prototype.updateVariant = function (productId, id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/variants/").concat(id), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of products. It sends a request to the
     * [List Products](https://docs.medusajs.com/api/admin#products_getproductsidvariants) API route.
     *
     * @param productId - The ID of the product to retrieve its variants.
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product variants.
     *
     * @example
     * To retrieve the list of product variants:
     *
     * ```ts
     * sdk.admin.product.listVariants("prod_123")
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.product.listVariants("prod_123", {
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product variant:
     *
     * ```ts
     * sdk.admin.product.listVariants("prod_123", {
     *   fields: "id,*product"
     * })
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Product.prototype.listVariants = function (productId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/variants"), {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a product's variant. It sends a request to the
     * [Retrieve Variant](https://docs.medusajs.com/api/admin#products_getproductsidvariantsvariant_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The variant's ID.
     * @param query - Configure the fields to retrieve in the product variant.
     * @param headers - Headers to pass in the request
     * @returns The product variant's details.
     *
     * @example
     * To retrieve a product variant by its ID:
     *
     * ```ts
     * sdk.admin.product.retrieveVariant(
     *   "prod_123",
     *   "variant_123"
     * )
     * .then(({ variant }) => {
     *   console.log(variant)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.product.retrieveVariant(
     *   "prod_123",
     *   "variant_123",
     *   {
     *     fields: "id, *product"
     *   }
     * )
     * .then(({ variant }) => {
     *   console.log(variant)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Product.prototype.retrieveVariant = function (productId, id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/variants/").concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes a product's variant. It sends a request to the
     * [Delete Variant](https://docs.medusajs.com/api/admin#products_deleteproductsidvariantsvariant_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The ID of the variant.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.product.deleteVariant("prod_123", "variant_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Product.prototype.deleteVariant = function (productId, id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/variants/").concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages a product's variant's inventories to associate them with inventory items,
     * update their inventory items, or delete their association with inventory items.
     *
     * It sends a request to the
     * [Manage Variant Inventory](https://docs.medusajs.com/api/admin#products_postproductsidvariantsinventoryitemsbatch)
     * API route.
     *
     * @param productId - The ID of the product that the variant belongs to.
     * @param body - The inventory items to create, update, or delete.
     * @param query - Pass query parameters in the request.
     * @param headers - Headers to pass in the request
     * @returns The details of the created, updated, or deleted inventory items.
     *
     * @example
     * sdk.admin.product.batchVariantInventoryItems(
     *   "prod_123",
     *   {
     *     create: [
     *       {
     *         inventory_item_id: "iitem_123",
     *         variant_id: "variant_123",
     *         required_quantity: 10
     *       }
     *     ],
     *     update: [
     *       {
     *         inventory_item_id: "iitem_1234",
     *         variant_id: "variant_1234",
     *         required_quantity: 20
     *       }
     *     ],
     *     delete: [
     *       {
     *         inventory_item_id: "iitem_321",
     *         variant_id: "variant_321"
     *       }
     *     ]
     *   }
     * )
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */
    Product.prototype.batchVariantInventoryItems = function (productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/variants/inventory-items/batch"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates an option in a product. It sends a request to the
     * [Create Option](https://docs.medusajs.com/api/admin#products_postproductsidoptions)
     * API route.
     *
     * @param productId - The product's ID.
     * @param body - The option's details.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.createOption(
     *   "prod_123",
     *   {
     *     title: "Color",
     *     values: ["Green", "Blue"]
     *   }
     * )
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */
    Product.prototype.createOption = function (productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/options"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates a product's option. It sends a request to the
     * [Update Option](https://docs.medusajs.com/api/admin#products_postproductsidoptionsoption_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The ID of the option to update.
     * @param body - The data to update in the option.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.updateOption(
     *   "prod_123",
     *   "prodopt_123",
     *   {
     *     title: "Color"
     *   }
     * )
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */
    Product.prototype.updateOption = function (productId, id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/options/").concat(id), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of product options. It sends a request to the
     * [List Options](https://docs.medusajs.com/api/admin#products_getproductsidoptions) API route.
     *
     * @param productId - The ID of the product to retrieve its options
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product options.
     *
     * @example
     * To retrieve the list of product options:
     *
     * ```ts
     * sdk.admin.product.listOptions("prod_123")
     * .then(({ product_options, count, limit, offset }) => {
     *   console.log(product_options)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.product.listOptions("prod_123", {
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ product_options, count, limit, offset }) => {
     *   console.log(product_options)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product options:
     *
     * ```ts
     * sdk.admin.product.listOptions("prod_123", {
     *   fields: "id,title"
     * })
     * .then(({ product_options, count, limit, offset }) => {
     *   console.log(product_options)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Product.prototype.listOptions = function (productId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/options"), {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a product's option. It sends a request to the
     * [Get Option](https://docs.medusajs.com/api/admin#products_getproductsidoptionsoption_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The product option's ID.
     * @param query - Configure the fields to retrieve in the product option.
     * @param headers - Headers to pass in the request
     * @returns The product option's details.
     *
     * @example
     * To retrieve a product option by its ID:
     *
     * ```ts
     * sdk.admin.product.retrieveOption(
     *   "prod_123",
     *   "prodopt_123"
     * )
     * .then(({ product_option }) => {
     *   console.log(product_option)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.product.retrieveOption(
     *   "prod_123",
     *   "prodopt_123",
     *   {
     *     fields: "id,title"
     *   }
     * )
     * .then(({ product_option }) => {
     *   console.log(product_option)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Product.prototype.retrieveOption = function (productId, id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/options/").concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes a product's option. It sends a request to the
     * [Delete Option](https://docs.medusajs.com/api/admin#products_deleteproductsidoptionsoption_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The option's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.product.deleteOption("prod_123", "prodopt_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Product.prototype.deleteOption = function (productId, id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/products/".concat(productId, "/options/").concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Product;
}());
exports.Product = Product;

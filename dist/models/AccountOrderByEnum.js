"use strict";
/* tslint:disable */
/* eslint-disable */
/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByEnumToJSON = exports.AccountOrderByEnumFromJSONTyped = exports.AccountOrderByEnumFromJSON = exports.AccountOrderByEnum = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var AccountOrderByEnum;
(function (AccountOrderByEnum) {
    AccountOrderByEnum["Id"] = "id";
    AccountOrderByEnum["Balance"] = "balance";
})(AccountOrderByEnum = exports.AccountOrderByEnum || (exports.AccountOrderByEnum = {}));
function AccountOrderByEnumFromJSON(json) {
    return AccountOrderByEnumFromJSONTyped(json, false);
}
exports.AccountOrderByEnumFromJSON = AccountOrderByEnumFromJSON;
function AccountOrderByEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AccountOrderByEnumFromJSONTyped = AccountOrderByEnumFromJSONTyped;
function AccountOrderByEnumToJSON(value) {
    return value;
}
exports.AccountOrderByEnumToJSON = AccountOrderByEnumToJSON;

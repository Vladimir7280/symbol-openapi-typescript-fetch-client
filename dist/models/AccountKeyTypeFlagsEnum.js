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
exports.AccountKeyTypeFlagsEnumToJSON = exports.AccountKeyTypeFlagsEnumFromJSONTyped = exports.AccountKeyTypeFlagsEnumFromJSON = exports.AccountKeyTypeFlagsEnum = void 0;
/**
 * Type of account key:
 * * 0 - Unset.
 * * 1 - Linked account public key.
 * * 2 - Node public key on which remote is allowed to harvest.
 * * 4 - VRF public key.
 * @export
 * @enum {string}
 */
var AccountKeyTypeFlagsEnum;
(function (AccountKeyTypeFlagsEnum) {
    AccountKeyTypeFlagsEnum[AccountKeyTypeFlagsEnum["NUMBER_0"] = 0] = "NUMBER_0";
    AccountKeyTypeFlagsEnum[AccountKeyTypeFlagsEnum["NUMBER_1"] = 1] = "NUMBER_1";
    AccountKeyTypeFlagsEnum[AccountKeyTypeFlagsEnum["NUMBER_2"] = 2] = "NUMBER_2";
    AccountKeyTypeFlagsEnum[AccountKeyTypeFlagsEnum["NUMBER_4"] = 4] = "NUMBER_4";
})(AccountKeyTypeFlagsEnum = exports.AccountKeyTypeFlagsEnum || (exports.AccountKeyTypeFlagsEnum = {}));
function AccountKeyTypeFlagsEnumFromJSON(json) {
    return AccountKeyTypeFlagsEnumFromJSONTyped(json, false);
}
exports.AccountKeyTypeFlagsEnumFromJSON = AccountKeyTypeFlagsEnumFromJSON;
function AccountKeyTypeFlagsEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AccountKeyTypeFlagsEnumFromJSONTyped = AccountKeyTypeFlagsEnumFromJSONTyped;
function AccountKeyTypeFlagsEnumToJSON(value) {
    return value;
}
exports.AccountKeyTypeFlagsEnumToJSON = AccountKeyTypeFlagsEnumToJSON;

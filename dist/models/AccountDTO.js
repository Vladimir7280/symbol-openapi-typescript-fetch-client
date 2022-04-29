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
exports.AccountDTOToJSON = exports.AccountDTOFromJSONTyped = exports.AccountDTOFromJSON = void 0;
function AccountDTOFromJSON(json) {
    return AccountDTOFromJSONTyped(json, false);
}
exports.AccountDTOFromJSON = AccountDTOFromJSON;
function AccountDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'address': json['address'],
        'addressHeight': json['addressHeight'],
        'publicKey': json['publicKey'],
        'publicKeyHeight': json['publicKeyHeight'],
        'accountType': json['accountType'],
        'supplementalPublicKeys': json['supplementalPublicKeys'],
        'activityBuckets': json['activityBuckets'],
        'mosaics': json['mosaics'],
        'importance': json['importance'],
        'importanceHeight': json['importanceHeight'],
    };
}
exports.AccountDTOFromJSONTyped = AccountDTOFromJSONTyped;
function AccountDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'address': value.address,
        'addressHeight': value.addressHeight,
        'publicKey': value.publicKey,
        'publicKeyHeight': value.publicKeyHeight,
        'accountType': value.accountType,
        'supplementalPublicKeys': value.supplementalPublicKeys,
        'activityBuckets': value.activityBuckets,
        'mosaics': value.mosaics,
        'importance': value.importance,
        'importanceHeight': value.importanceHeight,
    };
}
exports.AccountDTOToJSON = AccountDTOToJSON;

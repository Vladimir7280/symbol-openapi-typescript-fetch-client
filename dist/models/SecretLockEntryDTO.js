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
exports.SecretLockEntryDTOToJSON = exports.SecretLockEntryDTOFromJSONTyped = exports.SecretLockEntryDTOFromJSON = void 0;
function SecretLockEntryDTOFromJSON(json) {
    return SecretLockEntryDTOFromJSONTyped(json, false);
}
exports.SecretLockEntryDTOFromJSON = SecretLockEntryDTOFromJSON;
function SecretLockEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'ownerAddress': json['ownerAddress'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'endHeight': json['endHeight'],
        'status': json['status'],
        'hashAlgorithm': json['hashAlgorithm'],
        'secret': json['secret'],
        'recipientAddress': json['recipientAddress'],
        'compositeHash': json['compositeHash'],
    };
}
exports.SecretLockEntryDTOFromJSONTyped = SecretLockEntryDTOFromJSONTyped;
function SecretLockEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'ownerAddress': value.ownerAddress,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'endHeight': value.endHeight,
        'status': value.status,
        'hashAlgorithm': value.hashAlgorithm,
        'secret': value.secret,
        'recipientAddress': value.recipientAddress,
        'compositeHash': value.compositeHash,
    };
}
exports.SecretLockEntryDTOToJSON = SecretLockEntryDTOToJSON;

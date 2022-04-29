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
exports.NamespaceNetworkPropertiesDTOToJSON = exports.NamespaceNetworkPropertiesDTOFromJSONTyped = exports.NamespaceNetworkPropertiesDTOFromJSON = void 0;
const runtime_1 = require("../runtime");
function NamespaceNetworkPropertiesDTOFromJSON(json) {
    return NamespaceNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.NamespaceNetworkPropertiesDTOFromJSON = NamespaceNetworkPropertiesDTOFromJSON;
function NamespaceNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxNameSize': !(0, runtime_1.exists)(json, 'maxNameSize') ? undefined : json['maxNameSize'],
        'maxChildNamespaces': !(0, runtime_1.exists)(json, 'maxChildNamespaces') ? undefined : json['maxChildNamespaces'],
        'maxNamespaceDepth': !(0, runtime_1.exists)(json, 'maxNamespaceDepth') ? undefined : json['maxNamespaceDepth'],
        'minNamespaceDuration': !(0, runtime_1.exists)(json, 'minNamespaceDuration') ? undefined : json['minNamespaceDuration'],
        'maxNamespaceDuration': !(0, runtime_1.exists)(json, 'maxNamespaceDuration') ? undefined : json['maxNamespaceDuration'],
        'namespaceGracePeriodDuration': !(0, runtime_1.exists)(json, 'namespaceGracePeriodDuration') ? undefined : json['namespaceGracePeriodDuration'],
        'reservedRootNamespaceNames': !(0, runtime_1.exists)(json, 'reservedRootNamespaceNames') ? undefined : json['reservedRootNamespaceNames'],
        'namespaceRentalFeeSinkAddress': !(0, runtime_1.exists)(json, 'namespaceRentalFeeSinkAddress') ? undefined : json['namespaceRentalFeeSinkAddress'],
        'rootNamespaceRentalFeePerBlock': !(0, runtime_1.exists)(json, 'rootNamespaceRentalFeePerBlock') ? undefined : json['rootNamespaceRentalFeePerBlock'],
        'childNamespaceRentalFee': !(0, runtime_1.exists)(json, 'childNamespaceRentalFee') ? undefined : json['childNamespaceRentalFee'],
    };
}
exports.NamespaceNetworkPropertiesDTOFromJSONTyped = NamespaceNetworkPropertiesDTOFromJSONTyped;
function NamespaceNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxNameSize': value.maxNameSize,
        'maxChildNamespaces': value.maxChildNamespaces,
        'maxNamespaceDepth': value.maxNamespaceDepth,
        'minNamespaceDuration': value.minNamespaceDuration,
        'maxNamespaceDuration': value.maxNamespaceDuration,
        'namespaceGracePeriodDuration': value.namespaceGracePeriodDuration,
        'reservedRootNamespaceNames': value.reservedRootNamespaceNames,
        'namespaceRentalFeeSinkAddress': value.namespaceRentalFeeSinkAddress,
        'rootNamespaceRentalFeePerBlock': value.rootNamespaceRentalFeePerBlock,
        'childNamespaceRentalFee': value.childNamespaceRentalFee,
    };
}
exports.NamespaceNetworkPropertiesDTOToJSON = NamespaceNetworkPropertiesDTOToJSON;

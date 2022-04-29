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
exports.PluginsPropertiesDTOToJSON = exports.PluginsPropertiesDTOFromJSONTyped = exports.PluginsPropertiesDTOFromJSON = void 0;
const runtime_1 = require("../runtime");
function PluginsPropertiesDTOFromJSON(json) {
    return PluginsPropertiesDTOFromJSONTyped(json, false);
}
exports.PluginsPropertiesDTOFromJSON = PluginsPropertiesDTOFromJSON;
function PluginsPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountlink': !(0, runtime_1.exists)(json, 'accountlink') ? undefined : json['accountlink'],
        'aggregate': !(0, runtime_1.exists)(json, 'aggregate') ? undefined : json['aggregate'],
        'lockhash': !(0, runtime_1.exists)(json, 'lockhash') ? undefined : json['lockhash'],
        'locksecret': !(0, runtime_1.exists)(json, 'locksecret') ? undefined : json['locksecret'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        'mosaic': !(0, runtime_1.exists)(json, 'mosaic') ? undefined : json['mosaic'],
        'multisig': !(0, runtime_1.exists)(json, 'multisig') ? undefined : json['multisig'],
        'namespace': !(0, runtime_1.exists)(json, 'namespace') ? undefined : json['namespace'],
        'restrictionaccount': !(0, runtime_1.exists)(json, 'restrictionaccount') ? undefined : json['restrictionaccount'],
        'restrictionmosaic': !(0, runtime_1.exists)(json, 'restrictionmosaic') ? undefined : json['restrictionmosaic'],
        'transfer': !(0, runtime_1.exists)(json, 'transfer') ? undefined : json['transfer'],
    };
}
exports.PluginsPropertiesDTOFromJSONTyped = PluginsPropertiesDTOFromJSONTyped;
function PluginsPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountlink': value.accountlink,
        'aggregate': value.aggregate,
        'lockhash': value.lockhash,
        'locksecret': value.locksecret,
        'metadata': value.metadata,
        'mosaic': value.mosaic,
        'multisig': value.multisig,
        'namespace': value.namespace,
        'restrictionaccount': value.restrictionaccount,
        'restrictionmosaic': value.restrictionmosaic,
        'transfer': value.transfer,
    };
}
exports.PluginsPropertiesDTOToJSON = PluginsPropertiesDTOToJSON;

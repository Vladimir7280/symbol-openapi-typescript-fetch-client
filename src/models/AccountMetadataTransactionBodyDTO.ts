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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccountMetadataTransactionBodyDTO
 */
export interface AccountMetadataTransactionBodyDTO {
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof AccountMetadataTransactionBodyDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof AccountMetadataTransactionBodyDTO
     */
    scopedMetadataKey: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof AccountMetadataTransactionBodyDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof AccountMetadataTransactionBodyDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof AccountMetadataTransactionBodyDTO
     */
    value: string;
}

export function AccountMetadataTransactionBodyDTOFromJSON(json: any): AccountMetadataTransactionBodyDTO {
    return AccountMetadataTransactionBodyDTOFromJSONTyped(json, false);
}

export function AccountMetadataTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountMetadataTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}

export function AccountMetadataTransactionBodyDTOToJSON(value?: AccountMetadataTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}


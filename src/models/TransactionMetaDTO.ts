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
 * @interface TransactionMetaDTO
 */
export interface TransactionMetaDTO {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    height: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    merkleComponentHash: string;
    /**
     * Transaction index within the block.
     * @type {number}
     * @memberof TransactionMetaDTO
     */
    index: number;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof TransactionMetaDTO
     */
    timestamp?: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof TransactionMetaDTO
     */
    feeMultiplier?: number;
}

export function TransactionMetaDTOFromJSON(json: any): TransactionMetaDTO {
    return TransactionMetaDTOFromJSONTyped(json, false);
}

export function TransactionMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMetaDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': json['height'],
        'hash': json['hash'],
        'merkleComponentHash': json['merkleComponentHash'],
        'index': json['index'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'feeMultiplier': !exists(json, 'feeMultiplier') ? undefined : json['feeMultiplier'],
    };
}

export function TransactionMetaDTOToJSON(value?: TransactionMetaDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'hash': value.hash,
        'merkleComponentHash': value.merkleComponentHash,
        'index': value.index,
        'timestamp': value.timestamp,
        'feeMultiplier': value.feeMultiplier,
    };
}


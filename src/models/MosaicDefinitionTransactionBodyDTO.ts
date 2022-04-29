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
 * @interface MosaicDefinitionTransactionBodyDTO
 */
export interface MosaicDefinitionTransactionBodyDTO {
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicDefinitionTransactionBodyDTO
     */
    id: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicDefinitionTransactionBodyDTO
     */
    duration: string;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicDefinitionTransactionBodyDTO
     */
    nonce: number;
    /**
     * - 0x00 (none) - No flags present.
     * - 0x01 (supplyMutable) - Mosaic supports supply changes even when mosaic owner owns partial supply.
     * - 0x02 (transferable) - Mosaic supports transfers between arbitrary accounts. When not set, mosaic can only be transferred to and from mosaic owner.
     * - 0x04 (restrictable) - Mosaic supports custom restrictions configured by mosaic owner.
     * @type {number}
     * @memberof MosaicDefinitionTransactionBodyDTO
     */
    flags: number;
    /**
     * Determines up to what decimal place the mosaic can be divided.
     * Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics.
     * The divisibility must be in the range of 0 and 6.
     * @type {number}
     * @memberof MosaicDefinitionTransactionBodyDTO
     */
    divisibility: number;
}

export function MosaicDefinitionTransactionBodyDTOFromJSON(json: any): MosaicDefinitionTransactionBodyDTO {
    return MosaicDefinitionTransactionBodyDTOFromJSONTyped(json, false);
}

export function MosaicDefinitionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicDefinitionTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'duration': json['duration'],
        'nonce': json['nonce'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
    };
}

export function MosaicDefinitionTransactionBodyDTOToJSON(value?: MosaicDefinitionTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'duration': value.duration,
        'nonce': value.nonce,
        'flags': value.flags,
        'divisibility': value.divisibility,
    };
}



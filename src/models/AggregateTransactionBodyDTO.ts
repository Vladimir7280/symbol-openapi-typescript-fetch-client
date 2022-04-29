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
import {
    CosignatureDTO,
    CosignatureDTOFromJSON,
    CosignatureDTOFromJSONTyped,
    CosignatureDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface AggregateTransactionBodyDTO
 */
export interface AggregateTransactionBodyDTO {
    /**
     * 
     * @type {string}
     * @memberof AggregateTransactionBodyDTO
     */
    transactionsHash: string;
    /**
     * Array of transaction cosignatures.
     * @type {Array<CosignatureDTO>}
     * @memberof AggregateTransactionBodyDTO
     */
    cosignatures: Array<CosignatureDTO>;
}

export function AggregateTransactionBodyDTOFromJSON(json: any): AggregateTransactionBodyDTO {
    return AggregateTransactionBodyDTOFromJSONTyped(json, false);
}

export function AggregateTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionsHash': json['transactionsHash'],
        'cosignatures': ((json['cosignatures'] as Array<any>)),
    };
}

export function AggregateTransactionBodyDTOToJSON(value?: AggregateTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionsHash': value.transactionsHash,
        'cosignatures': ((value.cosignatures as Array<any>)),
    };
}



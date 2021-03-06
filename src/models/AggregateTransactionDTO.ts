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
    AggregateTransactionBodyDTO,
    AggregateTransactionBodyDTOFromJSON,
    AggregateTransactionBodyDTOFromJSONTyped,
    AggregateTransactionBodyDTOToJSON,
    CosignatureDTO,
    CosignatureDTOFromJSON,
    CosignatureDTOFromJSONTyped,
    CosignatureDTOToJSON,
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
    TransactionDTO,
    TransactionDTOFromJSON,
    TransactionDTOFromJSONTyped,
    TransactionDTOToJSON,
} from './';

/**
 * Transaction to combine multiple transactions together.
 * @export
 * @interface AggregateTransactionDTO
 */
export interface AggregateTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof AggregateTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof AggregateTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AggregateTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof AggregateTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof AggregateTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof AggregateTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof AggregateTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof AggregateTransactionDTO
     */
    deadline: string;
    /**
     * 
     * @type {string}
     * @memberof AggregateTransactionDTO
     */
    transactionsHash: string;
    /**
     * Array of transaction cosignatures.
     * @type {Array<CosignatureDTO>}
     * @memberof AggregateTransactionDTO
     */
    cosignatures: Array<CosignatureDTO>;
}

export function AggregateTransactionDTOFromJSON(json: any): AggregateTransactionDTO {
    return AggregateTransactionDTOFromJSONTyped(json, false);
}

export function AggregateTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': json['network'],
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'transactionsHash': json['transactionsHash'],
        'cosignatures': ((json['cosignatures'] as Array<any>)),
    };
}

export function AggregateTransactionDTOToJSON(value?: AggregateTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': value.network,
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'transactionsHash': value.transactionsHash,
        'cosignatures': ((value.cosignatures as Array<any>)),
    };
}



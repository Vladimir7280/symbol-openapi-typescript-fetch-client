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
    AggregateTransactionBodyExtendedDTO,
    AggregateTransactionBodyExtendedDTOFromJSON,
    AggregateTransactionBodyExtendedDTOFromJSONTyped,
    AggregateTransactionBodyExtendedDTOToJSON,
    CosignatureDTO,
    CosignatureDTOFromJSON,
    CosignatureDTOFromJSONTyped,
    CosignatureDTOToJSON,
    EmbeddedTransactionInfoDTO,
    EmbeddedTransactionInfoDTOFromJSON,
    EmbeddedTransactionInfoDTOFromJSONTyped,
    EmbeddedTransactionInfoDTOToJSON,
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
 * @interface AggregateTransactionExtendedDTO
 */
export interface AggregateTransactionExtendedDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof AggregateTransactionExtendedDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof AggregateTransactionExtendedDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AggregateTransactionExtendedDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof AggregateTransactionExtendedDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof AggregateTransactionExtendedDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof AggregateTransactionExtendedDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof AggregateTransactionExtendedDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof AggregateTransactionExtendedDTO
     */
    deadline: string;
    /**
     * 
     * @type {string}
     * @memberof AggregateTransactionExtendedDTO
     */
    transactionsHash: string;
    /**
     * Array of transaction cosignatures.
     * @type {Array<CosignatureDTO>}
     * @memberof AggregateTransactionExtendedDTO
     */
    cosignatures: Array<CosignatureDTO>;
    /**
     * Array of transactions initiated by different accounts.
     * @type {Array<EmbeddedTransactionInfoDTO>}
     * @memberof AggregateTransactionExtendedDTO
     */
    transactions: Array<EmbeddedTransactionInfoDTO>;
}

export function AggregateTransactionExtendedDTOFromJSON(json: any): AggregateTransactionExtendedDTO {
    return AggregateTransactionExtendedDTOFromJSONTyped(json, false);
}

export function AggregateTransactionExtendedDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateTransactionExtendedDTO {
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
        'transactions': ((json['transactions'] as Array<any>)),
    };
}

export function AggregateTransactionExtendedDTOToJSON(value?: AggregateTransactionExtendedDTO | null): any {
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
        'transactions': ((value.transactions as Array<any>)),
    };
}



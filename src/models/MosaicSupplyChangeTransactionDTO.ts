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
    MosaicSupplyChangeActionEnum,
    MosaicSupplyChangeActionEnumFromJSON,
    MosaicSupplyChangeActionEnumFromJSONTyped,
    MosaicSupplyChangeActionEnumToJSON,
    MosaicSupplyChangeTransactionBodyDTO,
    MosaicSupplyChangeTransactionBodyDTOFromJSON,
    MosaicSupplyChangeTransactionBodyDTOFromJSONTyped,
    MosaicSupplyChangeTransactionBodyDTOToJSON,
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
 * Transaction to increase or decrease the supply of a mosaic.
 * @export
 * @interface MosaicSupplyChangeTransactionDTO
 */
export interface MosaicSupplyChangeTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    deadline: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    delta: string;
    /**
     * 
     * @type {MosaicSupplyChangeActionEnum}
     * @memberof MosaicSupplyChangeTransactionDTO
     */
    action: MosaicSupplyChangeActionEnum;
}

export function MosaicSupplyChangeTransactionDTOFromJSON(json: any): MosaicSupplyChangeTransactionDTO {
    return MosaicSupplyChangeTransactionDTOFromJSONTyped(json, false);
}

export function MosaicSupplyChangeTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyChangeTransactionDTO {
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
        'mosaicId': json['mosaicId'],
        'delta': json['delta'],
        'action': json['action'],
    };
}

export function MosaicSupplyChangeTransactionDTOToJSON(value?: MosaicSupplyChangeTransactionDTO | null): any {
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
        'mosaicId': value.mosaicId,
        'delta': value.delta,
        'action': value.action,
    };
}



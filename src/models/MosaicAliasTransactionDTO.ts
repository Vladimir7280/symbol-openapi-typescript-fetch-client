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
    AliasActionEnum,
    AliasActionEnumFromJSON,
    AliasActionEnumFromJSONTyped,
    AliasActionEnumToJSON,
    MosaicAliasTransactionBodyDTO,
    MosaicAliasTransactionBodyDTOFromJSON,
    MosaicAliasTransactionBodyDTOFromJSONTyped,
    MosaicAliasTransactionBodyDTOToJSON,
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
 * Transaction to link a namespace to a mosaic.
 * @export
 * @interface MosaicAliasTransactionDTO
 */
export interface MosaicAliasTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicAliasTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof MosaicAliasTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof MosaicAliasTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof MosaicAliasTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof MosaicAliasTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof MosaicAliasTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicAliasTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicAliasTransactionDTO
     */
    deadline: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof MosaicAliasTransactionDTO
     */
    namespaceId: string;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicAliasTransactionDTO
     */
    mosaicId: string;
    /**
     * 
     * @type {AliasActionEnum}
     * @memberof MosaicAliasTransactionDTO
     */
    aliasAction: AliasActionEnum;
}

export function MosaicAliasTransactionDTOFromJSON(json: any): MosaicAliasTransactionDTO {
    return MosaicAliasTransactionDTOFromJSONTyped(json, false);
}

export function MosaicAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAliasTransactionDTO {
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
        'namespaceId': json['namespaceId'],
        'mosaicId': json['mosaicId'],
        'aliasAction': json['aliasAction'],
    };
}

export function MosaicAliasTransactionDTOToJSON(value?: MosaicAliasTransactionDTO | null): any {
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
        'namespaceId': value.namespaceId,
        'mosaicId': value.mosaicId,
        'aliasAction': value.aliasAction,
    };
}



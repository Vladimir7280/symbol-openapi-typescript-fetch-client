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
    LinkActionEnum,
    LinkActionEnumFromJSON,
    LinkActionEnumFromJSONTyped,
    LinkActionEnumToJSON,
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
    TransactionDTO,
    TransactionDTOFromJSON,
    TransactionDTOFromJSONTyped,
    TransactionDTOToJSON,
    VrfKeyLinkTransactionBodyDTO,
    VrfKeyLinkTransactionBodyDTOFromJSON,
    VrfKeyLinkTransactionBodyDTOFromJSONTyped,
    VrfKeyLinkTransactionBodyDTOToJSON,
} from './';

/**
 * Transaction to link an account with a VRF public key.
 * The key is used to randomize block production and leader/participant selection.
 * Required for all harvesting eligible accounts.
 * @export
 * @interface VrfKeyLinkTransactionDTO
 */
export interface VrfKeyLinkTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof VrfKeyLinkTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof VrfKeyLinkTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof VrfKeyLinkTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof VrfKeyLinkTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof VrfKeyLinkTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof VrfKeyLinkTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof VrfKeyLinkTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof VrfKeyLinkTransactionDTO
     */
    deadline: string;
    /**
     * Public key.
     * @type {string}
     * @memberof VrfKeyLinkTransactionDTO
     */
    linkedPublicKey: string;
    /**
     * 
     * @type {LinkActionEnum}
     * @memberof VrfKeyLinkTransactionDTO
     */
    linkAction: LinkActionEnum;
}

export function VrfKeyLinkTransactionDTOFromJSON(json: any): VrfKeyLinkTransactionDTO {
    return VrfKeyLinkTransactionDTOFromJSONTyped(json, false);
}

export function VrfKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrfKeyLinkTransactionDTO {
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
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': json['linkAction'],
    };
}

export function VrfKeyLinkTransactionDTOToJSON(value?: VrfKeyLinkTransactionDTO | null): any {
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
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': value.linkAction,
    };
}



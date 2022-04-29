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
    EmbeddedTransactionDTO,
    EmbeddedTransactionDTOFromJSON,
    EmbeddedTransactionDTOFromJSONTyped,
    EmbeddedTransactionDTOToJSON,
    LinkActionEnum,
    LinkActionEnumFromJSON,
    LinkActionEnumFromJSONTyped,
    LinkActionEnumToJSON,
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
    VrfKeyLinkTransactionBodyDTO,
    VrfKeyLinkTransactionBodyDTOFromJSON,
    VrfKeyLinkTransactionBodyDTOFromJSONTyped,
    VrfKeyLinkTransactionBodyDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface EmbeddedVrfKeyLinkTransactionDTO
 */
export interface EmbeddedVrfKeyLinkTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedVrfKeyLinkTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedVrfKeyLinkTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedVrfKeyLinkTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedVrfKeyLinkTransactionDTO
     */
    type: number;
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedVrfKeyLinkTransactionDTO
     */
    linkedPublicKey: string;
    /**
     * 
     * @type {LinkActionEnum}
     * @memberof EmbeddedVrfKeyLinkTransactionDTO
     */
    linkAction: LinkActionEnum;
}

export function EmbeddedVrfKeyLinkTransactionDTOFromJSON(json: any): EmbeddedVrfKeyLinkTransactionDTO {
    return EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedVrfKeyLinkTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': json['network'],
        'type': json['type'],
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': json['linkAction'],
    };
}

export function EmbeddedVrfKeyLinkTransactionDTOToJSON(value?: EmbeddedVrfKeyLinkTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': value.network,
        'type': value.type,
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': value.linkAction,
    };
}



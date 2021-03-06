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
} from './';

/**
 * 
 * @export
 * @interface AccountKeyLinkTransactionBodyDTO
 */
export interface AccountKeyLinkTransactionBodyDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof AccountKeyLinkTransactionBodyDTO
     */
    linkedPublicKey: string;
    /**
     * 
     * @type {LinkActionEnum}
     * @memberof AccountKeyLinkTransactionBodyDTO
     */
    linkAction: LinkActionEnum;
}

export function AccountKeyLinkTransactionBodyDTOFromJSON(json: any): AccountKeyLinkTransactionBodyDTO {
    return AccountKeyLinkTransactionBodyDTOFromJSONTyped(json, false);
}

export function AccountKeyLinkTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountKeyLinkTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': json['linkAction'],
    };
}

export function AccountKeyLinkTransactionBodyDTOToJSON(value?: AccountKeyLinkTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': value.linkAction,
    };
}



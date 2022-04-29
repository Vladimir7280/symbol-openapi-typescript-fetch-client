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
    AccountLinkPublicKeyDTO,
    AccountLinkPublicKeyDTOFromJSON,
    AccountLinkPublicKeyDTOFromJSONTyped,
    AccountLinkPublicKeyDTOToJSON,
    AccountLinkVotingKeysDTO,
    AccountLinkVotingKeysDTOFromJSON,
    AccountLinkVotingKeysDTOFromJSONTyped,
    AccountLinkVotingKeysDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface SupplementalPublicKeysDTO
 */
export interface SupplementalPublicKeysDTO {
    /**
     * 
     * @type {AccountLinkPublicKeyDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    linked?: AccountLinkPublicKeyDTO;
    /**
     * 
     * @type {AccountLinkPublicKeyDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    node?: AccountLinkPublicKeyDTO;
    /**
     * 
     * @type {AccountLinkPublicKeyDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    vrf?: AccountLinkPublicKeyDTO;
    /**
     * 
     * @type {AccountLinkVotingKeysDTO}
     * @memberof SupplementalPublicKeysDTO
     */
    voting?: AccountLinkVotingKeysDTO;
}

export function SupplementalPublicKeysDTOFromJSON(json: any): SupplementalPublicKeysDTO {
    return SupplementalPublicKeysDTOFromJSONTyped(json, false);
}

export function SupplementalPublicKeysDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupplementalPublicKeysDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linked': !exists(json, 'linked') ? undefined : json['linked'],
        'node': !exists(json, 'node') ? undefined : json['node'],
        'vrf': !exists(json, 'vrf') ? undefined : json['vrf'],
        'voting': !exists(json, 'voting') ? undefined : json['voting'],
    };
}

export function SupplementalPublicKeysDTOToJSON(value?: SupplementalPublicKeysDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linked': value.linked,
        'node': value.node,
        'vrf': value.vrf,
        'voting': value.voting,
    };
}



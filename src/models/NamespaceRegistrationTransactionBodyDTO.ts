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
    NamespaceRegistrationTypeEnum,
    NamespaceRegistrationTypeEnumFromJSON,
    NamespaceRegistrationTypeEnumFromJSONTyped,
    NamespaceRegistrationTypeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface NamespaceRegistrationTransactionBodyDTO
 */
export interface NamespaceRegistrationTransactionBodyDTO {
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof NamespaceRegistrationTransactionBodyDTO
     */
    duration?: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof NamespaceRegistrationTransactionBodyDTO
     */
    parentId?: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof NamespaceRegistrationTransactionBodyDTO
     */
    id: string;
    /**
     * 
     * @type {NamespaceRegistrationTypeEnum}
     * @memberof NamespaceRegistrationTransactionBodyDTO
     */
    registrationType: NamespaceRegistrationTypeEnum;
    /**
     * Namespace name.
     * @type {string}
     * @memberof NamespaceRegistrationTransactionBodyDTO
     */
    name: string;
}

export function NamespaceRegistrationTransactionBodyDTOFromJSON(json: any): NamespaceRegistrationTransactionBodyDTO {
    return NamespaceRegistrationTransactionBodyDTOFromJSONTyped(json, false);
}

export function NamespaceRegistrationTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceRegistrationTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'registrationType': json['registrationType'],
        'name': json['name'],
    };
}

export function NamespaceRegistrationTransactionBodyDTOToJSON(value?: NamespaceRegistrationTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'parentId': value.parentId,
        'id': value.id,
        'registrationType': value.registrationType,
        'name': value.name,
    };
}



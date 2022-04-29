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
/**
 * 
 * @export
 * @interface AccountRestrictionNetworkPropertiesDTO
 */
export interface AccountRestrictionNetworkPropertiesDTO {
    /**
     * Maximum number of account restriction values.
     * @type {string}
     * @memberof AccountRestrictionNetworkPropertiesDTO
     */
    maxAccountRestrictionValues?: string;
}

export function AccountRestrictionNetworkPropertiesDTOFromJSON(json: any): AccountRestrictionNetworkPropertiesDTO {
    return AccountRestrictionNetworkPropertiesDTOFromJSONTyped(json, false);
}

export function AccountRestrictionNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionNetworkPropertiesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxAccountRestrictionValues': !exists(json, 'maxAccountRestrictionValues') ? undefined : json['maxAccountRestrictionValues'],
    };
}

export function AccountRestrictionNetworkPropertiesDTOToJSON(value?: AccountRestrictionNetworkPropertiesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxAccountRestrictionValues': value.maxAccountRestrictionValues,
    };
}



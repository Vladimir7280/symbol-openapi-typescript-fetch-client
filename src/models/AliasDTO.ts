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
    AliasTypeEnum,
    AliasTypeEnumFromJSON,
    AliasTypeEnumFromJSONTyped,
    AliasTypeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface AliasDTO
 */
export interface AliasDTO {
    /**
     * 
     * @type {AliasTypeEnum}
     * @memberof AliasDTO
     */
    type: AliasTypeEnum;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof AliasDTO
     */
    mosaicId?: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AliasDTO
     */
    address?: string;
}

export function AliasDTOFromJSON(json: any): AliasDTO {
    return AliasDTOFromJSONTyped(json, false);
}

export function AliasDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'mosaicId': !exists(json, 'mosaicId') ? undefined : json['mosaicId'],
        'address': !exists(json, 'address') ? undefined : json['address'],
    };
}

export function AliasDTOToJSON(value?: AliasDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'mosaicId': value.mosaicId,
        'address': value.address,
    };
}



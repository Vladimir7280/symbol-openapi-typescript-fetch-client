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
 * @interface MosaicNamesDTO
 */
export interface MosaicNamesDTO {
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicNamesDTO
     */
    mosaicId: string;
    /**
     * Mosaic linked namespace names.
     * @type {Array<string>}
     * @memberof MosaicNamesDTO
     */
    names: Array<string>;
}

export function MosaicNamesDTOFromJSON(json: any): MosaicNamesDTO {
    return MosaicNamesDTOFromJSONTyped(json, false);
}

export function MosaicNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicNamesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mosaicId': json['mosaicId'],
        'names': json['names'],
    };
}

export function MosaicNamesDTOToJSON(value?: MosaicNamesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mosaicId': value.mosaicId,
        'names': value.names,
    };
}



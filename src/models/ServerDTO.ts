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
    DeploymentDTO,
    DeploymentDTOFromJSON,
    DeploymentDTOFromJSONTyped,
    DeploymentDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface ServerDTO
 */
export interface ServerDTO {
    /**
     * catapult-rest component version.
     * @type {string}
     * @memberof ServerDTO
     */
    restVersion: string;
    /**
     * catapult-sdk component version.
     * @type {string}
     * @memberof ServerDTO
     */
    sdkVersion: string;
    /**
     * 
     * @type {DeploymentDTO}
     * @memberof ServerDTO
     */
    deployment: DeploymentDTO;
}

export function ServerDTOFromJSON(json: any): ServerDTO {
    return ServerDTOFromJSONTyped(json, false);
}

export function ServerDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'restVersion': json['restVersion'],
        'sdkVersion': json['sdkVersion'],
        'deployment': json['deployment'],
    };
}

export function ServerDTOToJSON(value?: ServerDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'restVersion': value.restVersion,
        'sdkVersion': value.sdkVersion,
        'deployment': value.deployment,
    };
}


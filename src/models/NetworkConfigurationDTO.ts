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
    ChainPropertiesDTO,
    ChainPropertiesDTOFromJSON,
    ChainPropertiesDTOFromJSONTyped,
    ChainPropertiesDTOToJSON,
    NetworkPropertiesDTO,
    NetworkPropertiesDTOFromJSON,
    NetworkPropertiesDTOFromJSONTyped,
    NetworkPropertiesDTOToJSON,
    PluginsPropertiesDTO,
    PluginsPropertiesDTOFromJSON,
    PluginsPropertiesDTOFromJSONTyped,
    PluginsPropertiesDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface NetworkConfigurationDTO
 */
export interface NetworkConfigurationDTO {
    /**
     * 
     * @type {NetworkPropertiesDTO}
     * @memberof NetworkConfigurationDTO
     */
    network: NetworkPropertiesDTO;
    /**
     * 
     * @type {ChainPropertiesDTO}
     * @memberof NetworkConfigurationDTO
     */
    chain: ChainPropertiesDTO;
    /**
     * 
     * @type {PluginsPropertiesDTO}
     * @memberof NetworkConfigurationDTO
     */
    plugins: PluginsPropertiesDTO;
}

export function NetworkConfigurationDTOFromJSON(json: any): NetworkConfigurationDTO {
    return NetworkConfigurationDTOFromJSONTyped(json, false);
}

export function NetworkConfigurationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkConfigurationDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network': json['network'],
        'chain': json['chain'],
        'plugins': json['plugins'],
    };
}

export function NetworkConfigurationDTOToJSON(value?: NetworkConfigurationDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network': value.network,
        'chain': value.chain,
        'plugins': value.plugins,
    };
}



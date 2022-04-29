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
    MessageGroup,
    MessageGroupFromJSON,
    MessageGroupFromJSONTyped,
    MessageGroupToJSON,
} from './';

/**
 * 
 * @export
 * @interface FinalizationProofDTO
 */
export interface FinalizationProofDTO {
    /**
     * 
     * @type {number}
     * @memberof FinalizationProofDTO
     */
    version: number;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof FinalizationProofDTO
     */
    finalizationEpoch: number;
    /**
     * Finalization point
     * @type {number}
     * @memberof FinalizationProofDTO
     */
    finalizationPoint: number;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof FinalizationProofDTO
     */
    height: string;
    /**
     * 
     * @type {string}
     * @memberof FinalizationProofDTO
     */
    hash: string;
    /**
     * 
     * @type {Array<MessageGroup>}
     * @memberof FinalizationProofDTO
     */
    messageGroups: Array<MessageGroup>;
}

export function FinalizationProofDTOFromJSON(json: any): FinalizationProofDTO {
    return FinalizationProofDTOFromJSONTyped(json, false);
}

export function FinalizationProofDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinalizationProofDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'finalizationEpoch': json['finalizationEpoch'],
        'finalizationPoint': json['finalizationPoint'],
        'height': json['height'],
        'hash': json['hash'],
        'messageGroups': ((json['messageGroups'] as Array<any>)),
    };
}

export function FinalizationProofDTOToJSON(value?: FinalizationProofDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'finalizationEpoch': value.finalizationEpoch,
        'finalizationPoint': value.finalizationPoint,
        'height': value.height,
        'hash': value.hash,
        'messageGroups': ((value.messageGroups as Array<any>)),
    };
}


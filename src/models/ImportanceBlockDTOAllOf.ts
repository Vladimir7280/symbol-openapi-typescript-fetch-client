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
 * @interface ImportanceBlockDTOAllOf
 */
export interface ImportanceBlockDTOAllOf {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ImportanceBlockDTOAllOf
     */
    votingEligibleAccountsCount: number;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    harvestingEligibleAccountsCount: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    totalVotingBalance: string;
    /**
     * 
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    previousImportanceBlockHash: string;
}

export function ImportanceBlockDTOAllOfFromJSON(json: any): ImportanceBlockDTOAllOf {
    return ImportanceBlockDTOAllOfFromJSONTyped(json, false);
}

export function ImportanceBlockDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportanceBlockDTOAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'votingEligibleAccountsCount': json['votingEligibleAccountsCount'],
        'harvestingEligibleAccountsCount': json['harvestingEligibleAccountsCount'],
        'totalVotingBalance': json['totalVotingBalance'],
        'previousImportanceBlockHash': json['previousImportanceBlockHash'],
    };
}

export function ImportanceBlockDTOAllOfToJSON(value?: ImportanceBlockDTOAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'votingEligibleAccountsCount': value.votingEligibleAccountsCount,
        'harvestingEligibleAccountsCount': value.harvestingEligibleAccountsCount,
        'totalVotingBalance': value.totalVotingBalance,
        'previousImportanceBlockHash': value.previousImportanceBlockHash,
    };
}



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


import * as runtime from '../runtime';
import {
    MerkleStateInfoDTO,
    MerkleStateInfoDTOFromJSON,
    MerkleStateInfoDTOToJSON,
    ModelError,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    MultisigAccountGraphInfoDTO,
    MultisigAccountGraphInfoDTOFromJSON,
    MultisigAccountGraphInfoDTOToJSON,
    MultisigAccountInfoDTO,
    MultisigAccountInfoDTOFromJSON,
    MultisigAccountInfoDTOToJSON,
} from '../models';

export interface GetAccountMultisigRequest {
    address: string;
}

export interface GetAccountMultisigGraphRequest {
    address: string;
}

export interface GetAccountMultisigMerkleRequest {
    address: string;
}

/**
 * 
 */
export class MultisigRoutesApi extends runtime.BaseAPI {

    /**
     * Returns the multisig account information.
     * Get multisig account information
     */
    async getAccountMultisigRaw(requestParameters: GetAccountMultisigRequest): Promise<runtime.ApiResponse<MultisigAccountInfoDTO>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getAccountMultisig.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/{address}/multisig`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MultisigAccountInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns the multisig account information.
     * Get multisig account information
     */
    async getAccountMultisig(address: string): Promise<MultisigAccountInfoDTO> {
        const response = await this.getAccountMultisigRaw({ address: address });
        return await response.value();
    }

    /**
     * Returns the multisig account graph.
     * Get multisig account graph information
     */
    async getAccountMultisigGraphRaw(requestParameters: GetAccountMultisigGraphRequest): Promise<runtime.ApiResponse<Array<MultisigAccountGraphInfoDTO>>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getAccountMultisigGraph.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/{address}/multisig/graph`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MultisigAccountGraphInfoDTOFromJSON));
    }

    /**
     * Returns the multisig account graph.
     * Get multisig account graph information
     */
    async getAccountMultisigGraph(address: string): Promise<Array<MultisigAccountGraphInfoDTO>> {
        const response = await this.getAccountMultisigGraphRaw({ address: address });
        return await response.value();
    }

    /**
     * Returns the multisig account merkle information.
     * Get multisig account merkle information
     */
    async getAccountMultisigMerkleRaw(requestParameters: GetAccountMultisigMerkleRequest): Promise<runtime.ApiResponse<MerkleStateInfoDTO>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getAccountMultisigMerkle.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/{address}/multisig/merkle`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns the multisig account merkle information.
     * Get multisig account merkle information
     */
    async getAccountMultisigMerkle(address: string): Promise<MerkleStateInfoDTO> {
        const response = await this.getAccountMultisigMerkleRaw({ address: address });
        return await response.value();
    }

}

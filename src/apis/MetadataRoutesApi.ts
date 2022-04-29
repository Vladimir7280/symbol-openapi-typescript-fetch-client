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
    MetadataInfoDTO,
    MetadataInfoDTOFromJSON,
    MetadataInfoDTOToJSON,
    MetadataPage,
    MetadataPageFromJSON,
    MetadataPageToJSON,
    MetadataTypeEnum,
    MetadataTypeEnumFromJSON,
    MetadataTypeEnumToJSON,
    ModelError,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    Order,
    OrderFromJSON,
    OrderToJSON,
} from '../models';

export interface GetMetadataRequest {
    compositeHash: string;
}

export interface GetMetadataMerkleRequest {
    compositeHash: string;
}

export interface SearchMetadataEntriesRequest {
    sourceAddress?: string;
    targetAddress?: string;
    scopedMetadataKey?: string;
    targetId?: string;
    metadataType?: MetadataTypeEnum;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}

/**
 * 
 */
export class MetadataRoutesApi extends runtime.BaseAPI {

    /**
     * Gets the metadata for a given composite hash.
     * Get metadata information
     */
    async getMetadataRaw(requestParameters: GetMetadataRequest): Promise<runtime.ApiResponse<MetadataInfoDTO>> {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash','Required parameter requestParameters.compositeHash was null or undefined when calling getMetadata.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/metadata/{compositeHash}`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataInfoDTOFromJSON(jsonValue));
    }

    /**
     * Gets the metadata for a given composite hash.
     * Get metadata information
     */
    async getMetadata(compositeHash: string): Promise<MetadataInfoDTO> {
        const response = await this.getMetadataRaw({ compositeHash: compositeHash });
        return await response.value();
    }

    /**
     * Gets the metadata merkle for a given composite hash.
     * Get metadata merkle information
     */
    async getMetadataMerkleRaw(requestParameters: GetMetadataMerkleRequest): Promise<runtime.ApiResponse<MerkleStateInfoDTO>> {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash','Required parameter requestParameters.compositeHash was null or undefined when calling getMetadataMerkle.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/metadata/{compositeHash}/merkle`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }

    /**
     * Gets the metadata merkle for a given composite hash.
     * Get metadata merkle information
     */
    async getMetadataMerkle(compositeHash: string): Promise<MerkleStateInfoDTO> {
        const response = await this.getMetadataMerkleRaw({ compositeHash: compositeHash });
        return await response.value();
    }

    /**
     * Returns an array of metadata.
     * Search metadata entries
     */
    async searchMetadataEntriesRaw(requestParameters: SearchMetadataEntriesRequest): Promise<runtime.ApiResponse<MetadataPage>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.sourceAddress !== undefined) {
            queryParameters['sourceAddress'] = requestParameters.sourceAddress;
        }

        if (requestParameters.targetAddress !== undefined) {
            queryParameters['targetAddress'] = requestParameters.targetAddress;
        }

        if (requestParameters.scopedMetadataKey !== undefined) {
            queryParameters['scopedMetadataKey'] = requestParameters.scopedMetadataKey;
        }

        if (requestParameters.targetId !== undefined) {
            queryParameters['targetId'] = requestParameters.targetId;
        }

        if (requestParameters.metadataType !== undefined) {
            queryParameters['metadataType'] = requestParameters.metadataType;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/metadata`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataPageFromJSON(jsonValue));
    }

    /**
     * Returns an array of metadata.
     * Search metadata entries
     */
    async searchMetadataEntries(sourceAddress?: string, targetAddress?: string, scopedMetadataKey?: string, targetId?: string, metadataType?: MetadataTypeEnum, pageSize?: number, pageNumber?: number, offset?: string, order?: Order): Promise<MetadataPage> {
        const response = await this.searchMetadataEntriesRaw({ sourceAddress: sourceAddress, targetAddress: targetAddress, scopedMetadataKey: scopedMetadataKey, targetId: targetId, metadataType: metadataType, pageSize: pageSize, pageNumber: pageNumber, offset: offset, order: order });
        return await response.value();
    }

}

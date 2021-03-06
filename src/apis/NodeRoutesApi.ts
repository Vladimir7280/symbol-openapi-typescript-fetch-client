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
    NodeHealthInfoDTO,
    NodeHealthInfoDTOFromJSON,
    NodeHealthInfoDTOToJSON,
    NodeInfoDTO,
    NodeInfoDTOFromJSON,
    NodeInfoDTOToJSON,
    NodeTimeDTO,
    NodeTimeDTOFromJSON,
    NodeTimeDTOToJSON,
    ServerInfoDTO,
    ServerInfoDTOFromJSON,
    ServerInfoDTOToJSON,
    StorageInfoDTO,
    StorageInfoDTOFromJSON,
    StorageInfoDTOToJSON,
    UnlockedAccountDTO,
    UnlockedAccountDTOFromJSON,
    UnlockedAccountDTOToJSON,
} from '../models';

/**
 * 
 */
export class NodeRoutesApi extends runtime.BaseAPI {

    /**
     * Supplies information regarding the connection and services status.
     * Get the node health information
     */
    async getNodeHealthRaw(): Promise<runtime.ApiResponse<NodeHealthInfoDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/node/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeHealthInfoDTOFromJSON(jsonValue));
    }

    /**
     * Supplies information regarding the connection and services status.
     * Get the node health information
     */
    async getNodeHealth(): Promise<NodeHealthInfoDTO> {
        const response = await this.getNodeHealthRaw();
        return await response.value();
    }

    /**
     * Supplies additional information about the application running on a node.
     * Get the node information
     */
    async getNodeInfoRaw(): Promise<runtime.ApiResponse<NodeInfoDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/node/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeInfoDTOFromJSON(jsonValue));
    }

    /**
     * Supplies additional information about the application running on a node.
     * Get the node information
     */
    async getNodeInfo(): Promise<NodeInfoDTO> {
        const response = await this.getNodeInfoRaw();
        return await response.value();
    }

    /**
     * Gets the list of peers visible by the node.
     * Get peers information
     */
    async getNodePeersRaw(): Promise<runtime.ApiResponse<Array<NodeInfoDTO>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/node/peers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NodeInfoDTOFromJSON));
    }

    /**
     * Gets the list of peers visible by the node.
     * Get peers information
     */
    async getNodePeers(): Promise<Array<NodeInfoDTO>> {
        const response = await this.getNodePeersRaw();
        return await response.value();
    }

    /**
     * Returns storage information about the node.
     * Get the storage information of the node
     */
    async getNodeStorageRaw(): Promise<runtime.ApiResponse<StorageInfoDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/node/storage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns storage information about the node.
     * Get the storage information of the node
     */
    async getNodeStorage(): Promise<StorageInfoDTO> {
        const response = await this.getNodeStorageRaw();
        return await response.value();
    }

    /**
     * Gets the node time at the moment the reply was sent and received.
     * Get the node time
     */
    async getNodeTimeRaw(): Promise<runtime.ApiResponse<NodeTimeDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/node/time`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeTimeDTOFromJSON(jsonValue));
    }

    /**
     * Gets the node time at the moment the reply was sent and received.
     * Get the node time
     */
    async getNodeTime(): Promise<NodeTimeDTO> {
        const response = await this.getNodeTimeRaw();
        return await response.value();
    }

    /**
     * Returns the version of the running catapult-rest component.
     * Get the version of the running REST component
     */
    async getServerInfoRaw(): Promise<runtime.ApiResponse<ServerInfoDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/node/server`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ServerInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns the version of the running catapult-rest component.
     * Get the version of the running REST component
     */
    async getServerInfo(): Promise<ServerInfoDTO> {
        const response = await this.getServerInfoRaw();
        return await response.value();
    }

    /**
     * Returns array of unlocked account public keys.
     * Get the unlocked harvesting account public keys.
     */
    async getUnlockedAccountRaw(): Promise<runtime.ApiResponse<UnlockedAccountDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/node/unlockedaccount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UnlockedAccountDTOFromJSON(jsonValue));
    }

    /**
     * Returns array of unlocked account public keys.
     * Get the unlocked harvesting account public keys.
     */
    async getUnlockedAccount(): Promise<UnlockedAccountDTO> {
        const response = await this.getUnlockedAccountRaw();
        return await response.value();
    }

}

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
    ModelError,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    NetworkConfigurationDTO,
    NetworkConfigurationDTOFromJSON,
    NetworkConfigurationDTOToJSON,
    NetworkTypeDTO,
    NetworkTypeDTOFromJSON,
    NetworkTypeDTOToJSON,
    RentalFeesDTO,
    RentalFeesDTOFromJSON,
    RentalFeesDTOToJSON,
    TransactionFeesDTO,
    TransactionFeesDTOFromJSON,
    TransactionFeesDTOToJSON,
} from '../models';

/**
 * 
 */
export class NetworkRoutesApi extends runtime.BaseAPI {

    /**
     * Returns the content from a catapult-server network configuration file (resources/config-network.properties). To enable this feature, the REST setting \"network.propertiesFilePath\" must define where the file is located. This is adjustable via the configuration file (rest/resources/rest.json) per REST instance. 
     * Get the network properties
     */
    async getNetworkPropertiesRaw(): Promise<runtime.ApiResponse<NetworkConfigurationDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/network/properties`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkConfigurationDTOFromJSON(jsonValue));
    }

    /**
     * Returns the content from a catapult-server network configuration file (resources/config-network.properties). To enable this feature, the REST setting \"network.propertiesFilePath\" must define where the file is located. This is adjustable via the configuration file (rest/resources/rest.json) per REST instance. 
     * Get the network properties
     */
    async getNetworkProperties(): Promise<NetworkConfigurationDTO> {
        const response = await this.getNetworkPropertiesRaw();
        return await response.value();
    }

    /**
     * Returns the current network type.
     * Get the current network type of the chain
     */
    async getNetworkTypeRaw(): Promise<runtime.ApiResponse<NetworkTypeDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/network`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkTypeDTOFromJSON(jsonValue));
    }

    /**
     * Returns the current network type.
     * Get the current network type of the chain
     */
    async getNetworkType(): Promise<NetworkTypeDTO> {
        const response = await this.getNetworkTypeRaw();
        return await response.value();
    }

    /**
     * Returns the estimated effective rental fees for namespaces and mosaics. This endpoint is only available if the REST instance has access to catapult-server ``resources/config-network.properties`` file. To activate this feature, add the setting \"network.propertiesFilePath\" in the configuration file (rest/resources/rest.json). 
     * Get rental fees information
     */
    async getRentalFeesRaw(): Promise<runtime.ApiResponse<RentalFeesDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/network/fees/rental`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RentalFeesDTOFromJSON(jsonValue));
    }

    /**
     * Returns the estimated effective rental fees for namespaces and mosaics. This endpoint is only available if the REST instance has access to catapult-server ``resources/config-network.properties`` file. To activate this feature, add the setting \"network.propertiesFilePath\" in the configuration file (rest/resources/rest.json). 
     * Get rental fees information
     */
    async getRentalFees(): Promise<RentalFeesDTO> {
        const response = await this.getRentalFeesRaw();
        return await response.value();
    }

    /**
     * Returns the average, median, highest and lower fee multiplier over the last \"numBlocksTransactionFeeStats\". The setting \"numBlocksTransactionFeeStats\" is adjustable via the configuration file (rest/resources/rest.json) per REST instance. 
     * Get transaction fees information
     */
    async getTransactionFeesRaw(): Promise<runtime.ApiResponse<TransactionFeesDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/network/fees/transaction`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFeesDTOFromJSON(jsonValue));
    }

    /**
     * Returns the average, median, highest and lower fee multiplier over the last \"numBlocksTransactionFeeStats\". The setting \"numBlocksTransactionFeeStats\" is adjustable via the configuration file (rest/resources/rest.json) per REST instance. 
     * Get transaction fees information
     */
    async getTransactionFees(): Promise<TransactionFeesDTO> {
        const response = await this.getTransactionFeesRaw();
        return await response.value();
    }

}

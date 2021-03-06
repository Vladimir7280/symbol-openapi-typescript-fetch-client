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
    AnnounceTransactionInfoDTO,
    AnnounceTransactionInfoDTOFromJSON,
    AnnounceTransactionInfoDTOToJSON,
    Cosignature,
    CosignatureFromJSON,
    CosignatureToJSON,
    ModelError,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    Order,
    OrderFromJSON,
    OrderToJSON,
    TransactionIds,
    TransactionIdsFromJSON,
    TransactionIdsToJSON,
    TransactionInfoDTO,
    TransactionInfoDTOFromJSON,
    TransactionInfoDTOToJSON,
    TransactionPage,
    TransactionPageFromJSON,
    TransactionPageToJSON,
    TransactionPayload,
    TransactionPayloadFromJSON,
    TransactionPayloadToJSON,
    TransactionTypeEnum,
    TransactionTypeEnumFromJSON,
    TransactionTypeEnumToJSON,
} from '../models';

export interface AnnounceCosignatureTransactionRequest {
    cosignature: Cosignature;
}

export interface AnnouncePartialTransactionRequest {
    transactionPayload: TransactionPayload;
}

export interface AnnounceTransactionRequest {
    transactionPayload: TransactionPayload;
}

export interface GetConfirmedTransactionRequest {
    transactionId: string;
}

export interface GetConfirmedTransactionsRequest {
    transactionIds: TransactionIds;
}

export interface GetPartialTransactionRequest {
    transactionId: string;
}

export interface GetPartialTransactionsRequest {
    transactionIds: TransactionIds;
}

export interface GetUnconfirmedTransactionRequest {
    transactionId: string;
}

export interface GetUnconfirmedTransactionsRequest {
    transactionIds: TransactionIds;
}

export interface SearchConfirmedTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}

export interface SearchPartialTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}

export interface SearchUnconfirmedTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}

/**
 * 
 */
export class TransactionRoutesApi extends runtime.BaseAPI {

    /**
     * Announces a cosignature transaction to the network.
     * Announce a cosignature transaction
     */
    async announceCosignatureTransactionRaw(requestParameters: AnnounceCosignatureTransactionRequest): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>> {
        if (requestParameters.cosignature === null || requestParameters.cosignature === undefined) {
            throw new runtime.RequiredError('cosignature','Required parameter requestParameters.cosignature was null or undefined when calling announceCosignatureTransaction.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transactions/cosignature`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CosignatureToJSON(requestParameters.cosignature),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AnnounceTransactionInfoDTOFromJSON(jsonValue));
    }

    /**
     * Announces a cosignature transaction to the network.
     * Announce a cosignature transaction
     */
    async announceCosignatureTransaction(cosignature: Cosignature): Promise<AnnounceTransactionInfoDTO> {
        const response = await this.announceCosignatureTransactionRaw({ cosignature: cosignature });
        return await response.value();
    }

    /**
     * Announces an aggregate bonded transaction to the network.
     * Announce an aggregate bonded transaction
     */
    async announcePartialTransactionRaw(requestParameters: AnnouncePartialTransactionRequest): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>> {
        if (requestParameters.transactionPayload === null || requestParameters.transactionPayload === undefined) {
            throw new runtime.RequiredError('transactionPayload','Required parameter requestParameters.transactionPayload was null or undefined when calling announcePartialTransaction.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transactions/partial`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionPayloadToJSON(requestParameters.transactionPayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AnnounceTransactionInfoDTOFromJSON(jsonValue));
    }

    /**
     * Announces an aggregate bonded transaction to the network.
     * Announce an aggregate bonded transaction
     */
    async announcePartialTransaction(transactionPayload: TransactionPayload): Promise<AnnounceTransactionInfoDTO> {
        const response = await this.announcePartialTransactionRaw({ transactionPayload: transactionPayload });
        return await response.value();
    }

    /**
     * Announces a transaction to the network. The [catbuffer library](https://github.com/nemtech/catbuffer) defines the protocol to serialize and deserialize Symbol entities. Catbuffers are integrated into [Symbol SDKs](https://nemtech.github.io/sdk.html).  It\'s recommended to use SDKs instead of calling the API endpoint directly to announce transactions. 
     * Announce a new transaction
     */
    async announceTransactionRaw(requestParameters: AnnounceTransactionRequest): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>> {
        if (requestParameters.transactionPayload === null || requestParameters.transactionPayload === undefined) {
            throw new runtime.RequiredError('transactionPayload','Required parameter requestParameters.transactionPayload was null or undefined when calling announceTransaction.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transactions`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionPayloadToJSON(requestParameters.transactionPayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AnnounceTransactionInfoDTOFromJSON(jsonValue));
    }

    /**
     * Announces a transaction to the network. The [catbuffer library](https://github.com/nemtech/catbuffer) defines the protocol to serialize and deserialize Symbol entities. Catbuffers are integrated into [Symbol SDKs](https://nemtech.github.io/sdk.html).  It\'s recommended to use SDKs instead of calling the API endpoint directly to announce transactions. 
     * Announce a new transaction
     */
    async announceTransaction(transactionPayload: TransactionPayload): Promise<AnnounceTransactionInfoDTO> {
        const response = await this.announceTransactionRaw({ transactionPayload: transactionPayload });
        return await response.value();
    }

    /**
     * Returns confirmed transaction information given a transactionId or hash.
     * Get confirmed transaction information
     */
    async getConfirmedTransactionRaw(requestParameters: GetConfirmedTransactionRequest): Promise<runtime.ApiResponse<TransactionInfoDTO>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling getConfirmedTransaction.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/transactions/confirmed/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns confirmed transaction information given a transactionId or hash.
     * Get confirmed transaction information
     */
    async getConfirmedTransaction(transactionId: string): Promise<TransactionInfoDTO> {
        const response = await this.getConfirmedTransactionRaw({ transactionId: transactionId });
        return await response.value();
    }

    /**
     * Returns confirmed transactions information for a given array of transactionIds.
     * Get confirmed trasactions information
     */
    async getConfirmedTransactionsRaw(requestParameters: GetConfirmedTransactionsRequest): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>> {
        if (requestParameters.transactionIds === null || requestParameters.transactionIds === undefined) {
            throw new runtime.RequiredError('transactionIds','Required parameter requestParameters.transactionIds was null or undefined when calling getConfirmedTransactions.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transactions/confirmed`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionIdsToJSON(requestParameters.transactionIds),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionInfoDTOFromJSON));
    }

    /**
     * Returns confirmed transactions information for a given array of transactionIds.
     * Get confirmed trasactions information
     */
    async getConfirmedTransactions(transactionIds: TransactionIds): Promise<Array<TransactionInfoDTO>> {
        const response = await this.getConfirmedTransactionsRaw({ transactionIds: transactionIds });
        return await response.value();
    }

    /**
     * Returns partial transaction information given a transactionId or hash.
     * Get partial transaction information
     */
    async getPartialTransactionRaw(requestParameters: GetPartialTransactionRequest): Promise<runtime.ApiResponse<TransactionInfoDTO>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling getPartialTransaction.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/transactions/partial/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns partial transaction information given a transactionId or hash.
     * Get partial transaction information
     */
    async getPartialTransaction(transactionId: string): Promise<TransactionInfoDTO> {
        const response = await this.getPartialTransactionRaw({ transactionId: transactionId });
        return await response.value();
    }

    /**
     * Returns partial transactions information for a given array of transactionIds.
     * Get partial trasactions information
     */
    async getPartialTransactionsRaw(requestParameters: GetPartialTransactionsRequest): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>> {
        if (requestParameters.transactionIds === null || requestParameters.transactionIds === undefined) {
            throw new runtime.RequiredError('transactionIds','Required parameter requestParameters.transactionIds was null or undefined when calling getPartialTransactions.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transactions/partial`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionIdsToJSON(requestParameters.transactionIds),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionInfoDTOFromJSON));
    }

    /**
     * Returns partial transactions information for a given array of transactionIds.
     * Get partial trasactions information
     */
    async getPartialTransactions(transactionIds: TransactionIds): Promise<Array<TransactionInfoDTO>> {
        const response = await this.getPartialTransactionsRaw({ transactionIds: transactionIds });
        return await response.value();
    }

    /**
     * Returns unconfirmed transaction information given a transactionId or hash.
     * Get unconfirmed transaction information
     */
    async getUnconfirmedTransactionRaw(requestParameters: GetUnconfirmedTransactionRequest): Promise<runtime.ApiResponse<TransactionInfoDTO>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling getUnconfirmedTransaction.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/transactions/unconfirmed/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns unconfirmed transaction information given a transactionId or hash.
     * Get unconfirmed transaction information
     */
    async getUnconfirmedTransaction(transactionId: string): Promise<TransactionInfoDTO> {
        const response = await this.getUnconfirmedTransactionRaw({ transactionId: transactionId });
        return await response.value();
    }

    /**
     * Returns unconfirmed transactions information for a given array of transactionIds.
     * Get unconfirmed trasactions information
     */
    async getUnconfirmedTransactionsRaw(requestParameters: GetUnconfirmedTransactionsRequest): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>> {
        if (requestParameters.transactionIds === null || requestParameters.transactionIds === undefined) {
            throw new runtime.RequiredError('transactionIds','Required parameter requestParameters.transactionIds was null or undefined when calling getUnconfirmedTransactions.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transactions/unconfirmed`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionIdsToJSON(requestParameters.transactionIds),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionInfoDTOFromJSON));
    }

    /**
     * Returns unconfirmed transactions information for a given array of transactionIds.
     * Get unconfirmed trasactions information
     */
    async getUnconfirmedTransactions(transactionIds: TransactionIds): Promise<Array<TransactionInfoDTO>> {
        const response = await this.getUnconfirmedTransactionsRaw({ transactionIds: transactionIds });
        return await response.value();
    }

    /**
     * Returns an array of confirmed transactions. If a transaction was announced with an alias rather than an address, the address that will be considered when querying is the one that was resolved from the alias at confirmation time. 
     * Search confirmed transactions
     */
    async searchConfirmedTransactionsRaw(requestParameters: SearchConfirmedTransactionsRequest): Promise<runtime.ApiResponse<TransactionPage>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipientAddress'] = requestParameters.recipientAddress;
        }

        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }

        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }

        if (requestParameters.fromHeight !== undefined) {
            queryParameters['fromHeight'] = requestParameters.fromHeight;
        }

        if (requestParameters.toHeight !== undefined) {
            queryParameters['toHeight'] = requestParameters.toHeight;
        }

        if (requestParameters.fromTransferAmount !== undefined) {
            queryParameters['fromTransferAmount'] = requestParameters.fromTransferAmount;
        }

        if (requestParameters.toTransferAmount !== undefined) {
            queryParameters['toTransferAmount'] = requestParameters.toTransferAmount;
        }

        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.embedded !== undefined) {
            queryParameters['embedded'] = requestParameters.embedded;
        }

        if (requestParameters.transferMosaicId !== undefined) {
            queryParameters['transferMosaicId'] = requestParameters.transferMosaicId;
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
            path: `/transactions/confirmed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionPageFromJSON(jsonValue));
    }

    /**
     * Returns an array of confirmed transactions. If a transaction was announced with an alias rather than an address, the address that will be considered when querying is the one that was resolved from the alias at confirmation time. 
     * Search confirmed transactions
     */
    async searchConfirmedTransactions(address?: string, recipientAddress?: string, signerPublicKey?: string, height?: string, fromHeight?: string, toHeight?: string, fromTransferAmount?: string, toTransferAmount?: string, type?: Array<TransactionTypeEnum>, embedded?: boolean, transferMosaicId?: string, pageSize?: number, pageNumber?: number, offset?: string, order?: Order): Promise<TransactionPage> {
        const response = await this.searchConfirmedTransactionsRaw({ address: address, recipientAddress: recipientAddress, signerPublicKey: signerPublicKey, height: height, fromHeight: fromHeight, toHeight: toHeight, fromTransferAmount: fromTransferAmount, toTransferAmount: toTransferAmount, type: type, embedded: embedded, transferMosaicId: transferMosaicId, pageSize: pageSize, pageNumber: pageNumber, offset: offset, order: order });
        return await response.value();
    }

    /**
     * Returns an array of partial transactions.
     * Search partial transactions
     */
    async searchPartialTransactionsRaw(requestParameters: SearchPartialTransactionsRequest): Promise<runtime.ApiResponse<TransactionPage>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipientAddress'] = requestParameters.recipientAddress;
        }

        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }

        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }

        if (requestParameters.fromHeight !== undefined) {
            queryParameters['fromHeight'] = requestParameters.fromHeight;
        }

        if (requestParameters.toHeight !== undefined) {
            queryParameters['toHeight'] = requestParameters.toHeight;
        }

        if (requestParameters.fromTransferAmount !== undefined) {
            queryParameters['fromTransferAmount'] = requestParameters.fromTransferAmount;
        }

        if (requestParameters.toTransferAmount !== undefined) {
            queryParameters['toTransferAmount'] = requestParameters.toTransferAmount;
        }

        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.embedded !== undefined) {
            queryParameters['embedded'] = requestParameters.embedded;
        }

        if (requestParameters.transferMosaicId !== undefined) {
            queryParameters['transferMosaicId'] = requestParameters.transferMosaicId;
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
            path: `/transactions/partial`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionPageFromJSON(jsonValue));
    }

    /**
     * Returns an array of partial transactions.
     * Search partial transactions
     */
    async searchPartialTransactions(address?: string, recipientAddress?: string, signerPublicKey?: string, height?: string, fromHeight?: string, toHeight?: string, fromTransferAmount?: string, toTransferAmount?: string, type?: Array<TransactionTypeEnum>, embedded?: boolean, transferMosaicId?: string, pageSize?: number, pageNumber?: number, offset?: string, order?: Order): Promise<TransactionPage> {
        const response = await this.searchPartialTransactionsRaw({ address: address, recipientAddress: recipientAddress, signerPublicKey: signerPublicKey, height: height, fromHeight: fromHeight, toHeight: toHeight, fromTransferAmount: fromTransferAmount, toTransferAmount: toTransferAmount, type: type, embedded: embedded, transferMosaicId: transferMosaicId, pageSize: pageSize, pageNumber: pageNumber, offset: offset, order: order });
        return await response.value();
    }

    /**
     * Returns an array of unconfirmed transactions.
     * Search unconfirmed transactions
     */
    async searchUnconfirmedTransactionsRaw(requestParameters: SearchUnconfirmedTransactionsRequest): Promise<runtime.ApiResponse<TransactionPage>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipientAddress'] = requestParameters.recipientAddress;
        }

        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }

        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }

        if (requestParameters.fromHeight !== undefined) {
            queryParameters['fromHeight'] = requestParameters.fromHeight;
        }

        if (requestParameters.toHeight !== undefined) {
            queryParameters['toHeight'] = requestParameters.toHeight;
        }

        if (requestParameters.fromTransferAmount !== undefined) {
            queryParameters['fromTransferAmount'] = requestParameters.fromTransferAmount;
        }

        if (requestParameters.toTransferAmount !== undefined) {
            queryParameters['toTransferAmount'] = requestParameters.toTransferAmount;
        }

        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.embedded !== undefined) {
            queryParameters['embedded'] = requestParameters.embedded;
        }

        if (requestParameters.transferMosaicId !== undefined) {
            queryParameters['transferMosaicId'] = requestParameters.transferMosaicId;
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
            path: `/transactions/unconfirmed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionPageFromJSON(jsonValue));
    }

    /**
     * Returns an array of unconfirmed transactions.
     * Search unconfirmed transactions
     */
    async searchUnconfirmedTransactions(address?: string, recipientAddress?: string, signerPublicKey?: string, height?: string, fromHeight?: string, toHeight?: string, fromTransferAmount?: string, toTransferAmount?: string, type?: Array<TransactionTypeEnum>, embedded?: boolean, transferMosaicId?: string, pageSize?: number, pageNumber?: number, offset?: string, order?: Order): Promise<TransactionPage> {
        const response = await this.searchUnconfirmedTransactionsRaw({ address: address, recipientAddress: recipientAddress, signerPublicKey: signerPublicKey, height: height, fromHeight: fromHeight, toHeight: toHeight, fromTransferAmount: fromTransferAmount, toTransferAmount: toTransferAmount, type: type, embedded: embedded, transferMosaicId: transferMosaicId, pageSize: pageSize, pageNumber: pageNumber, offset: offset, order: order });
        return await response.value();
    }

}

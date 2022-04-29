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
/**
 *
 * @export
 * @interface StorageInfoDTO
 */
export interface StorageInfoDTO {
    /**
     * Number of blocks stored.
     * @type {number}
     * @memberof StorageInfoDTO
     */
    numBlocks: number;
    /**
     * Number of transactions stored.
     * @type {number}
     * @memberof StorageInfoDTO
     */
    numTransactions: number;
    /**
     * Number of accounts created.
     * @type {number}
     * @memberof StorageInfoDTO
     */
    numAccounts: number;
}
export declare function StorageInfoDTOFromJSON(json: any): StorageInfoDTO;
export declare function StorageInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageInfoDTO;
export declare function StorageInfoDTOToJSON(value?: StorageInfoDTO | null): any;

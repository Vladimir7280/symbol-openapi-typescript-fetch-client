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
 * @interface TransactionFeesDTO
 */
export interface TransactionFeesDTO {
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof TransactionFeesDTO
     */
    averageFeeMultiplier: number;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof TransactionFeesDTO
     */
    medianFeeMultiplier: number;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof TransactionFeesDTO
     */
    highestFeeMultiplier: number;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof TransactionFeesDTO
     */
    lowestFeeMultiplier: number;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof TransactionFeesDTO
     */
    minFeeMultiplier: number;
}
export declare function TransactionFeesDTOFromJSON(json: any): TransactionFeesDTO;
export declare function TransactionFeesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFeesDTO;
export declare function TransactionFeesDTOToJSON(value?: TransactionFeesDTO | null): any;

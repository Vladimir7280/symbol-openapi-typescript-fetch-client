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
 * @interface TransactionBodyDTO
 */
export interface TransactionBodyDTO {
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof TransactionBodyDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof TransactionBodyDTO
     */
    deadline: string;
}
export declare function TransactionBodyDTOFromJSON(json: any): TransactionBodyDTO;
export declare function TransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionBodyDTO;
export declare function TransactionBodyDTOToJSON(value?: TransactionBodyDTO | null): any;

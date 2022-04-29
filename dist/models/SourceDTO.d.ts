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
 * Transaction that triggered the receipt.
 * @export
 * @interface SourceDTO
 */
export interface SourceDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof SourceDTO
     */
    primaryId: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof SourceDTO
     */
    secondaryId: number;
}
export declare function SourceDTOFromJSON(json: any): SourceDTO;
export declare function SourceDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceDTO;
export declare function SourceDTOToJSON(value?: SourceDTO | null): any;

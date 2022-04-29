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
 * @interface SizePrefixedEntityDTO
 */
export interface SizePrefixedEntityDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof SizePrefixedEntityDTO
     */
    size: number;
}
export declare function SizePrefixedEntityDTOFromJSON(json: any): SizePrefixedEntityDTO;
export declare function SizePrefixedEntityDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SizePrefixedEntityDTO;
export declare function SizePrefixedEntityDTOToJSON(value?: SizePrefixedEntityDTO | null): any;

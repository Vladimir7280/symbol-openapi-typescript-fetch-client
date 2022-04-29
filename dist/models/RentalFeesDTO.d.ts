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
 * @interface RentalFeesDTO
 */
export interface RentalFeesDTO {
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof RentalFeesDTO
     */
    effectiveRootNamespaceRentalFeePerBlock: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof RentalFeesDTO
     */
    effectiveChildNamespaceRentalFee: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof RentalFeesDTO
     */
    effectiveMosaicRentalFee: string;
}
export declare function RentalFeesDTOFromJSON(json: any): RentalFeesDTO;
export declare function RentalFeesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): RentalFeesDTO;
export declare function RentalFeesDTOToJSON(value?: RentalFeesDTO | null): any;
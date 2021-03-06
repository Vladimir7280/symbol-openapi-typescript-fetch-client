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
 * @interface MosaicRestrictionNetworkPropertiesDTO
 */
export interface MosaicRestrictionNetworkPropertiesDTO {
    /**
     * Maximum number of mosaic restriction values.
     * @type {string}
     * @memberof MosaicRestrictionNetworkPropertiesDTO
     */
    maxMosaicRestrictionValues?: string;
}
export declare function MosaicRestrictionNetworkPropertiesDTOFromJSON(json: any): MosaicRestrictionNetworkPropertiesDTO;
export declare function MosaicRestrictionNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionNetworkPropertiesDTO;
export declare function MosaicRestrictionNetworkPropertiesDTOToJSON(value?: MosaicRestrictionNetworkPropertiesDTO | null): any;

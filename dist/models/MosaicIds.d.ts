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
 * @interface MosaicIds
 */
export interface MosaicIds {
    /**
     * Array of mosaic identifiers.
     * @type {Array<string>}
     * @memberof MosaicIds
     */
    mosaicIds?: Array<string>;
}
export declare function MosaicIdsFromJSON(json: any): MosaicIds;
export declare function MosaicIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicIds;
export declare function MosaicIdsToJSON(value?: MosaicIds | null): any;

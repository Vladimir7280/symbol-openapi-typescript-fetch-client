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
import { MosaicNamesDTO } from './';
/**
 *
 * @export
 * @interface MosaicsNamesDTO
 */
export interface MosaicsNamesDTO {
    /**
     * Array of mosaic names.
     * @type {Array<MosaicNamesDTO>}
     * @memberof MosaicsNamesDTO
     */
    mosaicNames: Array<MosaicNamesDTO>;
}
export declare function MosaicsNamesDTOFromJSON(json: any): MosaicsNamesDTO;
export declare function MosaicsNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicsNamesDTO;
export declare function MosaicsNamesDTOToJSON(value?: MosaicsNamesDTO | null): any;

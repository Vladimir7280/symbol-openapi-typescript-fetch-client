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
 * @interface NetworkTypeDTO
 */
export interface NetworkTypeDTO {
    /**
     * Network name.
     * @type {string}
     * @memberof NetworkTypeDTO
     */
    name: string;
    /**
     * A short text describing the network.
     * @type {string}
     * @memberof NetworkTypeDTO
     */
    description: string;
}
export declare function NetworkTypeDTOFromJSON(json: any): NetworkTypeDTO;
export declare function NetworkTypeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkTypeDTO;
export declare function NetworkTypeDTOToJSON(value?: NetworkTypeDTO | null): any;

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
import { NodeHealthDTO } from './';
/**
 *
 * @export
 * @interface NodeHealthInfoDTO
 */
export interface NodeHealthInfoDTO {
    /**
     *
     * @type {NodeHealthDTO}
     * @memberof NodeHealthInfoDTO
     */
    status: NodeHealthDTO;
}
export declare function NodeHealthInfoDTOFromJSON(json: any): NodeHealthInfoDTO;
export declare function NodeHealthInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHealthInfoDTO;
export declare function NodeHealthInfoDTOToJSON(value?: NodeHealthInfoDTO | null): any;

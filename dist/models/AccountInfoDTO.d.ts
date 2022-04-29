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
import { AccountDTO } from './';
/**
 *
 * @export
 * @interface AccountInfoDTO
 */
export interface AccountInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof AccountInfoDTO
     */
    id: string;
    /**
     *
     * @type {AccountDTO}
     * @memberof AccountInfoDTO
     */
    account: AccountDTO;
}
export declare function AccountInfoDTOFromJSON(json: any): AccountInfoDTO;
export declare function AccountInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountInfoDTO;
export declare function AccountInfoDTOToJSON(value?: AccountInfoDTO | null): any;
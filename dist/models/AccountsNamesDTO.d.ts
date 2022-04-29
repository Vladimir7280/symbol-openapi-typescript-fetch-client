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
import { AccountNamesDTO } from './';
/**
 *
 * @export
 * @interface AccountsNamesDTO
 */
export interface AccountsNamesDTO {
    /**
     * Array of account names.
     * @type {Array<AccountNamesDTO>}
     * @memberof AccountsNamesDTO
     */
    accountNames: Array<AccountNamesDTO>;
}
export declare function AccountsNamesDTOFromJSON(json: any): AccountsNamesDTO;
export declare function AccountsNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsNamesDTO;
export declare function AccountsNamesDTOToJSON(value?: AccountsNamesDTO | null): any;

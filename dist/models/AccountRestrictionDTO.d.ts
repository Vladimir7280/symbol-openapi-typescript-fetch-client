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
import { AccountRestrictionFlagsEnum, TransactionTypeEnum } from './';
/**
 *
 * @export
 * @interface AccountRestrictionDTO
 */
export interface AccountRestrictionDTO {
    /**
     *
     * @type {AccountRestrictionFlagsEnum}
     * @memberof AccountRestrictionDTO
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Address, mosaic id, or transaction type to restrict.
     * @type {Array<string | TransactionTypeEnum>}
     * @memberof AccountRestrictionDTO
     */
    values: Array<string | TransactionTypeEnum>;
}
export declare function AccountRestrictionDTOFromJSON(json: any): AccountRestrictionDTO;
export declare function AccountRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionDTO;
export declare function AccountRestrictionDTOToJSON(value?: AccountRestrictionDTO | null): any;

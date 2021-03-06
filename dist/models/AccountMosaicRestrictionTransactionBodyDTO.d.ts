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
import { AccountRestrictionFlagsEnum } from './';
/**
 *
 * @export
 * @interface AccountMosaicRestrictionTransactionBodyDTO
 */
export interface AccountMosaicRestrictionTransactionBodyDTO {
    /**
     *
     * @type {AccountRestrictionFlagsEnum}
     * @memberof AccountMosaicRestrictionTransactionBodyDTO
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Account restriction additions.
     * @type {Array<string>}
     * @memberof AccountMosaicRestrictionTransactionBodyDTO
     */
    restrictionAdditions: Array<string>;
    /**
     * Account restriction deletions.
     * @type {Array<string>}
     * @memberof AccountMosaicRestrictionTransactionBodyDTO
     */
    restrictionDeletions: Array<string>;
}
export declare function AccountMosaicRestrictionTransactionBodyDTOFromJSON(json: any): AccountMosaicRestrictionTransactionBodyDTO;
export declare function AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountMosaicRestrictionTransactionBodyDTO;
export declare function AccountMosaicRestrictionTransactionBodyDTOToJSON(value?: AccountMosaicRestrictionTransactionBodyDTO | null): any;

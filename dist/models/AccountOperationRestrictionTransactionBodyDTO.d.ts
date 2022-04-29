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
 * @interface AccountOperationRestrictionTransactionBodyDTO
 */
export interface AccountOperationRestrictionTransactionBodyDTO {
    /**
     *
     * @type {AccountRestrictionFlagsEnum}
     * @memberof AccountOperationRestrictionTransactionBodyDTO
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Account restriction additions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof AccountOperationRestrictionTransactionBodyDTO
     */
    restrictionAdditions: Array<TransactionTypeEnum>;
    /**
     * Account restriction deletions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof AccountOperationRestrictionTransactionBodyDTO
     */
    restrictionDeletions: Array<TransactionTypeEnum>;
}
export declare function AccountOperationRestrictionTransactionBodyDTOFromJSON(json: any): AccountOperationRestrictionTransactionBodyDTO;
export declare function AccountOperationRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOperationRestrictionTransactionBodyDTO;
export declare function AccountOperationRestrictionTransactionBodyDTOToJSON(value?: AccountOperationRestrictionTransactionBodyDTO | null): any;

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
 * @interface MultisigNetworkPropertiesDTO
 */
export interface MultisigNetworkPropertiesDTO {
    /**
     * Maximum number of multisig levels.
     * @type {string}
     * @memberof MultisigNetworkPropertiesDTO
     */
    maxMultisigDepth?: string;
    /**
     * Maximum number of cosignatories per account.
     * @type {string}
     * @memberof MultisigNetworkPropertiesDTO
     */
    maxCosignatoriesPerAccount?: string;
    /**
     * Maximum number of accounts a single account can cosign.
     * @type {string}
     * @memberof MultisigNetworkPropertiesDTO
     */
    maxCosignedAccountsPerAccount?: string;
}
export declare function MultisigNetworkPropertiesDTOFromJSON(json: any): MultisigNetworkPropertiesDTO;
export declare function MultisigNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigNetworkPropertiesDTO;
export declare function MultisigNetworkPropertiesDTOToJSON(value?: MultisigNetworkPropertiesDTO | null): any;

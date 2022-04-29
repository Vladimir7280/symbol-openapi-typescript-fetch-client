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
import { NamespaceRegistrationTypeEnum, NetworkTypeEnum } from './';
/**
 *
 * @export
 * @interface EmbeddedNamespaceRegistrationTransactionDTO
 */
export interface EmbeddedNamespaceRegistrationTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    type: number;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    duration?: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    parentId?: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    id: string;
    /**
     *
     * @type {NamespaceRegistrationTypeEnum}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    registrationType: NamespaceRegistrationTypeEnum;
    /**
     * Namespace name.
     * @type {string}
     * @memberof EmbeddedNamespaceRegistrationTransactionDTO
     */
    name: string;
}
export declare function EmbeddedNamespaceRegistrationTransactionDTOFromJSON(json: any): EmbeddedNamespaceRegistrationTransactionDTO;
export declare function EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedNamespaceRegistrationTransactionDTO;
export declare function EmbeddedNamespaceRegistrationTransactionDTOToJSON(value?: EmbeddedNamespaceRegistrationTransactionDTO | null): any;

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
import { LinkActionEnum, NetworkTypeEnum } from './';
/**
 *
 * @export
 * @interface EmbeddedVotingKeyLinkTransactionDTO
 */
export interface EmbeddedVotingKeyLinkTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    type: number;
    /**
     * 32 bytes voting public key.
     * @type {string}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    linkedPublicKey: string;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    startEpoch: number;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    endEpoch: number;
    /**
     *
     * @type {LinkActionEnum}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    linkAction: LinkActionEnum;
}
export declare function EmbeddedVotingKeyLinkTransactionDTOFromJSON(json: any): EmbeddedVotingKeyLinkTransactionDTO;
export declare function EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedVotingKeyLinkTransactionDTO;
export declare function EmbeddedVotingKeyLinkTransactionDTOToJSON(value?: EmbeddedVotingKeyLinkTransactionDTO | null): any;

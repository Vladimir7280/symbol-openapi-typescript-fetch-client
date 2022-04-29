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
import { NetworkTypeEnum } from './';
/**
 *
 * @export
 * @interface ImportanceBlockDTO
 */
export interface ImportanceBlockDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof ImportanceBlockDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    type: number;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    height: string;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    timestamp: string;
    /**
     * Determines how hard is to harvest a new block, based on previous blocks.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    difficulty: string;
    /**
     * 32-bytes VRF proof gamma.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    proofGamma: string;
    /**
     * 16-bytes VRF proof verification hash.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    proofVerificationHash: string;
    /**
     * 32-bytes VRF proof scalar.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    proofScalar: string;
    /**
     *
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    previousBlockHash: string;
    /**
     *
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    transactionsHash: string;
    /**
     *
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    receiptsHash: string;
    /**
     *
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    stateHash: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    beneficiaryAddress: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    feeMultiplier: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    totalSupply: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    feeToPay: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    inflation: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    collectedEpochFees: string;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    votingEligibleAccountsCount: number;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    harvestingEligibleAccountsCount: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    totalVotingBalance: string;
    /**
     *
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    previousImportanceBlockHash: string;
}
export declare function ImportanceBlockDTOFromJSON(json: any): ImportanceBlockDTO;
export declare function ImportanceBlockDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportanceBlockDTO;
export declare function ImportanceBlockDTOToJSON(value?: ImportanceBlockDTO | null): any;

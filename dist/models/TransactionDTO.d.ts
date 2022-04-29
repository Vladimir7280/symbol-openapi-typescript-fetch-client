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
 * @interface TransactionDTO
 */
export interface TransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof TransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof TransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof TransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof TransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof TransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof TransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof TransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof TransactionDTO
     */
    deadline: string;
}
export declare function TransactionDTOFromJSON(json: any): TransactionDTO;
export declare function TransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDTO;
export declare function TransactionDTOToJSON(value?: TransactionDTO | null): any;

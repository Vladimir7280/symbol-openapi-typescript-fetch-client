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
import { UnresolvedMosaic } from './';
/**
 *
 * @export
 * @interface TransferTransactionBodyDTO
 */
export interface TransferTransactionBodyDTO {
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof TransferTransactionBodyDTO
     */
    recipientAddress: string;
    /**
     * Array of mosaics sent to the recipient.
     * @type {Array<UnresolvedMosaic>}
     * @memberof TransferTransactionBodyDTO
     */
    mosaics: Array<UnresolvedMosaic>;
    /**
     * Transfer transaction message
     * @type {string}
     * @memberof TransferTransactionBodyDTO
     */
    message?: string;
}
export declare function TransferTransactionBodyDTOFromJSON(json: any): TransferTransactionBodyDTO;
export declare function TransferTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTransactionBodyDTO;
export declare function TransferTransactionBodyDTOToJSON(value?: TransferTransactionBodyDTO | null): any;
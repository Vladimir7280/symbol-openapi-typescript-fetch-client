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
import { BalanceChangeReceiptDTO, BalanceTransferReceiptDTO, InflationReceiptDTO, MosaicExpiryReceiptDTO, NamespaceExpiryReceiptDTO, SourceDTO } from './';
/**
 *
 * @export
 * @interface TransactionStatementDTO
 */
export interface TransactionStatementDTO {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof TransactionStatementDTO
     */
    height: string;
    /**
     *
     * @type {SourceDTO}
     * @memberof TransactionStatementDTO
     */
    source: SourceDTO;
    /**
     * Array of receipts.
     * @type {Array<BalanceTransferReceiptDTO | BalanceChangeReceiptDTO | NamespaceExpiryReceiptDTO | MosaicExpiryReceiptDTO | InflationReceiptDTO>}
     * @memberof TransactionStatementDTO
     */
    receipts: Array<BalanceTransferReceiptDTO | BalanceChangeReceiptDTO | NamespaceExpiryReceiptDTO | MosaicExpiryReceiptDTO | InflationReceiptDTO>;
}
export declare function TransactionStatementDTOFromJSON(json: any): TransactionStatementDTO;
export declare function TransactionStatementDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatementDTO;
export declare function TransactionStatementDTOToJSON(value?: TransactionStatementDTO | null): any;

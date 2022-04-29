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
import { LinkActionEnum } from './';
/**
 *
 * @export
 * @interface NodeKeyLinkTransactionBodyDTO
 */
export interface NodeKeyLinkTransactionBodyDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof NodeKeyLinkTransactionBodyDTO
     */
    linkedPublicKey: string;
    /**
     *
     * @type {LinkActionEnum}
     * @memberof NodeKeyLinkTransactionBodyDTO
     */
    linkAction: LinkActionEnum;
}
export declare function NodeKeyLinkTransactionBodyDTOFromJSON(json: any): NodeKeyLinkTransactionBodyDTO;
export declare function NodeKeyLinkTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeKeyLinkTransactionBodyDTO;
export declare function NodeKeyLinkTransactionBodyDTOToJSON(value?: NodeKeyLinkTransactionBodyDTO | null): any;

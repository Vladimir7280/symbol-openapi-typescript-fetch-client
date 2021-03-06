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
import { MessageGroup } from './';
/**
 *
 * @export
 * @interface FinalizationProofDTO
 */
export interface FinalizationProofDTO {
    /**
     *
     * @type {number}
     * @memberof FinalizationProofDTO
     */
    version: number;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof FinalizationProofDTO
     */
    finalizationEpoch: number;
    /**
     * Finalization point
     * @type {number}
     * @memberof FinalizationProofDTO
     */
    finalizationPoint: number;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof FinalizationProofDTO
     */
    height: string;
    /**
     *
     * @type {string}
     * @memberof FinalizationProofDTO
     */
    hash: string;
    /**
     *
     * @type {Array<MessageGroup>}
     * @memberof FinalizationProofDTO
     */
    messageGroups: Array<MessageGroup>;
}
export declare function FinalizationProofDTOFromJSON(json: any): FinalizationProofDTO;
export declare function FinalizationProofDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinalizationProofDTO;
export declare function FinalizationProofDTOToJSON(value?: FinalizationProofDTO | null): any;

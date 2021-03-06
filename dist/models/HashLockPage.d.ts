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
import { HashLockInfoDTO, Pagination } from './';
/**
 *
 * @export
 * @interface HashLockPage
 */
export interface HashLockPage {
    /**
     * Array of hash locks.
     * @type {Array<HashLockInfoDTO>}
     * @memberof HashLockPage
     */
    data: Array<HashLockInfoDTO>;
    /**
     *
     * @type {Pagination}
     * @memberof HashLockPage
     */
    pagination: Pagination;
}
export declare function HashLockPageFromJSON(json: any): HashLockPage;
export declare function HashLockPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockPage;
export declare function HashLockPageToJSON(value?: HashLockPage | null): any;

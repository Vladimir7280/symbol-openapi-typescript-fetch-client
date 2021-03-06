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
 * @interface Addresses
 */
export interface Addresses {
    /**
     * Array of addresses.
     * @type {Array<string>}
     * @memberof Addresses
     */
    addresses?: Array<string>;
}
export declare function AddressesFromJSON(json: any): Addresses;
export declare function AddressesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Addresses;
export declare function AddressesToJSON(value?: Addresses | null): any;

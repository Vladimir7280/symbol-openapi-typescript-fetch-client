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
 * @interface MosaicAddressRestrictionTransactionBodyDTO
 */
export interface MosaicAddressRestrictionTransactionBodyDTO {
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    mosaicId: string;
    /**
     * Restriction key.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    restrictionKey: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    previousRestrictionValue: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    newRestrictionValue: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    targetAddress: string;
}
export declare function MosaicAddressRestrictionTransactionBodyDTOFromJSON(json: any): MosaicAddressRestrictionTransactionBodyDTO;
export declare function MosaicAddressRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionTransactionBodyDTO;
export declare function MosaicAddressRestrictionTransactionBodyDTOToJSON(value?: MosaicAddressRestrictionTransactionBodyDTO | null): any;

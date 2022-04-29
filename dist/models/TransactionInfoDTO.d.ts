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
import { AccountAddressRestrictionTransactionDTO, AccountKeyLinkTransactionDTO, AccountMetadataTransactionDTO, AccountMosaicRestrictionTransactionDTO, AccountOperationRestrictionTransactionDTO, AddressAliasTransactionDTO, AggregateTransactionDTO, AggregateTransactionExtendedDTO, EmbeddedAccountAddressRestrictionTransactionDTO, EmbeddedAccountKeyLinkTransactionDTO, EmbeddedAccountMetadataTransactionDTO, EmbeddedAccountMosaicRestrictionTransactionDTO, EmbeddedAccountOperationRestrictionTransactionDTO, EmbeddedAddressAliasTransactionDTO, EmbeddedHashLockTransactionDTO, EmbeddedMosaicAddressRestrictionTransactionDTO, EmbeddedMosaicAliasTransactionDTO, EmbeddedMosaicDefinitionTransactionDTO, EmbeddedMosaicGlobalRestrictionTransactionDTO, EmbeddedMosaicMetadataTransactionDTO, EmbeddedMosaicSupplyChangeTransactionDTO, EmbeddedMultisigAccountModificationTransactionDTO, EmbeddedNamespaceMetadataTransactionDTO, EmbeddedNamespaceRegistrationTransactionDTO, EmbeddedNodeKeyLinkTransactionDTO, EmbeddedSecretLockTransactionDTO, EmbeddedSecretProofTransactionDTO, EmbeddedTransactionMetaDTO, EmbeddedTransferTransactionDTO, EmbeddedVotingKeyLinkTransactionDTO, EmbeddedVrfKeyLinkTransactionDTO, HashLockTransactionDTO, MosaicAddressRestrictionTransactionDTO, MosaicAliasTransactionDTO, MosaicDefinitionTransactionDTO, MosaicGlobalRestrictionTransactionDTO, MosaicMetadataTransactionDTO, MosaicSupplyChangeTransactionDTO, MultisigAccountModificationTransactionDTO, NamespaceMetadataTransactionDTO, NamespaceRegistrationTransactionDTO, NodeKeyLinkTransactionDTO, SecretLockTransactionDTO, SecretProofTransactionDTO, TransactionMetaDTO, TransferTransactionDTO, VotingKeyLinkTransactionDTO, VrfKeyLinkTransactionDTO } from './';
/**
 *
 * @export
 * @interface TransactionInfoDTO
 */
export interface TransactionInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof TransactionInfoDTO
     */
    id: string;
    /**
     *
     * @type {TransactionMetaDTO | EmbeddedTransactionMetaDTO}
     * @memberof TransactionInfoDTO
     */
    meta: TransactionMetaDTO | EmbeddedTransactionMetaDTO;
    /**
     *
     * @type {AccountKeyLinkTransactionDTO | EmbeddedAccountKeyLinkTransactionDTO | NodeKeyLinkTransactionDTO | EmbeddedNodeKeyLinkTransactionDTO | VrfKeyLinkTransactionDTO | EmbeddedVrfKeyLinkTransactionDTO | VotingKeyLinkTransactionDTO | EmbeddedVotingKeyLinkTransactionDTO | AggregateTransactionDTO | AggregateTransactionExtendedDTO | HashLockTransactionDTO | EmbeddedHashLockTransactionDTO | SecretLockTransactionDTO | EmbeddedSecretLockTransactionDTO | SecretProofTransactionDTO | EmbeddedSecretProofTransactionDTO | AccountMetadataTransactionDTO | EmbeddedAccountMetadataTransactionDTO | MosaicMetadataTransactionDTO | EmbeddedMosaicMetadataTransactionDTO | NamespaceMetadataTransactionDTO | EmbeddedNamespaceMetadataTransactionDTO | MosaicDefinitionTransactionDTO | EmbeddedMosaicDefinitionTransactionDTO | MosaicSupplyChangeTransactionDTO | EmbeddedMosaicSupplyChangeTransactionDTO | NamespaceRegistrationTransactionDTO | EmbeddedNamespaceRegistrationTransactionDTO | AddressAliasTransactionDTO | EmbeddedAddressAliasTransactionDTO | MosaicAliasTransactionDTO | EmbeddedMosaicAliasTransactionDTO | MultisigAccountModificationTransactionDTO | EmbeddedMultisigAccountModificationTransactionDTO | AccountAddressRestrictionTransactionDTO | EmbeddedAccountAddressRestrictionTransactionDTO | AccountMosaicRestrictionTransactionDTO | EmbeddedAccountMosaicRestrictionTransactionDTO | AccountOperationRestrictionTransactionDTO | EmbeddedAccountOperationRestrictionTransactionDTO | MosaicGlobalRestrictionTransactionDTO | EmbeddedMosaicGlobalRestrictionTransactionDTO | MosaicAddressRestrictionTransactionDTO | EmbeddedMosaicAddressRestrictionTransactionDTO | TransferTransactionDTO | EmbeddedTransferTransactionDTO}
     * @memberof TransactionInfoDTO
     */
    transaction: AccountKeyLinkTransactionDTO | EmbeddedAccountKeyLinkTransactionDTO | NodeKeyLinkTransactionDTO | EmbeddedNodeKeyLinkTransactionDTO | VrfKeyLinkTransactionDTO | EmbeddedVrfKeyLinkTransactionDTO | VotingKeyLinkTransactionDTO | EmbeddedVotingKeyLinkTransactionDTO | AggregateTransactionDTO | AggregateTransactionExtendedDTO | HashLockTransactionDTO | EmbeddedHashLockTransactionDTO | SecretLockTransactionDTO | EmbeddedSecretLockTransactionDTO | SecretProofTransactionDTO | EmbeddedSecretProofTransactionDTO | AccountMetadataTransactionDTO | EmbeddedAccountMetadataTransactionDTO | MosaicMetadataTransactionDTO | EmbeddedMosaicMetadataTransactionDTO | NamespaceMetadataTransactionDTO | EmbeddedNamespaceMetadataTransactionDTO | MosaicDefinitionTransactionDTO | EmbeddedMosaicDefinitionTransactionDTO | MosaicSupplyChangeTransactionDTO | EmbeddedMosaicSupplyChangeTransactionDTO | NamespaceRegistrationTransactionDTO | EmbeddedNamespaceRegistrationTransactionDTO | AddressAliasTransactionDTO | EmbeddedAddressAliasTransactionDTO | MosaicAliasTransactionDTO | EmbeddedMosaicAliasTransactionDTO | MultisigAccountModificationTransactionDTO | EmbeddedMultisigAccountModificationTransactionDTO | AccountAddressRestrictionTransactionDTO | EmbeddedAccountAddressRestrictionTransactionDTO | AccountMosaicRestrictionTransactionDTO | EmbeddedAccountMosaicRestrictionTransactionDTO | AccountOperationRestrictionTransactionDTO | EmbeddedAccountOperationRestrictionTransactionDTO | MosaicGlobalRestrictionTransactionDTO | EmbeddedMosaicGlobalRestrictionTransactionDTO | MosaicAddressRestrictionTransactionDTO | EmbeddedMosaicAddressRestrictionTransactionDTO | TransferTransactionDTO | EmbeddedTransferTransactionDTO;
}
export declare function TransactionInfoDTOFromJSON(json: any): TransactionInfoDTO;
export declare function TransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfoDTO;
export declare function TransactionInfoDTOToJSON(value?: TransactionInfoDTO | null): any;
